const Sequelize = require('sequelize')
const db = require('../db')

const UserJob = db.define('userJob', {
  matched: {
    type: Sequelize.BOOLEAN
  },
  swipedRight: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = UserJob
