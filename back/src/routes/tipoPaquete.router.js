const express = require('express');
const router = express.Router(); 
const TipoPaqueteController = require('../controllers/tipoPaquete.controller');

router
    .get('/', TipoPaqueteController.get )
    .get('/:id', TipoPaqueteController.getById )


module.exports = router;