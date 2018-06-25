//io.emit emits to everyone
//socket.broadcast.emit emit to everyone except self
//socket.emit emit event to one user

//io.to('roomname').emit() emit to everyone in the room
//socket.broadcast.to('roomname').emit() emit to everyone in room except self

require('./config/config');

const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
 
const { generateMessage, generateLocationMessage } = require('./utils/message');
const {isRealString} = require('./utils/validation');
const { Users } = require('./utils/users');
const publicPath = path.join(__dirname, '/../public');

const app = express();
app.use(express.static(publicPath));
const port = process.env.PORT;
const server = http.createServer(app);
const io = socketIO(server);
const users = new Users();

io.on('connection', socket => {
    console.log('New user connected');
    socket.on('join', (params, callback) => {
        if (!isRealString(params.name) || !isRealString(params.room)) {
            return callback('Name and room name are required');
        }

        socket.join(params.room);
        users.removeUser(socket.id);
        users.addUser(socket.id, params.name, params.room);
        io.to(params.room).emit('updateUserList', users.getUserList(params.room));


        socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

        socket.broadcast.to(params.room).emit('newMessage', generateMessage('Admin', `${params.name} has joined`));

        callback();
    });



    socket.on('createMessage', (msg, callback) => {
        const user = users.getUser(socket.id);

        if (user && isRealString(msg.text)) {
            io.to(user.room).emit('newMessage', generateMessage(user.name, msg.text));  
        }

        
        callback();
    });

    socket.on('createLocationMessage', coords => {
        const user = users.getUser(socket.id);
        
        if (user) {
            io.to(user.room).emit('newLocationMessage', generateLocationMessage(user.name, coords.latitude, coords.longitude));
        }

    });

    socket.on('disconnect', () => {
        console.log('Disconnected from server');
        const user = users.removeUser(socket.id);

        if (user) {
            io.to(user.room).emit('updateUserList', users.getUserList(user.room));
            io.to(user.room).emit('newMessage', generateMessage('Admin', `${user.name} has left.`));
        }
    });
});

console.log(__dirname + '/../public');
console.log(publicPath);

server.listen(port, () => {
    console.log(`Started on port ${port}`);
});

