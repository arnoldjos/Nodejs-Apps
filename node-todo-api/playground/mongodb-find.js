const { MongoClient, ObjectID } = require('mongodb');

const dbName = 'TodoApp';

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server ', err);
    }

    const db = client.db(dbName);

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b2d02cd628ec673dc738f93')
    // }).toArray()
    //     .then((docs) => {
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     })
    //     .catch((err) => {
    //         console.log('Unable to fetch todos ', err);
    //     });
    // db.collection('Todos').find().count().then(count => {
    //     console.log(`Todos count: ${count}`);
    // })
    // .catch(err => {
    //     console.log(`Query failed ${error}`);
    // });
    db.collection('Users').find({ name: 'Arnold Joseph A. Fudolig'}).count().then(count => {
        console.log(`Todos count: ${count}`);
    })
    .catch(error => {
        console.log(`Query failed ${error}`);
    });


    //client.close();
});