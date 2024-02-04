const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'monorail.proxy.rlwy.net',
    database: 'railway',
    password: 'e2DecFDdaEg1421CAdf3gD43BD*dbDAc',
    port: 20778,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};