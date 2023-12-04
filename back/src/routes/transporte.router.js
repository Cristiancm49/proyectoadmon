const express = require('express');
const router = express.Router(); 
const TransporteController = require('../controllers/tramsporte.controllers');

router
    .get('/', TransporteController.get )
    .get('/:id', TransporteController.getById )


module.exports = router;