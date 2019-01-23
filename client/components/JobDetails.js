import React from 'react'
import {connect} from 'react-redux'
import {fetchJobs} from '../store/job'

class JobDetails extends React.Component {
  constructor() {
    super()
    // this.state = {
    //   jobs: [
    //     {
    //       title: 'Developer',
    //       description:
    //         'Excellent problem solver. Solid understanding of Object Oriented Programming',
    //       experience: 'entry',
    //       Rating: '5',
    //       company: 'https://www.linkedin.com'
    //     },
    //     {
    //       title: 'QA',
    //       description:
    //         'Contributes to process improvement, proposing and arguing for changes in a collaborative, team-based approach',
    //       experience: 'entry',
    //       Rating: '5',
    //       company: 'https://www.linkedin.com'
    //     }
    //   ]
    // }
  }
  componentDidMount() {
    this.props.fetchJobs()
  }

  render() {
    console.log(this.props.state)
    return (
      <div>
        <ul>
          {!this.props.state ? (
            <div> It's loading</div>
          ) : (
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
