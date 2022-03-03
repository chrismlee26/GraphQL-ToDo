// Dependencies
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

// Create a schema
const schema = buildSchema(`

type Query {
  getAbout: About
  getTodo(id: ID): Todo
  getAllTodos: [Todo!]!
  getCompletedTodos: [Todo!]!
}

type Todo {
  name: String!
  completed: Boolean!
  id: ID!
}

type Mutation {
  addTodo(name: String!): Todo!
  updateTodo(id: Int! name: String, completed: Boolean): Todo
  completeToDo(id: Int! name: String, completed: Boolean): Todo
}

type About {
  message: String!
}

`)

let todos = [
  { name: 'hardcode a todo', completed: true, id: '1' },
  { name: 'make one mre', completed: false, id: '2' },
]

// Resolvers
const root = {
  getAbout: () => {
    return { message: 'Hello World' }
  },
  getTodo: ({ id }) => {
    return todos[id]
  },
  getAllTodos: () => {
    return todos
  },
  updateTodo: ({ id, name }) => {
    const todo = todos[id]
    if (todo === undefined) {
      return null
    }
    todo.name = name || todo.name
    todo.completed = !todo.completed
    return todo
  },
  completeToDo: ({ id, name }) => {
    const todo = todos[id]
    if (todo === undefined) {
      return null
    }
    todo.name = name || todo.name
    todo.completed = !todo.completed
    return todo
  },
  getCompletedTodos: (completed) => {
    return todos.filter((value) => value.completed)
  },
}

// Create Express App
const app = express()

// Define GraphQL Route
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}))

// Start App
const port = 4000
app.listen(port, () => {
  console.log(`Running on port: ${port}`)
})