var express = require('express');

var app = express();

var staticPath = __dirname + '/static';
app.use(express.static(staticPath));

const server = app.listen(3000, function () {
  console.log('Server is listening on http://localhost:3000');
});

var io = require('socket.io')(server);

io.on('connection', function (socket) {
  socket.on('message', function (data) {
    socket.broadcast.emit('message', data);
  });

  socket.on('new-user', function (data) {
    socket.broadcast.emit('new-user', data);
  });
});
