import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`component-container ${props.rootClassName} `}>
      <a
        href="#section1"
        onClick={props.hideSideNav}
        className="component-link button"
      >
        {props.button}
      </a>
    </div>
  )
}

AppComponent.defaultProps = {
  button: 'Get Started',
  rootClassName: '',
  hideSideNav: () => {},
}

AppComponent.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
  hideSideNav: PropTypes.func,
}

export default AppComponent
