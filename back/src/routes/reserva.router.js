const express = require('express');
const router = express.Router(); 
const reservaController = require('../controllers/reserva.controller');

router
    .get('/', reservaController.get )
    .get('/:id', reservaController.getById )
    .post('/', reservaController.create )
    .put('/:id', reservaController.update )
    .delete('/:id', reservaController._delete );

module.exports = router;