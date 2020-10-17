const mongoose = require('mongoose');

const dbSrv = require('./keys').mongoURI;

mongoose.connect(dbSrv, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log('Connection to Mongo DB established'))
    .catch(err => console.log(err));

const db = mongoose.connection;


module.exports = db;