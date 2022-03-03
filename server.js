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
}

type Todo {
  name: String!
  completed: Boolean!
  id: ID!
}

type Mutation {
  addTodo(name: String!): Todo!
  updateTodo(id: Int! name: String, Completed: Boolean): Todo
  completeToDo(id: ID, completed: Boolean): Todo
}

type About {
  message: String!
}
`)

let todos = [
  { name: 'hardcode a todo', completed: true, id: '1' },
  { name: 'make one mre', completed: true, id: '2' },
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
    todo.completed = true || false
    return todo
  }
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