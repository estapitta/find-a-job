import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import openMenu from './sidemenu'

import user from './user'
import job from './job'

<<<<<<< HEAD
const reducer = combineReducers({
  user,
  openMenu
})
=======
const reducer = combineReducers({user, job})
>>>>>>> 363c5a4a04d68679c073b3a34d482051a625c2a2
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './job'
