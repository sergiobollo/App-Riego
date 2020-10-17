const express = require("express");

const app = express();
const db = require('./db');
//passport configuration
const passport = require("./passport");

const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(cors());

app.use('/plantas', require('./routes/plantas'));
app.use('/datos', require('./routes/datos'));
app.use('/users', require('./routes/users'));
app.use('/authentication', require('./routes/authentication'))

//passport middleware
app.use(passport.initialize());

/*const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});*/

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server is running on " + port + "port");
});