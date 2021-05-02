const mongoose = require('mongoose');

const connectionURI = process.env.DATABASE_URI;


mongoose.connect(connectionURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

const db = mongoose.connection; // shortcut variable

db.on('connected', function() {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
}); 