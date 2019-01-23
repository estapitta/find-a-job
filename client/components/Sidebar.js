import React from 'react'
import {connect} from 'react-redux'
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
    import React from 'react'
    import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
    import List from '@material-ui/core/List'
    import Divider from '@material-ui/core/Divider'
    import ListItem from '@material-ui/core/ListItem'
    import ListItemText from '@material-ui/core/ListItemText'
    import {withStyles} from '@material-ui/core/styles'
    
    import {connect} from 'react-redux'
    import {Link} from 'react-router-dom'
    import SidebarItem from './sidebarItem'
    
    import {changeSidemenu} from '../store/sidemenu'
    import {allCategories} from '../store/categories'
    
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
          <SwipeableDrawer
            className={this.props.classes.drawer}
            open={this.props.open}
            onClose={() => {
              this.props.closeSideBar()
            }}
            onOpen={() => {}}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={() => {
                this.props.closeSideBar()
              }}
            >
              <List>
                {this.props.categories.map(category => (
                  <SidebarItem
                    key={category.id}
                    closeSideBar={this.props.closeSideBar}
                   
                  />
                ))}
              </List>
            </div>
          </SwipeableDrawer>
        )
      }
    }
    
    const mapStateToProps = state => {
      return {
        open: state.openMenu,
       
      }
    }
    
    const mapDispatchToProps = dispatch => {
      return {
        closeSideBar: () => {
          dispatch(changeSidemenu(false))
        },
       
      }
    }
    
   

export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(Sidebar)
  )