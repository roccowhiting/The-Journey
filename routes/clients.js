const express = require('express');
const router = express.Router();
const clientsCtrl = require('../controllers/clients');
// const client = require('../models/client');

// GET /clients/new 
router.get('/', clientsCtrl.index);
router.get('/new', clientsCtrl.new);
router.post('/', clientsCtrl.create);
router.put('/:id', clientsCtrl.update);
router.get('/:id/edit', clientsCtrl.edit);
router.delete('/:id', clientsCtrl.delete);


module.exports = router;