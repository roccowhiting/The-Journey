// Require modules 
const express = require('express');

// Create Express app
const app = express();

// Configure App (app.set)

// Use the ejs View engine 
app.set('view engine', 'ejs')

// Mount middleware 


// Mount Routes 
app.get('/', function(req, res) {
    res.render('index');
});


// tell the app tp listen on port 3000 
app.listen(3000, function() {
    console.log('Express is listening on port 3000');
});
