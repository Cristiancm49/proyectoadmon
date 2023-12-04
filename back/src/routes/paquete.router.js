const express = require('express');
const router = express.Router(); 
const paqueteController = require('../controllers/paquete.controllers.js');

router
    .get('/', paqueteController.get )
    .get('/:id', paqueteController.getById )
    .post('/', paqueteController.create )
    .put('/:id', paqueteController.update )
    .delete('/:id', paqueteController._delete );

module.exports = router;