import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './pricing-card.css'

const PricingCard = (props) => {
  const [Title, setTitle] = useState('Title')
  const [isHovered, setIsHovered] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  return (
    <div
      id="Card"
      onMouseEnter={() => setIsHovered(false)}
      onMouseLeave={() => setIsHovered(true)}
      className="pricing-card-pricing-card"
    >
      <h1>{props.Title}</h1>
      <span className="pricing-card-text1">
        <span>Project</span>
        <br></br>
        <span>MANAGEMENT</span>
      </span>
      {!isHovered && (
        <div className="pricing-card-container">
          <span>{props.descriptionArea}</span>
          <Link to="/contact-us" className="pricing-card-navlink button">
            {props.buttontext}
          </Link>
        </div>
      )}
    </div>
  )
}

PricingCard.defaultProps = {
  descriptionArea: 'Text',
  buttontext: 'Learn More',
  Title: 'Title',
}

PricingCard.propTypes = {
  descriptionArea: PropTypes.string,
  buttontext: PropTypes.string,
  Title: PropTypes.string,
}

export default PricingCard
