var fs = require('fs');
var https = require('https');
var app = require('express')();
var options = {
   key  : fs.readFileSync('key.pem'), 
   cert : fs.readFileSync('cert.pem') 
};

app.get('/', function (req, res) {
   res.send('Hello HTTPS!');
});

var port = process.env.PORT || 3000;
https.createServer(options, app).listen(port, function () {
   console.log('HTTPS is on at ' + port);
});