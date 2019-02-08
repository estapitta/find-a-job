import React from 'react'
import {connect} from 'react-redux'

class JobDetails extends React.Component {
  render() {
    let jobId = this.props.match.params.jobId

    let foundJob = this.props.jobs.find(job => {
      return job.id === Number(jobId)
    })
    return (
      <div>
        {!foundJob ? (
          <div> It's loading</div>
        ) : (
          <div>{foundJob.description}</div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    jobs: state.jobs
  }
}

export default connect(mapStateToProps)(JobDetails)
