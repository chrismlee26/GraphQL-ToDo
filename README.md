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

## GraphQL CRUD Operations

- To access GraphQL Interface:

```
https://localhost:4000/graphql
```

#### To update a todo item, call item by 'id' and add a value to `name` or `completed`

```
mutation {
  updateTodo(id: 1 name: "change it to number 2") {
    id
    name
    completed
  }
}
```
