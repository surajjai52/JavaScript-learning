const express = require("express");
const https = require("https");
const app = express();

app.get("/", function(req ,res){

    const url ="https://api.openweathermap.org/data/2.5/weather?q=London&appid=63ca57da90f9dca2132055f52b80d126";
    
    https.get(url,function(response){
       console.log(response.statusCode);

       response.on("data",function(data)
       {
            const weatherData = JSON.parse(data);
            const temp =weatherData.main.temp;
            const weatherDescription =weatherData.weather[0].description;
            const icon =weatherData.weather[0].icon;
            res.write("<p>The weather is " + weatherDescription +"</p>");
            res.write("<h1>The tempearture in london is" + temp + "</h1>");
            res.send();

       })
})
    

})

app.listen(3000,function()
{
    console.log("server is running on port 3000");
})