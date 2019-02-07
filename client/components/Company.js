import React from 'react'
import {connect} from 'react-redux'
import {fetchJobs} from '../store/job'

class Company extends React.Component {
  render() {
    return (
      <div>
        {this.props.jobs.map(job => {
          return (
            <li key={job.id}>
              Job Title: {job.title}
              {'  '}
              {job.description}
            </li>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    jobs: state.jobs
  }
}

export default connect(mapStateToProps)(Company)
