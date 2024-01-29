// Importaciones de módulos
const express = require('express');
const propertyRoutes = require('./rutas');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./db');
const home = require('./home');
const path = require('path');

// Configuración de middleware
app.use(express.json());
app.use('/', propertyRoutes);
app.use(express.urlencoded({ extended: true }));
app.use('/', home);
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/buscar', async (req, res) => {
    const { query } = req.query;
    const result = await db.query('SELECT * FROM PropertyListings WHERE LOWER(title) LIKE LOWER($1)', ['%' + query + '%']);
    res.json(result.rows);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
