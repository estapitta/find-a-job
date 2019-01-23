import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
// import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Sidebar /> */}
      <Routes />
    </div>
  )
}

export default App
