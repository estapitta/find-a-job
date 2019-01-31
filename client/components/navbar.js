import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import AppBar from '@material-ui/core/AppBar'
import {withStyles} from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Chat from './Chat'
import {changeSidemenu} from '../store/sidemenu'

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}
// handleClick,isLoggedIn, classes are props/object
const Navbar = ({handleClick, isLoggedIn, classes, showSidemenu, isOpen}) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={() => {
            showSidemenu(!isOpen)
          }}
        >
          <MenuIcon />
        </IconButton>

        {isLoggedIn ? (
          <div
            style={{
              fontSize: 20
            }}
          >
            {/* The navbar will show these links after you log in */}
            <Link to="/home" style={{color: 'white'}}>
              {'     '}
              Home
            </Link>
            <Link to="/chat" style={{color: 'white'}}>
              Chat
              {'     '}
            </Link>
            {'     '}
            <a href="#" onClick={handleClick} style={{color: 'white'}}>
              Logout
            </a>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
        <hr />
      </Toolbar>
    </AppBar>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    isOpen: state.menuIsOpen
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    },
    showSidemenu: openMenu => {
      dispatch(changeSidemenu(openMenu))
    }
  }
}

export default connect(mapState, mapDispatch)(withStyles(styles)(Navbar))

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
