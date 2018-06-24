const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');


// var _id = '5b2e14d1a24637176c03940e11';

// Todo.find({
//     _id
// }).then((todos) => {
//     console.log('Find ', JSON.stringify(todos, undefined, 2 ));
// });

// Todo.findOne({
//     _id
// }).then((todo) => {
//     console.log('Findone', JSON.stringify(todo, undefined, 2));
// });

// if (!ObjectID.isValid(_id)) {
//     return console.log('Invalid id');
// }

// Todo.findById(_id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Findbyid', JSON.stringify(todo, undefined, 2));
// });

const userId = "5b2e0424d12855046034ea09";

User.findById(userId).then(user => {
    if (!user) {
        return console.log('Id not found');
    }
    console.log('FindById', JSON.stringify(user, undefined, 2));
})
