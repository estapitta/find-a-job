import React from 'react'
import SwipeEffect from './SwipeEffect'
import {connect} from 'react-redux'
import {fetchJobs} from '../store/job'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

// swipeList is the parent component
class SwipeList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 1,
      items: {
        0: 'http://lorempixel.com/350/65/'
      }
    }
  }

  componentDidMount = () => {
    this.props.fetchJobs()
  }
  addImage = () => {
    this.setState({
      counter: this.state.counter + 1,
      items: {
        ...this.state.items,
        [this.state.counter]: 'http://lorempixel.com/350/65/'
      }
    })
  }

  removeItem = keyOfItemToRemove => {
    let nextItems = {}
    Object.keys(this.state.items).forEach(itemKey => {
      if (itemKey !== keyOfItemToRemove) {
        nextItems[itemKey] = this.state.items[itemKey]
      }
    })
    this.setState({
      items: nextItems
    })
  }
  render() {
    return (
      <ul
        className="swipeList"
        style={{
          marginTop: '150px'
        }}
      >
        {this.props.jobs.map(job => (
          <SwipeEffect
            key={`swipeItem-${job.id}`}
            style={{
              diplay: 'flex',
              alignItems: 'center'
            }}
          >
            {job.title}
            {'    '}
            {job.company.name}
            <Link to={`/jobDetails/${job.id}`}>
              <Button
                variant="contained"
                color="primary"
                style={{
                  float: 'right',
                  alignSelf: 'right'
                }}
              >
                Info
              </Button>
            </Link>
          </SwipeEffect>
        ))}{' '}
        <button
          type="button"
          className="swipeList-addButton"
          onClick={() => this.addImage()}
        >
          Add Image...
        </button>
      </ul>
    )
  }
}

const mapStateToProps = state => {
  let jobs = []
  if (state.jobs) {
    jobs = state.jobs
    console.log(jobs)
  }
  return {
    jobs: jobs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchJobs: () => dispatch(fetchJobs())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SwipeList)
