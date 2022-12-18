import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryGreenButton from './primary-green-button'
import './header-full.css'

const HeaderFull = (props) => {
  return (
    <div className={`header-full-header ${props.rootClassName} `}>
      <nav className="header-full-nav">
        <div className="header-full-container">
          <Link to="/" className="header-full-navlink">
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
            <Link to="/" className="header-full-navlink1 Large">
              Home
            </Link>
            <Link to="/contact-us" className="header-full-navlink2 Large">
              Profile
            </Link>
            <Link to="/coming-soon" className="header-full-navlink3 Large">
              Coming Soon
            </Link>
          </div>
          <div className="header-full-container2">
            <div className="header-full-container3">
              <Link to="/contact-us" className="header-full-navlink4">
                <PrimaryGreenButton
                  button="buy now"
                  className="header-full-component"
                ></PrimaryGreenButton>
              </Link>
            </div>
            <div data-role="BurgerMenu" className="header-full-burger-menu">
              <svg viewBox="0 0 1024 1024" className="header-full-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <div data-role="MobileMenu" className="header-full-mobile-menu">
        <div className="header-full-top">
          <Link
            to="/"
            className="header-full-navlink5 animate__fadeIn animate__animated"
          >
            IEES
          </Link>
          <div
            data-role="CloseMobileMenu"
            className="header-full-close-menu animate__animated"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="header-full-icon2 animate__fadeIn animate__animated"
            >
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
        </div>
        <div className="header-full-mid">
          <div className="header-full-menu1">
            <Link
              to="/"
              className="header-full-home-link animate__faster animate__fadeInLeft animate__animated"
            >
              Home
            </Link>
            <Link
              to="/contact-us"
              className="header-full-services-link animate__fadeInRight animate__faster animate__animated"
            >
              services
            </Link>
            <Link
              to="/projects"
              className="header-full-projects-link animate__faster animate__fadeInLeft animate__animated"
            >
              projects
            </Link>
            <Link
              to="/about"
              className="header-full-about-link animate__fadeInRight animate__faster animate__animated"
            >
              About
            </Link>
            <Link
              to="/contact-us"
              className="header-full-about-link1 animate__faster animate__fadeInLeft animate__animated"
            >
              contact us
            </Link>
          </div>
        </div>
        <div className="header-full-bot">
          <div className="header-full-container4">
            <button className="header-full-button">Button</button>
          </div>
        </div>
      </div>
    </div>
  )
}

HeaderFull.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
}

HeaderFull.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default HeaderFull
