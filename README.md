# GraphQL To Do List

- FEW2.9 Final Assessment
- GraphQL, Express, Nodemon

## How to Run Project:

#### Add Dependencies:

```
npm i
```

#### Run Application:

```
npm start
```

#### View GraphQL Interface:

```
http://localhost:4000/graphql
```

## GraphQL API Operations

- To access GraphQL Interface:

```
https://localhost:4000/graphql
```

#### To query one Todo item, call item by `id`:

```
{
  getTodo(id:__#__) {
    name
    id
    completed
  }
}
```

#### To query all Todo items, call `getAllTodos`:

```
{
  getAllTodos {
    name
    id
    completed
  }
}
```

#### To query all Todo items, call `getCompletedTodos`:

```
{
  getCompletedTodos {
    name
    id
    completed
  }
}
```

#### To update a todo item, call item by 'id' and add a value to `name` or `completed`

```
mutation {
  updateTodo(id: 1, name: "updated string") {
    id
    name
    completed
  }
}
```

`options`:

- `name` = 'new string'
- `completed` = `true` || `false`

#### To complete a todo item, call item by 'id' and add `true` value to `completed`

```
mutation {
  completeTodo(name, completed: true) {
    id
    name
    completed
  }
}
```

- `completed` = `true` || `false`

#### To query all completed Todo items, call `getAllTodos`:

```
{
  getCompletedTodos {
    name
    id
    completed
  }
}
```

## GraphQL API Final Assessment:

#### 1. To List All Todos:

```
{
  getAllTodos {
    name
    id
    completed
  }
}
```

#### 2. Add a new Todo:

mutation {
addTodo(name:"Complete the final assessment" id:3) {
id
name
completed
}
}

#### 3. Show the "Completed final assessment" todo:

```
{
  getCompletedTodos {
    name
    id
    completed
  }
}
```

#### 4. Complete the "Completed final assessment" todo:

mutation {
addTodo(name:"Complete the final assessment" id:3) {
id
name
completed
}
updateTodo(id: 3, completed: true) {
id
name
completed
}
}

#### 4. Show all Completed todos with `getCompletedTodos`:

```
{
  getCompletedTodos {
    name
    id
    completed
  }
}
```

#### 5. Show all un-completed todos with `getUnCompletedTodos`:

```
{
  getUnCompletedTodos {
    name
    id
    completed
  }
}
```
