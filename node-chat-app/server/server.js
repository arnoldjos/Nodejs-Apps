require('./config/config');

const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const { generateMessage, generateLocationMessage } = require('./utils/message');
const publicPath = path.join(__dirname, '/../public');

const app = express();
app.use(express.static(publicPath));
const port = process.env.PORT;
const server = http.createServer(app);
const io = socketIO(server);


io.on('connection', socket => {
    console.log('New user connected');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

    socket.on('createMessage', (msg, callback) => {
        console.log('createEmail', msg);
        io.emit('newMessage', generateMessage(msg.from, msg.text));
        callback();
    });

    socket.on('createLocationMessage', coords => {
        io.emit('newLocationMessage', generateLocationMessage('SomeUser', coords.latitude, coords.longitude));
    });

    socket.on('disconnect', () => {
        console.log('Disconnected from server');
    });
});

console.log(__dirname + '/../public');
console.log(publicPath);

server.listen(port, () => {
    console.log(`Started on port ${port}`);
});

