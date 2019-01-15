const Sequelize = require('sequelize')
const db = require('../db')

const Education = db.define('education', {
  school: {
    type: Sequelize.STRING
  },
  degree: {
    type: Sequelize.STRING
  },
  study: {
    type: Sequelize.STRING
  },
  gpa: {
    type: Sequelize.DECIMAL(10, 2)
  },
  graduation: {
    type: Sequelize.STRING
  }
})

module.exports = Education
