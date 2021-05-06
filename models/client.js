const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const sessionSchema = new Schema({
    
    workout: String,
    trainer: String,
    appt: Date
}, { timestamps: true });

// compile the schema into a model and export it 
module.exports = mongoose.model('Session', sessionSchema);