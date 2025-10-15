// Importer la librairie pg
const { Client } = require('pg');

// Créer une instance de Client avec les paramètres de connexion
const client = new Client({
    host: 'localhost',
    database: 'mabase',
    user: 'postgres',
    password: '',
    port: 5432
});

// Connexion à la base de données
client.connect()
    .then(() => console.log('✅ Connecté à PostgreSQL'))
    .catch(err => console.error('❌ Erreur de connexion', err));

// Requête SQL pour récupérer tous les utilisateurs
client.query('SELECT * FROM users;')
    .then(res => {
        console.log('👥 Liste des utilisateurs :');
        console.table(res.rows);
    })
    .catch(err => console.error('Erreur lors de la requête', err))
    .finally(() => client.end());