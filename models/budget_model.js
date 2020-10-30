const mongoose = require('mongoose')
const validateColor = (clr) => (/^#([0-9a-f]{3}){1,2}$/i).test(clr)
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
        validate: [validateColor, 'Invalid color']
    },
}, { collection: 'budget'})

module.exports = mongoose.model('budget', nameSchema)