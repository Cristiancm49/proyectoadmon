const express = require('express');
const router = express.Router(); 
const CuponDescuentoController = require('../controllers/cuponDesceunto.controller');

router
    .get('/', CuponDescuentoController.get )
    .get('/:id', CuponDescuentoController.getById )


module.exports = router;