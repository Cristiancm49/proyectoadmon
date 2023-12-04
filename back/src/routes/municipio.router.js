const express = require('express');
const router = express.Router(); 
const municipioController = require('../controllers/municipio.controller');

router
    .get('/', municipioController.get )
    .get('/:id', municipioController.getById )


module.exports = router;