import React from 'react'

import PropTypes from 'prop-types'

import './partner-carousel.css'

const PartnerCarousel = (props) => {
  return (
    <div className={`partner-carousel-container ${props.rootClassName} `}>
      <div className="partner-carousel-container1">
        <div className="partner-carousel-container2">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="partner-carousel-image"
          />
        </div>
        <div className="partner-carousel-container3">
          <img
            alt={props.image_alt11}
            src={props.image_src11}
            className="partner-carousel-image1"
          />
        </div>
        <div className="partner-carousel-container4">
          <img
            alt={props.image_alt111}
            src={props.image_src111}
            className="partner-carousel-image2"
          />
        </div>
        <div className="partner-carousel-container5">
          <img
            alt={props.image_alt1111}
            src={props.image_src1111}
            className="partner-carousel-image3"
          />
        </div>
        <div className="partner-carousel-container6">
          <img
            alt={props.image_alt11111}
            src={props.image_src11111}
            className="partner-carousel-image4"
          />
        </div>
      </div>
    </div>
  )
}

PartnerCarousel.defaultProps = {
  image_src111: '/playground_assets/eco-arch-200h.png',
  image_alt11: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt111: 'image',
  image_src11111: '/playground_assets/qcen-200h.png',
  image_alt1111: 'image',
  image_alt11111: 'image',
  image_src1: '/playground_assets/aurora-200h.png',
  image_src11: '/playground_assets/bahi-200h.png',
  image_src1111: '/playground_assets/ehst-200h.jpg',
  image_alt1: 'image',
  rootClassName: '',
  image_alt: 'image',
}

PartnerCarousel.propTypes = {
  image_src111: PropTypes.string,
  image_alt11: PropTypes.string,
  image_src: PropTypes.string,
  image_alt111: PropTypes.string,
  image_src11111: PropTypes.string,
  image_alt1111: PropTypes.string,
  image_alt11111: PropTypes.string,
  image_src1: PropTypes.string,
  image_src11: PropTypes.string,
  image_src1111: PropTypes.string,
  image_alt1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
}

export default PartnerCarousel
