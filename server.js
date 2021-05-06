// Require modules 
const express = require('express');
const morgan = require('morgan');
const indexRouter = require('./routes/index');
const clientsRouter = require('./routes/clients');
const methodOverRide = require('method-override');
const port = process.env.PORT || '3000';

// load the env vars 
require('dotenv').config();

// Create Express app
const app = express();

// Connect to DB 
require('./config/database');

// Configure App (app.set)
app.set('view engine', 'ejs');


// Mount middleware 
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverRide('_method'));



// Mount Routes with app.use()
app.use('/', indexRouter);
app.use('/clients', clientsRouter);


// tell the app tp listen on port 3000 
app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});