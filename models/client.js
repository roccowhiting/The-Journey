const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const sessionSchema = new Schema({
    date: Date,
    workout: [String],
    trainer: [String]
}, { timestamps: true });

// compile the schema into a model and export it 
module.exports = mongoose.model('Session', sessionSchema);