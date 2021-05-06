const Client = require('../models/client');


module.exports = {
    new: newClient,
    create,
    index,
    edit,
    update,
    delete: deleteClient
};

function index(req, res) {
    Client.find({}, function(err, clients) {
        res.render('clients/index', { clients });
    });
}


function newClient(req, res) {
    res.render('clients/new');
}

function create(req, res) {
    req.body.newSession = !!req.body.newSession;
   console.log(req.body);
    Client.create(req.body, function(err, client) {
        if(err) console.log(err);
        res.redirect('/clients');
    });
}

function edit(req, res) {
    console.log(req.params.id, req.body, 'data passed to edit function');
    Client.findById(req.params.id, function(err, client) {
    res.render('clients/edit', {
        client
    });    
})
    
}

function update(req, res) {
    console.log(req.params.id, req.body, 'data passed to update function');
    Client.findByIdAndUpdate(req.params.id, req.body, function(err, updated) {
        console.log(updated, 'up');
        res.redirect('/clients');
    })
}

function deleteClient(req, res) {
    Client.findByIdAndDelete(req.params.id, function(err, deleted) {
        res.redirect('/clients');
    })
}