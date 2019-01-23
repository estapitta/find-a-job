import React from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import {withStyles} from '@material-ui/core/styles'

const styles = {
  drawer: {
    width: 250
  }
}

class Sidebar extends React.Component {
  render() {
    return <SwipeableDrawer className={this.props.classes.drawer} />
  }
}

export default Sidebar
