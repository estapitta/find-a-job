const router = require('express').Router()
const {Job, Company, Industry, User} = require('../db/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
module.exports = router

//This is the filtered job search, the unfiltered one is commented out below.

router.get('/', async (req, res, next) => {
  try {
    const user = req.user
    const userIndustries = user.industries.map(industry => {
      return industry.id
    })
    const userJobs = user.jobs.map(job => {
      return job.id
    })
    const jobs = await Job.findAll({
      include: [{model: Company}, {model: Industry}],
      where: {
        experience: user.experience,
        industryId: {[Op.in]: userIndustries},
        id: {[Op.notIn]: userJobs}
      }
    })
    res.json(jobs)
  } catch (err) {
    next(err)
  }
})

router.get('/:jobId', async (req, res, next) => {
  try {
    const job = await Job.findOne({
      where: {id: req.params.jobId},
      include: [{model: Company}]
    })
    res.json(job)
  } catch (err) {
    next(err)
  }
})

// router.get('/', async (req, res, next) => {
//   try {
//     const jobs = await Job.findAll({
//       include: [{model: Company}, {model: Industry}]
//     })
//     res.json(jobs)
//   } catch (err) {
//     next(err)
//   }
// })
