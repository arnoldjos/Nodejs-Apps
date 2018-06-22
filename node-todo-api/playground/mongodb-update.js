const { MongoClient, ObjectID } = require('mongodb');

const dbName = 'TodoApp';

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server ', err);
    }

    const db = client.db(dbName);

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b2d1019d9779b4a44abe39f')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(result => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b2d04065c0f4c779c14bf21')
    }, {
        $set: {
            name: "Roooaaar"
        },
        $inc: {
            age: 1
        }

    }, {
        returnOriginal: false
    }).then(result => {
        console.log(result);
    });

    client.close();
});