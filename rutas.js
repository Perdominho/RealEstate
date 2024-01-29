const express = require('express');
const propertyController = require('./rutas/detalladas');
const propertyControl = require('./rutas/propiedades');
const router = express.Router();

// Ruta '/propiedades'
router.get('/propiedades', propertyControl.getAllProperties);
// Ruta para las páginas detalladas
router.get('/propiedades/inmueble/:propertyid', propertyController.getPropertyDetails);

module.exports = router;
