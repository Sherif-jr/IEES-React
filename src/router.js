import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

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
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Thank-you',
      path: '/thank-you',
      component: ThankYou,
    },
    {
      name: 'About',
      path: '/about',
      component: About,
    },
    {
      name: 'Project-Management',
      path: '/project-management',
      component: ProjectManagement,
    },
    {
      name: 'Page',
      path: '/page',
      component: Page,
    },
    {
      name: 'Energy-Management',
      path: '/energy-management',
      component: EnergyManagement,
    },
    {
      name: 'ComingSoon',
      path: '/coming-soon',
      component: ComingSoon,
    },
    {
      name: 'ContactUs',
      path: '/contact-us',
      component: ContactUs,
    },
    {
      name: 'Projects',
      path: '/projects',
      component: Projects,
    },
    {
      name: 'Services',
      path: '/services',
      component: Services,
    },
    {
      name: 'Maintenance-Management',
      path: '/maintenance-management',
      component: MaintenanceManagement,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
  ],
})
