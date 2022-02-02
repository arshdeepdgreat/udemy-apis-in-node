//jshint esversion:6
const express = require ("express")
const app = express ()

const https = require("https")

app.get("/",function(req,res){
    const url="https://api.openweathermap.org/data/2.5/weather?q=London&appid=8d5f0776a113ac7e8805634ddbf789e4&units=metric";
    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const weatherData=JSON.parse(data)
            const icon=weatherData.weather[0].icon
            const imgp="http://openweathermap.org/img/wn/"+icon+"@2x.png";
            
            res.write("<p>The temp is "+ weatherData.main.temp+" degrees Celcius <br></p>");
            res.write("<p>The description is "+weatherData.weather[0].description+"</p>");
            res.write("<img src="+imgp+">");

            res.send()
        })
    })
})

app.listen(3000,function(){
    console.log("server at port 3000")
})