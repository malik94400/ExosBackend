const express = require('express');
const app = express();

// === Middleware personnalisé ===
function loggerMiddleware(req, res, next) {
    console.log('🟢 Nouvelle requête entrante');
    next(); // Passe au middleware suivant ou à la route
}

// On active ce middleware pour toutes les routes
app.use(loggerMiddleware);

// === Quelques routes pour tester ===
app.get('/', (req, res) => {
    res.send('Bienvenue sur la page d’accueil');
});

app.get('/users', (req, res) => {
    res.send('Liste des utilisateurs');
});

// === Lancement du serveur ===
app.listen(3000, () => {
    console.log('✅ Serveur démarré sur http://localhost:3000');
});