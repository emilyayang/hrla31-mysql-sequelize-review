const Sequelize = require('sequelize'); //in package json

const db = require('./index')

const TodoModel = db.define('todos', { //table name
  name: {
      type: Sequelize.STRING, //sequelize auto increments for us
      allowNull: false
  } 
}, {
  timestamps: false
})

// TodoModel //syncing todo model
//   .sync()
//   .then(() => console.log('We synced up fam'))
//   .catch(err => console.error(err))

db //syncing ALL models
  .sync()
  .then(() => console.log('We synced up fam'))
  .catch(err => console.error(err))

module.exports = TodoModel;