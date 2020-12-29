const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 3000;

io.on('connection', (socket) => {
  console.log('a user connected :D');
  socket.on('Chat message', (msg) => {
    console.log(msg);
    io.emit('chat message', msg);
  });
});

server.listen(port, () => console.log('Server runing on port' + port));
