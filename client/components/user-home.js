import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import JobDetails from './JobDetails'


/**
 * COMPONENT
 */
 class  UserHome  extends React.Component {
  constructor(){
    super()
    this.state = {
        jobList: [
          {
          title: 'Developer',
          company: 'Microsoft',
          url: 'https://www.google.com'
        },
      {
        title: 'QA',
        company: 'Google',
        url: 'https://www.google.com'
      }
      
      ]

    }
  }

  

  render(){

    return (
      
        <ul>
        <h1 style={{
           fontFamily: 'Times New Roman',

        }}>  Your Job List 
        
        </h1>
   
        {
          this.state.jobList.map(job => {
           return   <li key={job.title}> Position:   {job.title}   Company:  {job.company}    
             Website: 
            <a href={job.url} target="_blank" >
            
           {job.url}</a></li>
          })
        }
        
        </ul>
 
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
