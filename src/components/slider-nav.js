import React, { useState } from 'react'

import PropTypes from 'prop-types'

import OutlineGrayButton from './outline-gray-button'
import './slider-nav.css'

const SliderNav = (props) => {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <div className={`slider-nav-container ${props.rootClassName} `}>
      <aside className="slider-nav-container1">
        <a href="#navItem1" id="navItem1" className="slider-nav-link">
          {props.SectionName}
        </a>
        <a href="#navItem2" id="navItem2" className="slider-nav-link1">
          {props.SectionName1}
        </a>
        <a href="#navItem3" id="navItem3" className="slider-nav-link2">
          {props.SectionName11}
        </a>
        <a href="#navItem4" id="navItem4" className="slider-nav-link3">
          {props.SectionName111}
        </a>
        <OutlineGrayButton
          button="Finish"
          rootClassName="outline-gray-button-root-class-name9"
        ></OutlineGrayButton>
      </aside>
    </div>
  )
}

SliderNav.defaultProps = {
  SectionName111: 'Section1',
  SectionName1: 'Section1',
  rootClassName: '',
  link_text: '#',
  SectionName11: 'Section1',
  SectionName: 'Section1',
  link_text111: '#',
  link_text11: '#',
  link_text1: '#',
}

SliderNav.propTypes = {
  SectionName111: PropTypes.string,
  SectionName1: PropTypes.string,
  rootClassName: PropTypes.string,
  link_text: PropTypes.string,
  SectionName11: PropTypes.string,
  SectionName: PropTypes.string,
  link_text111: PropTypes.string,
  link_text11: PropTypes.string,
  link_text1: PropTypes.string,
}

export default SliderNav
