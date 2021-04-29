const express = require('express');
const router = express.Router();
const clientsCtrl = require('../controllers/clients');
const client = require('../models/client');

// GET /clients/new 
router.get('/new', clientsCtrl.new);
router.post('/',clientsCtrl.create);



module.exports = router;