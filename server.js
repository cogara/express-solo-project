var express = require('express');
var app = express();
var fun = require('./fun.js');

var port = 3000;



app.listen(port, function(request, response) {
  console.log('Listening to World!');
})

app.use('/', fun);
