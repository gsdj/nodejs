const mongoose = require('mongoose');
const config = require('../libs/config');

mongoose.connect('mongodb://localhost:27017/todolist', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', function(err) {
    console.log('connection error:', err.message);
});
db.once('open', function callback () {
    console.log('Connected to DB!');
});

module.exports.Schema = mongoose.Schema;