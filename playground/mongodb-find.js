const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect ('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to Mongodb Server');

  // db.collection ('Todos').find ({
  //   _id  :  new ObjectID ('591a7c53bdf77d235ba7c378')
  // }).toArray().then ((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (error) => {
  //   console.log('Unable to fetch todos', error);
  // })

  // db.collection ('Todos').find ().count ().then ((count) => {
  //   console.log(count);
  // }, (error) => {
  //   console.log('Unable to fetch count', error);
  // })

  db.collection ('Users').find({
    name : 'Ankit'
  }).toArray().then ((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (error) => {
    console.log('Unable to fetch count', error);
  })

  //db.close ()
})
