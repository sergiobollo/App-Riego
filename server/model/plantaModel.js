const mongoose = require('mongoose');

const plantaSchema = new mongoose.Schema({
    planta: {
        type: String,
        required: true,
        unique: true
    },
    dueño: {
        type: String,
        required: true,
        unique: true
    },
    temperatura: {
        type: Number,
        required: true,
        unique: false
    },
    humedad: {
        type: Number,
        required: true,
        unique: false
    },
    luz: {
        type: String,
        required: true,
        unique: false
    }
})

module.exports = mongoose.model('planta', plantaSchema)

//name of module is the singular version (city) of the database name (cities)