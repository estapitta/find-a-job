import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchJobs} from '../store/index'
import SwipeList from './SwipeList'
/**
 * COMPONENT
 */
class UserHome extends React.Component {
  componentDidMount() {
    this.props.fetchJobs()
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',

          flex: 1,

          justifyContent: 'center'
        }}
      >
        <SwipeList />
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
