
var express  = require('express');
var app = express();
var port = process.env.PORT || 5000; 
app.use('', express.static(__dirname + '/app'));


// Chargement de socket.io
// var io = require('socket.io').listen(app);

// io.sockets.on('connection', function (socket) {


// });

app.listen(port);