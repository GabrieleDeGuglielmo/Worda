const express = require("express");
const app = express(); 

const {readFile}= require("fs")


app.get("/", (req, res) => {
    const callback=(error, result)=>{
        if(error){
            console.log(error);
            return;
        }
        res.render(__dirname + "/home.ejs")
    }
    
})

app.get("/home", (req, res) => {
    res.redirect("/");
});

app.listen(3000);
