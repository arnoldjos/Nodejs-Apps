const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App'
    });
});

app.get('/users', (req, res) => {
    let users = [
        {
            name: 'John',
            age: 25
        },
        {
            name: 'Smith',
            age: 30
        }
    ]
    res.status(200).send(users);
});

app.listen(3000);

module.exports.app = app;