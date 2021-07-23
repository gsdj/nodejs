const express = require("express");
const fs = require('fs');
const filePath = "files/users.json";


const app = express();
const jsonParser = express.json();

app.use(express.static(__dirname + "/public"));



const userController = require("./controllers/usersController");

const userRouter = express.Router();

userRouter.post("/create", userController.addUsers);
userRouter.get("/", userController.getUsers);
userRouter.get("/:id", userController.getUser);
app.use("/api/users", userRouter);

app.listen(3000);