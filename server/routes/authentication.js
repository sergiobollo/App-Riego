var express = require('express');
var router = express.Router();
const key = require('../keys');
const jwt = require('jsonwebtoken');
const userModel = require('../model/userModel');
const passport = require('passport');

router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        userModel
            .findOne({ _id: req.user.id })
            .then(user => {
                res.json(user);
            })
            .catch(err => res.status(404).json({
                error: "User does not exist!"
            }));
    }
)

router.post('/login', function(req, res) {
    userModel.findOne({ email: req.body.email })
        .then(user => {
            console.log(user);

            if (!user) {
                return res.send({ message: 'Incorrect Email.' });
            }

            if (user.password === req.body.password) {
                const payload = {
                    id: user._id,
                    mail: user.mail,
                    picture: user.picture
                };
                const options = { expiresIn: 2592000 };
                jwt.sign(
                    payload,
                    "secret",
                    options,
                    (err, token) => {
                        if (err) {
                            res.json({
                                success: false,
                                token: "There was an error"
                            });
                        } else {
                            res.json({
                                success: true,
                                token: token
                            });
                        }
                    }
                );
            } else {
                res.send({ message: 'Incorrect password.' });
            }
        })
        .catch(err => {
            return req.send(err);
        });
})

module.exports = router