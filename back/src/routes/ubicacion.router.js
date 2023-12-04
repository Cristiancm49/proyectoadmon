const express = require('express');
const router = express.Router(); 
const ubicacionController = require('../controllers/ubicacion.controllers');

router
    .get('/', ubicacionController.get )
    .get('/:id', ubicacionController.getById )


module.exports = router;