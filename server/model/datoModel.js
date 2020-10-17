const mongoose = require('mongoose');

const datoSchema = new mongoose.Schema({
    id_planta: {
        type: String,
        required: true,
        unique: true
    },
    planta: {
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

module.exports = mongoose.model('dato', datoSchema)