var express = require("express");

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var util = require('util');

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
  socket.on('message', function(msg){
    console.log('message: ' + msg);
  });
});

app.get('/test', function(req, res){
  io.emit('test', { for: 'everyone' });
});

app.route('/sensors')
.get(function(req, res, next){
  res.send('Hello World');
})
.post(function(req, res, next){
  console.log('Got post');
  console.log('body', req.body);
  res.send(204);
  if(req.body.values.pH > 500){
    io.emit('message', { for: 'everyone' });
  }
});

var port = Number(process.env.PORT || 5000);
http.listen(port, function() {
  console.log("Listening on " + port);
});
