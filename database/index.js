const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const db = new Sequelize('sequelizeReview', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db;

//connection to db 