const express = require('express');
const router = express.Router(); 
const usuarioController = require('../controllers/usuario.controllers');

router
    .get('/', usuarioController.get)
    .get('/:id', usuarioController.getById)
    .post('/', usuarioController.create)
    .put('/:id', usuarioController.update)
    .delete('/:id', usuarioController._delete );

module.exports = router;