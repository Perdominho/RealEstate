// property-controller.js

const { renderPropertyDetails } = require('../inmueble');
const db = require('../db');

async function getPropertyDetails(req, res) {
    try {
        const { propertyid } = req.params;
        const result = await db.query('SELECT * FROM PropertyListings WHERE propertyid = $1', [propertyid]);

        // Renderizar la página detallada con la información de la propiedad
        const htmlResult = renderPropertyDetails(result.rows[0]);

        res.send(htmlResult);
    } catch (error) {
        console.error('Error al obtener la propiedad detallada:', error);
        res.status(500).send('Error interno del servidor');
    }
}

module.exports = {
    getPropertyDetails,
};
