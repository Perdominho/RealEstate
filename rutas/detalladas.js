const { renderPropertyDetails } = require('../inmueble');
const db = require('../db');

async function getPropertyDetails(req, res) {
    try {
        const { propertyid } = req.params;
        const propertyResult = await db.query('SELECT * FROM PropertyListings WHERE propertyid = $1', [propertyid]);

        // Obtener información de la propiedad actual
        const property = propertyResult.rows[0];

        // Obtener todas las propiedades (eliminando la condición de tipo)
        const allPropertiesResult = await db.query('SELECT * FROM PropertyListings WHERE propertyid != $1 LIMIT 5', [propertyid]);
        const allProperties = allPropertiesResult.rows;

        // Renderizar la página detallada con la información de la propiedad y todas las propiedades
        const htmlResult = renderPropertyDetails({ property, similarProperties: allProperties });
        res.send(htmlResult);
    } catch (error) {
        console.error('Error al obtener la propiedad detallada:', error);
        res.status(500).send('Error interno del servidor');
    }
}

module.exports = {
    getPropertyDetails,
};