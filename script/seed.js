'use strict'

const db = require('../server/db')
const {User, Job, Company} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const jobs = await Promise.all([
    Job.create({
      title: 'Software Engineer',
      zip: '60613',
      experience: 'Entry',
      description: 'this is a job description',
      time: 'Full-time',
      active: true
    }),
    Job.create({
      title: 'Customer Engineer',
      zip: '60615',
      experience: 'Entry',
      description: 'this is another job description',
      time: 'Part-time',
      active: true
    })
  ])

  const companies = await Promise.all([
    Company.create({
      name: 'Green Key',
      size: 'Small',
      rating: '4.33'
    }),
    Company.create({
      name: 'Conversant',
      size: 'Large',
      rating: '2.22'
    })
  ])

  await jobs[1].setCompany(companies[0])
  await jobs[0].setCompany(companies[1])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${jobs.length} jobs`)
  console.log(`seeded ${companies.length} companies`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
