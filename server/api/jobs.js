const router = require('express').Router()
const {Job, Company, Industry} = require('../db/models')
module.exports = router

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

router.get('/', async (req, res, next) => {
  try {
    const jobs = await Job.findAll({
      include: [{model: Company}, {model: Industry}]
    })
    res.json(jobs)
  } catch (err) {
    next(err)
  }
})
