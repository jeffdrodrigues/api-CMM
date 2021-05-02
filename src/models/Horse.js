const Sequelize = require('sequelize');
const database = require('../DataBase/PostgreeDb');

const Horse = database.define('horse', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    father: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mother: {
        type: Sequelize.STRING,
        allowNull: false
    },

    gender: {
      type: Sequelize.STRING
    },
    
    coat: {
      type: Sequelize.STRING
    },
  
    birth: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
  
    owner: {
      type: Sequelize.STRING
    },
  
    book: {
      type: Sequelize.STRING
    },
  
    register: {
      type: Sequelize.STRING
    },
  
    alive: {
      type: Sequelize.BOOLEAN
    },
  
    blocked: {
      type: Sequelize.BOOLEAN
    },

    createdAt: {
      type: Sequelize.DATE,
      default: Date.now(),
    },
  
    updatedAt: {
      type: Sequelize.DATE,
      default: Date.now(),
    },
})
 
module.exports = Horse;
