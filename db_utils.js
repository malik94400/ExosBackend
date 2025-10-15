// Import de la librairie pg
const { Client } = require('pg');

/**
 * Crée et retourne une connexion à la base PostgreSQL
 */
function getConnection(username, password, database) {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: username,
        password: password,
        database: database,
    });
    return client;
}

/**
 * Récupère tous les utilisateurs et exécute un callback avec les résultats
 */
function getUsers(callback) {
    const client = getConnection('postgres', 'ton_mot_de_passe', 'mabase');

    client.connect()
        .then(() => client.query('SELECT * FROM users;'))
        .then(result => callback(null, result.rows))
        .catch(err => callback(err, null))
        .finally(() => client.end());
}

/**
 * Insère un utilisateur dans la base de données
 * @param {Object} user - L'utilisateur à insérer (ex: { email: 'exemple@test.com' })
 */
function insert_user(user) {
    const client = getConnection('postgres', 'ton_mot_de_passe', 'mabase');

    client.connect()
        .then(() => {
            console.log('✅ Connecté à PostgreSQL');
            // Utilisation d'une requête paramétrée pour éviter les injections SQL
            return client.query('INSERT INTO users (email) VALUES ($1) RETURNING *;', [user.email]);
        })
        .then(result => {
            console.log('✅ Utilisateur inséré :');
            console.table(result.rows);
        })
        .catch(err => {
            console.error('❌ Erreur lors de l’insertion :', err);
        })
        .finally(() => {
            client.end();
        });
}

// =====================
// 🔹 Tests
// =====================

// 1️⃣ Test d’insertion
insert_user({ email: 'nouvel_utilisateur@test.com' });

// 2️⃣ Test de récupération
getUsers((err, users) => {
    if (err) console.error(err);
    else console.table(users);
});

// Exporte les fonctions (si tu veux les réutiliser ailleurs)
module.exports = { getConnection, getUsers, insert_user };