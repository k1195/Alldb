const Sequelize = require('sequelize')
const {DBURI} = require('./keys')

// const sequelize = new Sequelize(DBURI) 


const sequelize = new Sequelize('kayskill', 'kunal', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
  });

sequelize.authenticate()
.then(() => {
console.log('Connection has been established successfully.');
})
.catch(err => {
console.error('Unable to connect to the database:', err);
});

module.exports = sequelize