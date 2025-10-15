// db.js
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.PGHOST || 'db',
    port: process.env.PGPORT || 5432,
    database: process.env.PGDATABASE || 'mabase',
    user: process.env.PGUSER || 'appuser',
    password: process.env.PGPASSWORD || 'apppass',
});

module.exports = { pool, query: (text, params) => pool.query(text, params) };