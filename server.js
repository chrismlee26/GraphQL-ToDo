// Dependencies
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

// Create a schema
const schema = buildSchema(`

type Query {
  getTodo(id: ID): Todo
  getAllTodos: [Todo!]!
  getCompletedTodos: [Todo!]!
  getUnCompletedTodos: [Todo!]!
}

type Todo {
  name: String!
  completed: Boolean!
  id: ID
}

type Mutation {
  addTodo(name: String! id: Int, competed: Boolean): Todo!
  updateTodo(id: Int! name: String, completed: Boolean): Todo
  completeToDo(id: Int name: String!, completed: Boolean): Todo
}

`)

let todos = [
  { name: 'hardcode a todo', completed: true, id: '1' },
  { name: 'false one for test', completed: false, id: '2' },
]

// Resolvers
const root = {
  getTodo: ({ id }) => {
    return todos[id]
  },
  getAllTodos: () => {
    return todos
  },
  addTodo: ({ name, id }) => {
    const createToDo = {
      id,
      name,
      completed: false,
    }
    todos.push(createToDo)
    return createToDo
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
  completeToDo: ({ name }) => {
    const todo = todos.name
    if (todo === undefined) {
      return null
    }
    todo.name = name || todo.name
    todo.completed = !todo.completed
    return todo
  },
  getCompletedTodos: () => {
    return todos.filter((value) => value.completed)
  },
  getUnCompletedTodos: () => {
    return todos.filter((value) => !value.completed)
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