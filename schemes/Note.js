const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({

    text: { type: String, required: true }
    
});

module.exports = mongoose.model('note', schema)