const express = require('express')
const app = express()
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors")

const passport = require("passport");
const bcrypt = require("bcrypt");
const session = require("session");


const PORT = process.env.PORT || 3000;

//app.get(path, callbackfunction handling request and response)

// client directory running at port 3001
    // npm run start
    // get: fetch("http://localhost:3000/users/Anikait")
    /* post: fetch("http://localhost:3000/users?user=Sumanth&pass=password3, { method: "POST", body: JSON.stringify({
        user: "Sumanth",
        pass: "password3"
    }) })
    */
// server directory running at port 3000
    // npm run start

const db = [
    {
        user: "Anikait",
        password: "password",
        id: 1
    },
    {
        user: "David", 
        password: "password2",
        id: 2
    }
]

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());


//get
app.get("/", (req, res, next) => {
    res.status(200).send();
})

app.get("/users/:id", (req, res, next) => {
    const user = db.find((element) => {
        let id = element.id.toString();
        return id == req.params.id;
    })
    if (user) {
         res.status(200).json(user);   
    } else {
        res.status(404).send();
    }
})

//create
app.post("/users", (req, res, next) => {
    let newUsername = req.query.user; //req.body.user
    let newPassword = req.query.pass; //req.body.pass
    let newUser = { newUsername, newPassword };
    
    db.push(newUser);
    console.log(db);
    res.status(201).send(newUser);
})

//update 
app.put("/users/:id", (req, res, next) => {
    let userToUpdate = db.find((user) => {
        return user.id.toString() === req.params.id;
    })
    
    if (userToUpdate) {
        userToUpdate.password = req.body.pass;
        res.status(204).send(userToUpdate)   
    } else {
        res.status(404).send();
    }
})

//app.delete...

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})
