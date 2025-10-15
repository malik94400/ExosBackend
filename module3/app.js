// app.js
const express = require('express');
const app = express();

app.use(express.json());

let nextId = 1;
global.tasks = [];

/**
 * Petite aide: valider les champs d'une tâche
 */
function validateTaskPayload(payload, {partial = false} = {}) {
    const errs = [];

    // En création, on exige title/description; en MAJ partielle, on les rend optionnels
    if (!partial || payload.title !== undefined) {
        if (typeof payload.title !== 'string' || payload.title.trim() === '') {
            errs.push('title doit être une string non vide');
        }
    }

    if (!partial || payload.description !== undefined) {
        if (typeof payload.description !== 'string') {
            errs.push('description doit être une string');
        }
    }

    if (payload.isDone !== undefined && typeof payload.isDone !== 'boolean') {
        errs.push('isDone doit être un boolean');
    }

    return errs;
}

// --- GET /tasks : renvoyer toutes les tâches ---
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// --- POST /new-task : ajouter une nouvelle tâche ---
app.post('/new-task', (req, res) => {
    const {title, description, isDone = false} = req.body || {};
    const errors = validateTaskPayload({title, description, isDone});
    if (errors.length) {
        return res.status(400).json({error: 'Payload invalide', details: errors});
    }

    const newTask = {
        id: nextId++,
        title: title.trim(),
        description,
        isDone,
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// --- PUT /update-task/:id : mettre à jour une tâche spécifique ---
app.put('/update-task/:id', (req, res) => {
    const id = Number(req.params.id);
    const idx = tasks.findIndex(t => t.id === id);
    if (idx === -1) return res.status(404).json({error: 'Tâche introuvable'});

    const {title, description, isDone} = req.body || {};
    const errors = validateTaskPayload({title, description, isDone}, {partial: true});
    if (errors.length) {
        return res.status(400).json({error: 'Payload invalide', details: errors});
    }

    // Mise à jour uniquement des champs fournis
    if (title !== undefined) tasks[idx].title = title.trim();
    if (description !== undefined) tasks[idx].description = description;
    if (isDone !== undefined) tasks[idx].isDone = isDone;

    res.json(tasks[idx]);
});

// --- DELETE /delete-task/:id : supprimer une tâche ---
app.delete('/delete-task/:id', (req, res) => {
    const id = Number(req.params.id);
    const idx = tasks.findIndex(t => t.id === id);
    if (idx === -1) return res.status(404).json({error: 'Tâche introuvable'});

    const removed = tasks.splice(idx, 1)[0];
    res.json({message: 'Tâche supprimée', task: removed});
});

// --- Démarrage serveur ---
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ API Todo démarrée sur http://localhost:${PORT}`);
});