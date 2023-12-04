const express = require('express');
const router = express.Router(); 
const clienteController = require('../controllers/cliente.controller');

router
    .get('/', clienteController.get )
    .get('/:id', clienteController.getById )
    .post('/', clienteController.create )
    .put('/:id', clienteController.update )
    .delete('/:id', clienteController._delete );

module.exports = router;