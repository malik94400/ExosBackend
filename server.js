const express = require('express');
const path = require('path');
const app = express();

// Dossier statique public
app.use(express.static(path.join(__dirname, 'public')));

// Dossier des fichiers HTML
app.use(express.static(path.join(__dirname, 'templates')));

app.listen(3000, () => {
    console.log('✅ Serveur lancé sur http://localhost:3000');
});