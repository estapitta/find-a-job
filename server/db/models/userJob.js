const Sequelize = require('sequelize')
const db = require('../db')

// companies the user has already seen / matched
const UserJob = db.define('userJob', {
  matched: {
    type: Sequelize.BOOLEAN
  },
  swipedRight: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = UserJob
