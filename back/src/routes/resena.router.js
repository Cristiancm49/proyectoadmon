const express = require('express');
const router = express.Router(); 
const resenaController = require('../controllers/resena.controllers');

router
    .get('/', resenaController.get )
    .get('/:id', resenaController.getById )
    .post('/', resenaController.create )
    .put('/:id', resenaController.update )
    .delete('/:id', resenaController._delete );

module.exports = router;