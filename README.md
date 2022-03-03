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
  updateTodo(id: 1, completed: true) {
    id
    name
    completed
  }
}
```

- `completed` = `true` || `false`
