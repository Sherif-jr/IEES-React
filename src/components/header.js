import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import HeaderGreenButton from './header-green-button'
import PrimaryGreenButton from './primary-green-button'
import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className="header-header">
      <nav className="header-nav">
        <div className="header-container">
          <Link to="/home" className="header-navlink">
            <div className="header-container1">
              <img
                alt={props.image_alt}
                src="/playground_assets/asset%2011.svg"
                className="header-image"
              />
              <span className="header-text Large">IEES</span>
            </div>
          </Link>
          <div className="header-menu">
            <Link to="/home" className="header-navlink1 Large">
              Home
            </Link>
            <div
              data-thq="thq-dropdown"
              className="header-thq-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle"
              >
                <span className="header-text1 Large">Services</span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="header-dropdown-arrow"
                >
                  <svg viewBox="0 0 1024 1024" className="header-icon">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul data-thq="thq-dropdown-list" className="header-dropdown-list">
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-dropdown-toggle1"
                  >
                    <span className="header-project-management">
                      {props.first_item}
                    </span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-dropdown-toggle2"
                  >
                    <span className="header-text2">{props.second_item}</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown2 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-dropdown-toggle3"
                  >
                    <span className="header-text3">{props.third_item}</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown3 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-dropdown-toggle4"
                  >
                    <span className="header-text4">{props.forth_item}</span>
                  </div>
                </li>
              </ul>
            </div>
            <Link to="/" className="header-navlink2 Large">
              Projects
            </Link>
            <Link to="/about" className="header-navlink3 Large">
              About
            </Link>
          </div>
          <div className="header-container2">
            <div className="header-container3">
              <Link to="/contact-us" className="header-navlink4">
                <HeaderGreenButton
                  button="CONTACT US"
                  rootClassName="header-green-button-root-class-name"
                  className="header-component"
                ></HeaderGreenButton>
              </Link>
            </div>
            <div data-role="BurgerMenu" className="header-burger-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon2">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <div data-role="MobileMenu" className="header-mobile-menu">
        <div className="header-top">
          <Link to="/home" className="header-navlink5 Large">
            Soft UI Design System
          </Link>
          <div data-role="CloseMobileMenu" className="header-close-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon4">
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <div className="header-menu1">
            <Link to="/home" className="header-navlink6 Large">
              Home
            </Link>
            <Link to="/contact-us" className="header-navlink7 Large">
              Profile
            </Link>
            <Link to="/" className="header-navlink8 Large">
              Coming Soon
            </Link>
          </div>
        </div>
        <div className="header-bot">
          <PrimaryGreenButton button="buy now"></PrimaryGreenButton>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  second_item: 'Maintenance Management',
  image_src: '',
  forth_item: 'Design Management',
  image_alt: 'image',
  third_item: 'Energy Management',
  first_item: 'Project Management',
}

Header.propTypes = {
  second_item: PropTypes.string,
  image_src: PropTypes.string,
  forth_item: PropTypes.string,
  image_alt: PropTypes.string,
  third_item: PropTypes.string,
  first_item: PropTypes.string,
}

export default Header
