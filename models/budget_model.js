const mongoose = require('mongoose')
const nameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    budget: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        unique: true,
        required: true,
        minlength: 6
    },
}, { collection: 'budget'})

module.exports = mongoose.model('budget', nameSchema)