const mongoose = require('mongoose');
const Schema = require('./db').Schema;

var TodoList = new Schema({
    name: String,
    description: String,
});

var todoModel = mongoose.model("todo", TodoList);

module.exports.todoModel = todoModel;