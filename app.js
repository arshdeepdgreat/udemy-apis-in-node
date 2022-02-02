//jshint esversion:6
const express = require ("express")
const app = express ()

const https = require("https")

app.get("/",function(req,res){
    https.get()
    res.send("Hello");
})

app.listen(3000,function(){
    console.log("server at port 3000")
})