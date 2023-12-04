const express = require('express');
const router = express.Router(); 
const departamentoController = require('../controllers/departamento.controller');

router
    .get('/', departamentoController.get )
    .get('/:id', departamentoController.getById )


module.exports = router;