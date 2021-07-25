const express = require("express");
const fs = require('fs');
const filePath = "files/users.json";
const config = require('./libs/config.js');


const app = express();
const jsonParser = express.json();

app.use(express.static(__dirname + "/public"));



const userController = require("./controllers/usersController");
const TodoListController = require("./controllers/TodoListController");

const userRouter = express.Router();
const TodoListRouter = express.Router();

TodoListRouter.get("/", TodoListController.getList);
TodoListRouter.get("/:id", TodoListController.getTodo);
TodoListRouter.post("/create", jsonParser, TodoListController.addTodo);
TodoListRouter.delete("/:id", TodoListController.delTodo);
TodoListRouter.put("/update", jsonParser, TodoListController.updateTodo);

userRouter.post("/create", userController.addUsers);
userRouter.get("/", userController.getUsers);
userRouter.get("/:id", userController.getUser);

app.use("/api/users", userRouter);
app.use("/api/TodoList", TodoListRouter);



app.listen(3001, function() {
    console.log('Express server listening on port 3001');
});