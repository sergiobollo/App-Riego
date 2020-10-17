const express = require('express');
const router = express.Router();
const datoModel = require('../model/datoModel');

//this is code that you have already implemented in your project
router.get('/all',
    (req, res) => {
        datoModel.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });

//this is how you implement a city route by specific city
router.get('/:planta',
    (req, res) => {
        let plantaRequested = req.params.planta;
        datoModel.find({ planta: plantaRequested })
            .then(datos => {
                res.send(datos)
            })
            .catch(err => console.log(err));
    });

router.put('/:planta',
    (req, res) => {
        let planta = req.params.planta;
        datoModel.findOneAndUpdate({ planta: planta }, {
                $set: {
                    temperatura: req.body.temperatura,
                    humedad: req.body.humedad,
                    luz: req.body.luz
                }
            }).then(datos => {
                res.send(datos)
            })
            .catch(err => console.log(err));
    });

router.post('/', (req, res) => {

    const newDato = new datoModel({
        planta: req.body.planta,
        temperatura: req.body.temperatura,
        humedad: req.body.humedad,
        luz: req.body.luz
    })
    newDato.save()
        .then(dato => {
            res.send(dato)
        })
        .catch(err => {
            res.status(500).send("Server error")
        })
});

module.exports = router