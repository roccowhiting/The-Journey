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
    req.body.newSession = !!req.body.newSession;
}


function index(req, res) {
    Client.find({}, function(err, clients) {
        res.render('clients/index', { clients });
    });
}