import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home1 from './views/home1'
import ComingSoon from './views/coming-soon'
import Profile from './views/profile'
import Test from './views/test'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home1} exact path="/home1" />
        <Route component={ComingSoon} exact path="/coming-soon" />
        <Route component={Profile} exact path="/profile" />
        <Route component={Test} exact path="/test" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
