const express = require('express');
const router = express.Router(); 
const empresaController = require('../controllers//empresa.controllers');

router
    .get('/', empresaController.get )
    .get('/:id', empresaController.getById )
    .post('/', empresaController.create )
    .put('/:id', empresaController.update )
    .delete('/:id', empresaController._delete );

module.exports = router;