const Todo = require('./models')

const data = [
  {
    name: "shop"
  }, 
  {
    name: "study"
  }, 
  {
    name: "get job"
  }, 
  {
    name: "$$$$"
  }
]

Todo.bulkCreate(data)
  .then(() => console.log("Todos seeded"))
  .catch(err => console.error(err))