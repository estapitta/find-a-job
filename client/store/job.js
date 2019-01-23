import axios from 'axios'

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

    dispatch(getJobs(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = jobs, action) {
  switch (action.type) {
    case GET_JOBS:
      return action.jobs
    default:
      return state
  }
}
