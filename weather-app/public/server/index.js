const http = require('http');
const fs = require('fs');
var requsets = require('requests');

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        requsets('https://api.openweathermap.org/data/2.5/weather?lat=18.516726&lon=73.856255&appid=0cd5798e0d11d09e1056cae84bb83853',
        )
        .on('data', (chunk) => {
            const objData = JSON.parse(chunk);
            const arrData = [objData];
            console.log(chunk);
        })
        .on('end', (err) => {
            if(err) return console.log("connection closed due to error", err);

            console.log("end")
        })
    }
})

server.listen(8000, '127.0.0.1');