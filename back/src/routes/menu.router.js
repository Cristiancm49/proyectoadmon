const express = require('express');
const router = express.Router(); 
const MenuController = require('../controllers/menu.controllers');

router
    .get('/', MenuController.get )
    .get('/:id', MenuController.getById )


module.exports = router;