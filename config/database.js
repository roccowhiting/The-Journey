const mongoose = require('mongoose');

const connectiongString = 'mongodb+srv://admin:taco4321@cluster0.2cwle.mongodb.net/The-Journey?retryWrites=true&w=majority';


mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

const db = mongoose.connection; // shortcut variable

db.on('connected', function() {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});