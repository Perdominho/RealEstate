// home-routes.js

const express = require('express');
const router = express.Router();

// Ruta '/'
router.get('/', (req, res) => {
    // Envia el archivo HTML como respuesta
    res.sendFile(__dirname + '/home.html');
});

module.exports = router;
