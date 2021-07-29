const mongoose = require('mongoose');
const TodoModel = require('../models/TodoModel').todoModel;

exports.getList = function (req,res) {
    TodoModel.find({}, function(err, list){
 
        if(err) return console.log(err);
        res.send(list)
    });
};

exports.getTodo = function (req,res) {
    const id = req.params.id;
    TodoModel.findOne({_id: id}, function(err, todo){
          
        if(err) return console.log(err);
        res.send(todo);
    });
};

exports.delTodo = function(req,res) {
    const id = req.params.id;
    TodoModel.findOneAndDelete({_id:id}, function(err, doc){
         
        if(err) return console.log(err);
        TodoModel.find({}, function(err, list){
            if(err) return console.log(err);
            res.send(list)
        });
        console.log("Удален ", doc);
    });
};

exports.updateTodo = function(req,res) {
    if(!req.body) return res.sendStatus(400);
    const id = req.body.id;
    console.log(req.body.id);

    const newTodo = {description: req.body.description, name: req.body.name};
     
    TodoModel.findOneAndUpdate({_id: id}, newTodo, {new: false}, function(err, todo){
        if(err) return console.log(err); 
        res.send(todo);
    });
};

exports.addTodo = function(req, res) {
    var todoItem = new TodoModel({
        name: req.body.name,
        description: req.body.description
    });

    todoItem.save(function (err) {
        if (!err) {
            console.log("todoItem created");
            return res.send({ status: 'OK', todoItem:todoItem });
        } else {
            console.log(err);
            if(err.name == 'ValidationError') {
                res.statusCode = 400;
                res.send({ error: 'Validation error' });
            } else {
                res.statusCode = 500;
                res.send({ error: 'Server error' });
            }
            todoItem('Internal error(%d): %s',res.statusCode,err.message);
        }
    });
};
