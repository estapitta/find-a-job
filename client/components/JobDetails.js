import React from 'react'
import {connect} from 'react-redux'
import {fetchJobs} from '../store/job'

class JobDetails extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchJobs()
  }

  render() {
    
    return (
      <div>
        <ul>
          {!this.props.state ? (
            <div> It's loading</div>
          ) : 
            this.props.state.jobs.map(job => {
              return (
                <li key={job.id}>
                  Job Title: {job.title}
                  {'  '}
                  Decription: {job.description}
                  {'  '}
                  Experience: {job.experience}
                  {'  '}
                  Rating: {job.company.rating}
                  {'  '}
                  Company:
                  {'    '}
                  {job.company.name}
                  {/* <a href={job.company} target="_blank">
                  {job.company}
                </a> */}
                </li>
              )
            })
          )}
          }
        </ul>

        <button
          style={{
            display: 'flex'
          }}
        >
          Swipe
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    jobs: state.jobs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchJobs: () => {
      dispatch(fetchJobs())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobDetails)
