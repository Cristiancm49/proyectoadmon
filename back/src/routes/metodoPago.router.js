const express = require('express');
const router = express.Router(); 
const MetodoPagoController = require('../controllers/metodoPago.controller');

router
    .get('/', MetodoPagoController.get )
    .get('/:id', MetodoPagoController.getById )


module.exports = router;