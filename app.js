var express = require("express");

var app = express();
var http = require('http');
var util = require('util');
var io = require('socket.io')(http);

var logfmt = require("logfmt");
app.use(logfmt.requestLogger());

// static files
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser());

app.get('/', function(req, res){
  res.sendfile('public/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

app.route('/sensors')
.get(function(req, res, next){
  res.send('Hello World');
})
.post(function(req, res, next){
  console.log('Got post');
  console.log('body', req.body);
  res.send(204); 
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
