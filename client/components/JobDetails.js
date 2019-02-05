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
          {!this.props.jobs ? (
            <div> It's loading</div>
          ) : (
            this.props.jobs.map(job => {
              return (
                <li key={job.id}>
                  Job Title: {job.title}
                  {'  '}
                  Company:
                  {'    '}
                  {job.company.name}
                </li>
              )
            })
          )}
        </ul>
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
