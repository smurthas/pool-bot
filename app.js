var express = require("express");

var app = express();
var http = require('http');
var util = require('util');

var logfmt = require("logfmt");
app.use(logfmt.requestLogger());

var bodyParser = require('body-parser');
app.use(bodyParser());

app.route('/sensors')
.get(function(req, res, next){
  res.send('Hello World');
})
.post(function(req, res, next){
  console.log('Got post');
  res.send(204); 
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
