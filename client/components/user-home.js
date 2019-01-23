import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import JobDetails from './JobDetails'
import Chat from './Chat'

/**
 * COMPONENT
 */
class UserHome extends React.Component {
  constructor() {
    super()
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

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
