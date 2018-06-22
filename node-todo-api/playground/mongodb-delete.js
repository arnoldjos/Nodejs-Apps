const { MongoClient, ObjectID } = require('mongodb');

const dbName = 'TodoApp';

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server ', err);
    }

    const db = client.db(dbName);

    // deleteMany
    // db.collection('Todos').deleteMany({ text: 'Eat lunch'}).then(result => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then(result => {
    //     console.log(result);
    // })

    // findOneAndDelete


    // col.findOneAndDelete({completed: false}).then(result => {
    //     console.log(result);
    // });
    // db.collection('Todos').findOneAndDelete({completed: false}).then(result => {
    //     console.log(result);
    //     
    // })

    // db.collection('Users').deleteMany({ name: 'Arnold Joseph A. Fudolig'}).then(result => {
    //     console.log(result);
    // });
    db.collection('Users').findOneAndDelete({ name: 'Ronaldo Wew'}).then(result => {
        console.log(result);
    });



    client.close();
});