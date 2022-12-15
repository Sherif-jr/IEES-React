import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryGreenButton from './primary-green-button'
import './header-full.css'

const HeaderFull = (props) => {
  return (
    <div className="header-full-header">
      <nav className="header-full-nav">
        <div className="header-full-container">
          <Link to="/home" className="header-full-navlink">
            <div className="header-full-container1">
              <img
                alt={props.image_alt}
                src="/playground_assets/asset%2011.svg"
                className="header-full-image"
              />
              <span className="header-full-text Large">IEES</span>
            </div>
          </Link>
          <div className="header-full-menu">
            <Link to="/home" className="header-full-navlink1 Large">
              Home
            </Link>
            <Link to="/contact-us" className="header-full-navlink2 Large">
              Profile
            </Link>
            <Link to="/" className="header-full-navlink3 Large">
              Coming Soon
            </Link>
          </div>
          <div className="header-full-container2">
            <div className="header-full-container3">
              <PrimaryGreenButton button="buy now"></PrimaryGreenButton>
            </div>
            <svg viewBox="0 0 1024 1024" className="header-full-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </nav>
    </div>
  )
}

HeaderFull.defaultProps = {
  image_alt: 'image',
}

HeaderFull.propTypes = {
  image_alt: PropTypes.string,
}

export default HeaderFull
