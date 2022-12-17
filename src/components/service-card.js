import React, { useState } from 'react'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './service-card.css'

const ServiceCard = (props) => {
  const [Title, setTitle] = useState('Title')
  const [isHovered, setIsHovered] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  return (
    <div
      id="Card"
      className={`service-card-pricing-card ${props.rootClassName} `}
    >
      <h3 id="title" className="service-card-text transition">
        {props.Title}
      </h3>
      <div id="folder" className="service-card-container">
        <div className="service-card-container1">
          <span className="service-card-text1">{props.descriptionArea}</span>
        </div>
        <div className="service-card-container2">
          <a href={props.link_button} className="service-card-link button">
            {props.buttontext}
          </a>
        </div>
      </div>
      <div className="">
        <DangerousHTML
          html={`<style>
    #Card:hover #title{
        transform: translateY(0);
        font-size: .9rem;
    }
    #Card:hover #folder{
        transform: translateY(0);
        visibility: visible;
    }
</style>
<script>
</script>`}
          className=""
        ></DangerousHTML>
      </div>
    </div>
  )
}

ServiceCard.defaultProps = {
  rootClassName: '',
  descriptionArea: 'Text',
  buttontext: 'Learn More',
  link_button: '/',
  Title: 'Title',
}

ServiceCard.propTypes = {
  rootClassName: PropTypes.string,
  descriptionArea: PropTypes.string,
  buttontext: PropTypes.string,
  link_button: PropTypes.string,
  Title: PropTypes.string,
}

export default ServiceCard
