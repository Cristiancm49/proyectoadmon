const express = require('express');
const router = express.Router(); 
const categoriaPaqueteController = require('../controllers/categoriaPaquete.controller');

router
    .get('/', categoriaPaqueteController.get )
    .get('/:id', categoriaPaqueteController.getById )


module.exports = router;