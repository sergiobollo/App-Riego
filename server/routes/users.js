const express = require('express');
const router = express.Router();
const userModel = require('../model/userModel');

//Create user POST route, user model and user collection in Mongodb, if it doesn’t already exist.
//Provide error to the user if account exist
//Encrypt your password with bcrypt before saving the new user to the database

router.get('/:email',
    (req, res) => {
        let emailRequested = req.params.email;
        userModel.findOne({ email: emailRequested })
            .then(user => {
                res.send(user)
            })
            .catch(err => console.log(err));
    });

router.post('/', (req, res) => {
    const newUser = new userModel({
        email: req.body.email,
        password: req.body.password,
    })
    newUser.save()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send("Server error")
        })
});


module.exports = router