//var express = require('express');
//var app = express();
//app.get('/', function (req, res) {
//  res.send('Hello World!');
//});
//app.listen(3000, function () {
//  console.log('Example app listening on port 3000!');
//});

var express = require('express');
var server = express();
const SCH_ENV = process.env.SCH_ENV

if (SCH_ENV == "dev"){
server.use('/', express.static(__dirname + '/'));
const PORT = process.env.PORT 
server.listen(PORT);
}
else if (SCH_ENV == "qa"){
server.use('/', express.static(__dirname + '/qa/'));
const PORT = process.env.PORT
server.listen(PORT);
}
