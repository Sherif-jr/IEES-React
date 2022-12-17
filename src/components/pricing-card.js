import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './pricing-card.css'

const PricingCard = (props) => {
  const [Title, setTitle] = useState('Title')
  const [isHovered, setIsHovered] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  return (
    <div
      id="Card"
      onClick={() => setIsHovered(!isHovered)}
      onMouseEnter={() => setIsHovered(false)}
      onMouseLeave={() => setIsHovered(true)}
      className={`pricing-card-pricing-card ${props.rootClassName} `}
    >
      <h1 className="pricing-card-text">{props.Title}</h1>
      {!isHovered && (
        <div className="pricing-card-container animate__slideInUp animate__animated">
          <span className="pricing-card-text1">{props.descriptionArea}</span>
          <a
            href={props.link_button}
            target="_blank"
            rel="noreferrer noopener"
            className="pricing-card-link button"
          >
            {props.buttontext}
          </a>
        </div>
      )}
    </div>
  )
}

PricingCard.defaultProps = {
  rootClassName: '',
  descriptionArea: 'Text',
  buttontext: 'Learn More',
  link_button: '',
  Title: 'Title',
}

PricingCard.propTypes = {
  rootClassName: PropTypes.string,
  descriptionArea: PropTypes.string,
  buttontext: PropTypes.string,
  link_button: PropTypes.string,
  Title: PropTypes.string,
}

export default PricingCard
