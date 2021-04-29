const Client = require('../models/client');


module.exports = {
    new: newClient,
    create,
    index
};

function newClient(req, res) {
    res.render('clients/new');
}

function create(req, res) {
   
    Client.create(req.body, function(err, client) {
        if(err) return res.redirect('/clients/new')
        res.redirect('/clients');
    });
}


function index(req, res) {
    Client.find({}, function(err, clients) {
        res.render('clients/index', { clients });
    });
}