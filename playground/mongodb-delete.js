const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect ('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to Mongodb Server');

  // deleteMany
    // db.collection ('Todos').deleteMany ({
    //   text : "Walk the dog"
    // }).then ((result) => {
    //   console.log(result);
    // }, (error) => {
    //
    // })
  // deleteOne
    // db.collection ('Todos').deleteOne ({
    //   text : 'Have Lunch'
    // }).then ((result) => {
    //   console.log(result);
    // }, (error) => {
    //
    // })

  // findOneAndDelete

    db.collection('Todos').findOneAndDelete ({
      completed : false
    }).then ((result) => {
      console.log(result);
    })
  //db.close ()
})
