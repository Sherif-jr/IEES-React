import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer-gray.css'

const FooterGray = (props) => {
  return (
    <footer className="footer-gray-footer">
      <div className="footer-gray-divider"></div>
      <div className="footer-gray-container">
        <div className="footer-gray-container1">
          <div className="footer-gray-container2">
            <div className="footer-gray-container3">
              <Link to="/" className="footer-gray-navlink">
                <img
                  alt={props.image_alt}
                  src={props.image_src}
                  className="footer-gray-image"
                />
              </Link>
              <Link to="/" className="footer-gray-navlink1 animate-gradient">
                <span>IEES</span>
                <br></br>
              </Link>
            </div>
            <span className="footer-gray-text02">Social</span>
            <div className="footer-gray-container4">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="footer-gray-icon"
              >
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="footer-gray-icon2"
              >
                <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
              </svg>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="footer-gray-icon4"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="footer-gray-icon6">
                <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
              </svg>
            </div>
          </div>
          <div className="footer-gray-container5">
            <div className="footer-gray-container6">
              <span className="footer-gray-text03 animate-gradient Large">
                Company
              </span>
              <Link to="/about" className="footer-gray-navlink2 Large">
                About Us
              </Link>
              <Link to="/contact-us" className="footer-gray-text04 Large">
                Contact Us
              </Link>
              <span className="footer-gray-text05 Large">FAQs</span>
            </div>
            <div className="footer-gray-container7">
              <span className="footer-gray-text06 Large animate-gradient">
                Services
              </span>
              <Link
                to="/maintenance-management"
                className="footer-gray-navlink3"
              >
                Maintenance Management
              </Link>
              <Link
                to="/energy-management"
                className="footer-gray-navlink4 Large"
              >
                Energy Management
              </Link>
              <Link
                to="/project-management"
                className="footer-gray-navlink5 Large"
              >
                Project Management
              </Link>
            </div>
            <div className="footer-gray-container8">
              <span className="footer-gray-text07 Large animate-gradient">
                Legal
              </span>
              <span className="footer-gray-text08 Large">
                Terms &amp; Conditions
              </span>
              <span className="footer-gray-text09 Large">Privacy Policy</span>
              <span className="footer-gray-text10 Large">Licenses</span>
            </div>
          </div>
        </div>
        <span className="footer-gray-text11 Small">
          All rights reserved. Copyright © 2022 Integrated Energy and
          Engineering Services.
        </span>
      </div>
    </footer>
  )
}

FooterGray.defaultProps = {
  image_alt: 'image',
  image_src: '/playground_assets/asset%202.svg',
}

FooterGray.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default FooterGray
