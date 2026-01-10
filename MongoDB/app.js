const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/',(req, res)=>{
    res.send("hey");
})


app.get('/create', async (req, res)=>{
    let createduser = await userModel.create({
        name: "atharyogi",
        email: "atharv@gmail.com",
        username: "atharvyogi"
    })
    res.send(createduser);
})


app.get("/read", async (req, res) => {
        let users = await userModel.find();
        res.send(users);
})


app.get('/update', async (req, res)=>{
        let updateduser = await userModel.findOneAndUpdate({username: "atharv"}, {name: "harsh vandana sharma"}, {new:true})
        res.send(updateduser);
})


app.get("/delete", async (req, res) => {
    let users = await userModel.findOneAndDelete({username: "atharv"});
    res.send(users);
})


app.listen(3000);