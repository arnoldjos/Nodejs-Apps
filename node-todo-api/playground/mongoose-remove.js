const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// Remove all
// Todo.remove({}).then(result => {
//     console.log(result);
// })



Todo.findByIdAndRemove('5b2e5a460b913038040acb5e').then(todo => {
    console.log(todo);
});