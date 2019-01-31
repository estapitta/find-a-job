import React from 'react'
import {connect} from 'react-redux'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import {withStyles} from '@material-ui/core/styles'
import {changeSidemenu} from '../store/sidemenu'
import {Link} from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'

const styles = theme => {
  return {
    drawer: {
      width: 240
    }
  }
}

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <SwipeableDrawer
          className={this.props.classes.drawer}
          open={this.props.open}
          onClose={() => {
            this.props.closeSideBar()
          }}
          onOpen={() => {}}
        >
          <Link
            to="/companyDetails"
            onClick={() => {
              this.props.closeSideBar()
            }}
          >
            <ListItem>Google</ListItem>
          </Link>
        </SwipeableDrawer>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    open: state.menuIsOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeSideBar: () => {
      dispatch(changeSidemenu(false))
    }
  }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Sidebar)
)
