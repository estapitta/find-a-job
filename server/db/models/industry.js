const Sequelize = require('sequelize')
const db = require('../db')

const Industry = db.define('industry', {
  industry: {
    type: Sequelize.STRING
  }
})

module.exports = Industry
