const express = require('express');
const router = express.Router();
const plantaModel = require('../model/plantaModel');

router.get('/test', (req, res) => {
    res.send({ msg: 'plantas test route.' })
});

router.get('/all',
    (req, res) => {
        plantaModel.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });

router.post('/', (req, res) => {
    const newPlanta = new plantaModel({
        planta: req.body.planta,
        dueño: req.body.dueño,
        temperatura: req.body.temperatura,
        humedad: req.body.humedad,
        luz: req.body.luz,

    })
    newPlanta.save()
        .then(planta => {
            res.send(planta)
        })
        .catch(err => {
            res.status(500).send("Server error")
        })
});

router.get('/:planta',
    (req, res) => {
        let plantaRequested = req.params.planta;
        plantaModel.find({ planta: plantaRequested })
            .then(datos => {
                res.send(datos)
            })
            .catch(err => console.log(err));
    });

router.put('/:planta',
    (req, res) => {
        let planta = req.params.planta;
        plantaModel.findOneAndUpdate({ planta: planta }, {
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


module.exports = router