const request = require("request");

const url = "http://api.weatherstack.com/current?access_key=5ae5e4d7eb3178b7bf5a841de419edfc&query=New York";

const data = request(url,(error,{body})=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(JSON.parse(body));
    }
})