const express = require('express');
const router = express.Router();
const clientsCtrl = require('../controllers/clients');

// GET /clients/new 
router.get('/', clientsCtrl.index);
router.get('/new', clientsCtrl.new);
router.post('/', clientsCtrl.create);
router.get('/:id/edit', clientsCtrl.edit);
router.put('/:id', clientsCtrl.update);
router.delete('/:id', clientsCtrl.delete);


module.exports = router;