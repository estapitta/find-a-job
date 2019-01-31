import React from 'react'

import {Navbar} from './components'
import Routes from './routes'

import Sidebar from './components/Sidebar'
import SwipeList from './components/SwipeList'

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Routes />
      <SwipeList />
    </div>
  )
}

export default App
