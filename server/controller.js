const Todo = require('../database/models')

const controller = {
  get: (req, res) => {
    Todo.findAll({}) //put empty object means we are going to find all of them
      .then(data => res.status(200).send(data))
      .catch(err => res.status(400).send(err))
  },
  post: (req, res) => {
    const { name } = req.body; //destructuring body to be {name: "todo"}
    Todo.create({ name }) //used to be {name: "todo"} sets property to const name aka name and that value will be "todo"
      .then(() => res.status(201).send("Post worked"))
      .catch(err => res.status(401).send(err))
  },
  update: (req, res) => { //localhost:3000/api/1 postman
    const { name } = req.body;
    const { id } = req.params;
    Todo.update({ name }, { where: { id } })
      .then((data) => {
        if (data[0] === 1) {
          res.status(202).send(`Updated id ${id} with ${name}`)
        } else {
          res.status(202).send(`Could not update id ${id} with ${name}`)
        }
      })
      .catch(err => res.status(402).send(err))
  },
  delete: (req, res) => {
    const { id } = req.params;
    Todo.destroy({ where: { id } })
      .then(() => res.status(203).send(`Deleted id ${id}`))
      .catch(err => res.status(403).send(err))
  }
}

module.exports = controller;