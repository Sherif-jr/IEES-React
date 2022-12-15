import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home1 from './views/home1'
import About from './views/about'
import ProjectManagement from './views/project-management'
import ComingSoon from './views/coming-soon'
import ContactUs from './views/contact-us'
import Services from './views/services'
import Profile1 from './views/profile1'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home1} exact path="/home1" />
        <Route component={About} exact path="/about" />
        <Route component={ProjectManagement} exact path="/project-management" />
        <Route component={ComingSoon} exact path="/coming-soon" />
        <Route component={ContactUs} exact path="/contact-us" />
        <Route component={Services} exact path="/services" />
        <Route component={Profile1} exact path="/profile1" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
