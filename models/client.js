const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const clientSchema = new Schema({
    Date: Date,
    Workout: Array,
    Trainer: String,
});

// compile the schema into a model and export it 
module.exports = mongoose.model('Client', clientSchema);