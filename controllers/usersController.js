const fs = require('fs');
const filePath = "files/users.json";

exports.getUsers = function (req,res) {
    const content = fs.readFileSync(filePath, "utf8");
    const users = JSON.parse(content);
    res.send(users);
};

exports.getUser = function (req,res) {
    const id = req.params.id;
    const content = fs.readFileSync(filePath, "utf8");
    const users = JSON.parse(content);
    let user = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            user = users[i];
            break;
        }
    }
    if (user) {
        res.send(user);;
    } else {
        res.status(404).send();
    }
};

exports.addUsers = function (req,res) {
    res.send("addUsers");
};