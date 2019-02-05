const User = require('./user')
const Company = require('./company')
const Education = require('./education')
const Experience = require('./experience')
const Job = require('./job')
const Industry = require('./industry')
const UserJob = require('./userJob')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

User.belongsToMany(Job, {through: UserJob})
Job.belongsToMany(User, {through: UserJob})

User.hasMany(Education)
Education.belongsTo(User)

User.hasMany(Experience)
Experience.belongsTo(User)

// User.hasMany(Industry)
// Industry.belongsToMany(User, {through: 'UserIndustry'})

Industry.hasMany(User)
User.belongsToMany(Industry, {through: 'UserIndustry'})

Company.hasMany(Job)
Job.belongsTo(Company)

// Job.hasOne(Industry)
// Industry.belongsToMany(Job, {through: 'JobIndustry'})

Industry.hasMany(Job)
Job.belongsTo(Industry)

module.exports = {
  User,
  Company,
  Education,
  Experience,
  Job,
  Industry,
  UserJob
}
