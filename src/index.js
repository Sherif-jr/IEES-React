import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import ThankYou from './views/thank-you'
import About from './views/about'
import ProjectManagement from './views/project-management'
import Page from './views/page'
import EnergyManagement from './views/energy-management'
import ComingSoon from './views/coming-soon'
import ContactUs from './views/contact-us'
import Projects from './views/projects'
import Services from './views/services'
import MaintenanceManagement from './views/maintenance-management'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={ThankYou} exact path="/thank-you" />
        <Route component={About} exact path="/about" />
        <Route component={ProjectManagement} exact path="/project-management" />
        <Route component={Page} exact path="/page" />
        <Route component={EnergyManagement} exact path="/energy-management" />
        <Route component={ComingSoon} exact path="/coming-soon" />
        <Route component={ContactUs} exact path="/contact-us" />
        <Route component={Projects} exact path="/projects" />
        <Route component={Services} exact path="/services" />
        <Route
          component={MaintenanceManagement}
          exact
          path="/maintenance-management"
        />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
