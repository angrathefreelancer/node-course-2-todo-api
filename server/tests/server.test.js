const expect = require ('expect')
const request = require ('supertest')
const {ObjectID} = require('mongodb')
const {app} = require('./../server')
const {Todo} = require ('./../models/todo')

const todos = [{
  _id : new ObjectID (),
  text : 'First text todo'
}, {
  _id : new ObjectID (),
  text : 'Seconf text todo'
}]


beforeEach  ((done) => {
  Todo.remove( {}).then (() => {
    return Todo.insertMany (todos)
  }).then (() => done())
})

describe('POST Todos', () => {
  it ('should create a new todo' , (done) => {
      var text = 'Test todo test'
      request (app)
        .post  ('/todos')
        .send({text})
        .expect (200)
        .expect ((response) => {
          expect (response.body.text).toBe(text)
        })
        .end ((error, response) => {
          if (error) {
            return done (error)
          }
          Todo.find ({text}).then ((todos)  => {
            expect (todos.length).toBe(1)
            expect (todos[0].text).toBe(text)
            done()
          }).catch ((error) => {
             done (error)
          })
        })
  })

  it ('Should not create todo with invalid body data', (done) => {

    request (app)
    .post ('/todos')
    .send ({})
    .expect (400)
    .end ((error, response) => {
      if (error) {
        return done (error)
      }

      Todo.find ().then ((todos) => {
        expect (todos.length).toBe(2)
        done ()
      }).catch ((error) => {
        done (error)
      })
    })
})
})

describe ('GET todos route', () => {
   it ('should get all todos', (done) => {
     request (app)
     .get ('/todos')
     .expect (200)
     .expect ((response) => {
       expect (response.body.todos.length).toBe(2)
     })
     .end(done)
   })
})

describe ('GET /todo/:id route', () => {
  it ('should return todo doc', (done) => {
    request (app)
    .get (`/todos/${todos[0]._id.toHexString()}`)
    .expect (200)
    .expect ((response) => {
      expect (response.body.todo.text).toBe(todos[0].text)
    })
    .end(done)
  })

  it ('should return a 404 if todo not found', (done) => {
    var hexId = new ObjectID().toHexString()
    request (app)
    .get (`/todos/${hexId}`)
    .expect (404)
    .end(done)
  })

  it ('should return a 404 for non object ID', (done) => {
    request (app)
    .get (`/todos/123}`)
    .expect (404)
    .end(done)
  })
})
