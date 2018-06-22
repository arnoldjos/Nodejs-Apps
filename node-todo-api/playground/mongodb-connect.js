const { MongoClient, ObjectID } = require('mongodb');

const dbName = 'TodoApp';

MongoClient.connect('mongodb://localhost:27017' ,(err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server ', err);
    }

    const db = client.db(dbName);

    // console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Unable to insert todo ', err);
    //     }

    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Arnold Joseph A. Fudolig',
    //     age: 20,
    //     location: 'Bohol'
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Unable to insert to Users');
    //     }

    //     console.log(JSON.stringify(res.ops, undefined, 2));
    //     console.log(res.ops[0]._id.getTimestamp());
    // });

    client.close();
});