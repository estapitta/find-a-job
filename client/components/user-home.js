import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import JobDetails from './JobDetails'
import Chat from './Chat'
import {fetchJobs} from '../store/index'

/**
 * COMPONENT
 */
class UserHome extends React.Component {
  componentDidMount() {
    this.props.fetchJobs()
  }

  render() {
    return (
      <div>
        <JobDetails />
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchJobs: () => {
      dispatch(fetchJobs())
    }
  }
}

export default connect(mapState, mapDispatchToProps)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
