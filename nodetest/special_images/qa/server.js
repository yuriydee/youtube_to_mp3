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
server.use('/', express.static(__dirname + '/'));
const PORT = process.env.PORT 
server.listen(PORT);
