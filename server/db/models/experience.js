const Sequelize = require('sequelize')
const db = require('../db')

const Experience = db.define('experience', {
  title: {
    type: Sequelize.STRING
  },
  company: {
    type: Sequelize.STRING
  },
  start: {
    type: Sequelize.STRING
  },
  end: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.STRING
  },
  notes: {
    type: Sequelize.TEXT
  }
})

module.exports = Experience
