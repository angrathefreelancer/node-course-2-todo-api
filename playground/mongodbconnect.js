const MongoClient = require('mongodb').MongoClient

MongoClient.connect ('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to Mongodb Server');

  // db.collection ('Todos').insertOne ( {
  //   text : 'Something to do',
  //   completed : false
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert todo', error);
  //   }
  //   console.log(JSON.stringify (result.ops, undefined, 2));
  //
  // })

  db.collection ('Users').insertOne ({
    name : 'Ankit',
    age : 25,
    location : 'Bangalore'
  }, (error, db) => {
    if (error) {
      return console.log('Unable to insert to Users :', error);
    }
    console.log(JSON.stringify(db.ops, undefined, 2));
  })

  db.close ()
})
