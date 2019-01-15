const Sequelize = require('sequelize')
const db = require('../db')

const Job = db.define('job', {
  title: {
    type: Sequelize.STRING
  },
  zip: {
    type: Sequelize.STRING,
    validate: {
      len: 5
    }
  },
  experience: {
    type: Sequelize.ENUM,
    values: ['Entry', 'Experienced', 'Top']
  },
  description: {
    type: Sequelize.TEXT
  },
  time: {
    type: Sequelize.ENUM,
    values: ['Part-time', 'Full-time', 'Contract']
  },
  active: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = Job
