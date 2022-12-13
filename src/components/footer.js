import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-container">
        <div className="footer-container1">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="footer-image"
          />
          <span className="footer-text">
            <span className="">Copyright © 2022</span>
            <br className=""></br>
          </span>
        </div>
        <div className="footer-container2">
          <div className="footer-container3">
            <span className="footer-text03 Large">Company</span>
            <span className="footer-text04 Large">About Us</span>
            <span className="footer-text05 Large">Careers</span>
            <span className="footer-text06 Large">Press</span>
          </div>
          <div className="footer-container4">
            <span className="footer-text07 Large">Pages</span>
            <span className="footer-text08 Large">Login</span>
            <span className="footer-text09 Large">Register</span>
            <span className="footer-text10 Large">About</span>
          </div>
          <div className="footer-container5">
            <svg viewBox="0 0 1024 1024" className="footer-icon">
              <path
                d="M928 0h-832c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM384 832h-128v-448h128v448zM320 320c-35.4 0-64-28.6-64-64s28.6-64 64-64c35.4 0 64 28.6 64 64s-28.6 64-64 64zM832 832h-128v-256c0-35.4-28.6-64-64-64s-64 28.6-64 64v256h-128v-448h128v79.4c26.4-36.2 66.8-79.4 112-79.4 79.6 0 144 71.6 144 160v288z"
                className=""
              ></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="footer-icon2">
              <path
                d="M731.429 348.571c-21.714 9.714-44.571 16-69.143 19.429 25.143-14.857 44-38.857 53.143-66.857-23.429 13.714-49.143 24-76.571 29.143-21.714-23.429-53.143-37.714-87.429-37.714-66.286 0-120 53.714-120 120 0 9.143 0.571 18.857 2.857 27.429-100-5.143-188.571-52.571-248-125.714-10.286 17.714-16.571 38.857-16.571 60.571 0 41.714 19.429 78.286 52 100-20-0.571-38.857-6.286-57.143-14.857v1.143c0 58.286 44 106.857 98.857 117.714-10.286 2.857-18.286 4.571-29.143 4.571-7.429 0-14.857-1.143-22.286-2.286 15.429 47.429 59.429 82.286 112 83.429-41.143 32-92.571 51.429-149.143 51.429-9.714 0-19.429-0.571-28.571-1.714 53.143 33.714 116 53.714 184 53.714 220.571 0 341.714-182.857 341.714-341.714 0-5.143 0-10.286-0.571-15.429 23.429-16.571 44-37.714 60-62.286zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"
                className=""
              ></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="footer-icon4">
              <path
                d="M829.143 73.143c26.857 0 48.571 21.714 48.571 48.571v780.571c0 26.857-21.714 48.571-48.571 48.571h-223.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-420c-26.857 0-48.571-21.714-48.571-48.571v-780.571c0-26.857 21.714-48.571 48.571-48.571h780.571z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  rootClassName: '',
  image_src: '/playground_assets/asset%203.svg',
  image_alt: 'image',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  link_text: 'https://example.com',
  image_alt1: 'image',
  text: 'Link',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  link_text: PropTypes.string,
  image_alt1: PropTypes.string,
  text: PropTypes.string,
}

export default Footer
