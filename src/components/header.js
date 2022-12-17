import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import HeaderGreenButton from './header-green-button'
import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className="header-header">
      <nav className="header-nav animate__fadeInDown animate__animated">
        <div className="header-container">
          <Link to="/" className="header-navlink">
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
            <Link to="/" className="header-navlink1 Large">
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
                    <Link
                      to="/project-management"
                      className="header-project-management hover:translate-x-4"
                    >
                      {props.first_item}
                    </Link>
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
                    <Link to="/project-management" className="header-navlink2">
                      {props.second_item}
                    </Link>
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
                    <Link to="/project-management" className="header-navlink3">
                      {props.third_item}
                    </Link>
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
                    <span className="header-text2">{props.forth_item}</span>
                  </div>
                </li>
              </ul>
            </div>
            <Link to="/projects" className="header-navlink4 Large">
              Projects
            </Link>
            <Link to="/about" className="header-navlink5 Large">
              About
            </Link>
          </div>
          <div className="header-container2">
            <div className="header-container3">
              <Link to="/contact-us" className="header-navlink6">
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
          <Link
            to="/"
            className="header-navlink7 animate__fadeIn animate__animated"
          >
            IEES
          </Link>
          <div
            data-role="CloseMobileMenu"
            className="header-close-menu animate__animated"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="header-icon4 animate__fadeIn animate__animated"
            >
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <div className="header-menu1">
            <Link
              to="/"
              className="header-home-link animate__faster animate__fadeInLeft animate__animated"
            >
              Home
            </Link>
            <Link
              to="/contact-us"
              className="header-services-link animate__fadeInRight animate__faster animate__animated"
            >
              services
            </Link>
            <Link
              to="/projects"
              className="header-projects-link animate__faster animate__fadeInLeft animate__animated"
            >
              projects
            </Link>
            <Link
              to="/about"
              className="header-about-link animate__fadeInRight animate__faster animate__animated"
            >
              About
            </Link>
            <Link
              to="/contact-us"
              className="header-about-link1 animate__faster animate__fadeInLeft animate__animated"
            >
              contact us
            </Link>
          </div>
        </div>
        <div className="header-bot">
          <div className="header-container4">
            <button className="header-button">Button</button>
          </div>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  second_item: 'Maintenance Management',
  rootClassName: '',
  image_src: '',
  first_item: 'Project Management',
  forth_item: 'Design Management',
  image_alt: 'image',
  button: 'Button',
  third_item: 'Energy Management',
}

Header.propTypes = {
  second_item: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  first_item: PropTypes.string,
  forth_item: PropTypes.string,
  image_alt: PropTypes.string,
  button: PropTypes.string,
  third_item: PropTypes.string,
}

export default Header
