const express = require("express");
const app = express(); 

const {readFile}= require("fs")
app.use(express.static(__dirname))

app.get("/", (req, res) => {
    const callback=(error, result)=>{
        if(error){
            console.log(error);
            return;
        }
        const words=result.split("\n")
        const index=Math.floor(Math.random() * words.length)
        res.render(__dirname + "/home.ejs", {word: words[index]})
    }

    readFile("./words", "utf-8", (err, res)=>{callback(err, res)})
})

app.get("/ajax", (req, res)=>{
    const {input}=req.query
    const callback=(error, result)=>{
        if(error){
            console.log(error);
            return;
        }
        console.log();
        const words=result.split("\n")
        for(i=0; i<words.length; i++){
            console.log(words[i])
            if(words[i]==input){
                res.json({word: words[index]})
                return
            }
        }
        res.json({err: true})
    }
    readFile("./words", "utf-8", (err, res)=>{callback(err, res)})
})

app.get("/home", (req, res) => {
    res.redirect("/");
});

app.listen(3000);
