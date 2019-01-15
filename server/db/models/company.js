const Sequelize = require('sequelize')
const db = require('../db')

const Company = db.define('company', {
  name: {
    type: Sequelize.STRING
  },
  size: {
    type: Sequelize.ENUM,
    values: ['Small', 'Medium', 'Large']
  },
  rating: {
    type: Sequelize.DECIMAL(10, 2)
  }
})

module.exports = Company
