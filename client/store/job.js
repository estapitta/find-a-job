import axios from 'axios'
import store from './index'

/**
 * ACTION TYPES
 */
const GET_JOBS = 'GET_JOBS'

/**
 * INITIAL STATE
 */
const jobs = []

/**
 * ACTION CREATORS
 */
const getJobs = jobs => ({type: GET_JOBS, jobs})

/**
 * THUNK CREATORS
 */
export const fetchJobs = () => async dispatch => {
  try {
    const res = await axios.get(`/api/jobs`)
    const filteredJobs = []
    console.log('res :', res.data)
    const user = store.getState().user
    res.data.forEach(job => {
      if (job.experience === user.experience) {
        console.log(job, ' matches experience')
        let matches = false
        user.industries.forEach(industry => {
          if (industry.id === job.industry.id) {
            matches = true
          }
        })
        if (matches) {
          console.log(job, ' industry matches')
          let found = false
          user.jobs.forEach(userJob => {
            if (userJob.id === job.id) {
              console.log(job, ' seen before')
              found = true
            }
          })
          if (!found) {
            console.log(job, 'not seen, adding to filtered jobs')
            filteredJobs.push(job)
          }
        }
      }
    })

    dispatch(getJobs(filteredJobs))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case GET_JOBS:
      return action.jobs
    default:
      return state
  }
}
