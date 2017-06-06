const {mongoose} = require ('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require ('./../server/models/user')
const {ObjectID} = require ('mongodb')

var id = '692bcb51a24ba40531da8117f'
var userId = '591e716bd926a2061ac21f00'


User.findById (userId).then ((user) => {
  if (!user) {
    console.log('User not found');
    return
  }
  console.log(user);

}).catch ((e) => {
  console.log(e);
})

//591e716bd926a2061ac21f00

// Todo.find ({
//   _id : id
// }).then ((todos)=> {
//   console.log(todos);
// }, () => {
//
// })
//
//
// Todo.findOne ({
//   _id : id
// }).then ((todos) => {
//   console.log(todos);
// })

// Todo.findById(id).then ((todos) => {
//
//   if (!todos) {
//     console.log('Id not found');
//     return
//   }
//   console.log(todos);
// }).catch ((error) => {
//   console.log(error);
// })
