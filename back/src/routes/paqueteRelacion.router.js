const express = require('express');
const router = express.Router(); 
const relacionController = require('../controllers/paqueteCategoriaRelacion.controller')

router
    .get('/', relacionController.get )
    .get('/:id', relacionController.getById )
module.exports = router;