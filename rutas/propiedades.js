// property-controller.js

const { renderHTMLWithStyles } = require('../archpropiedades');
const db = require('../db');

async function getAllProperties(req, res) {
    try {
        const result = await db.query('SELECT * FROM PropertyListings');

        // Renderizar resultados con un formato HTML básico y estilos CSS
        const htmlResult = renderHTMLWithStyles(result.rows);

        res.send(htmlResult);
    } catch (error) {
        console.error('Error al obtener las propiedades:', error);
        res.status(500).send('Error interno del servidor');
    }
}

module.exports = {
    getAllProperties,
};
