import React from 'react'

import PropTypes from 'prop-types'

import './logos.css'

const Logos = (props) => {
  return (
    <div className="logos-logos">
      <div className="logos-container">
        <div className="logos-container01">
          <div className="logos-container02">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="logos-image"
            />
          </div>
          <div className="logos-container03">
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="logos-image1"
            />
          </div>
          <div className="logos-container04">
            <img
              alt={props.image_alt2}
              src={props.image_src2}
              className="logos-image2"
            />
          </div>
        </div>
        <div className="logos-container05">
          <div className="logos-container06">
            <img
              alt={props.image_alt3}
              src={props.image_src3}
              className="logos-image3"
            />
          </div>
          <div className="logos-container07">
            <img
              alt={props.image_alt4}
              src={props.image_src4}
              className="logos-image4"
            />
          </div>
          <div className="logos-container08">
            <img
              alt={props.image_alt5}
              src={props.image_src5}
              className="logos-image5"
            />
          </div>
        </div>
        <div className="logos-container09">
          <div className="logos-container10">
            <img
              alt={props.image_alt6}
              src={props.image_src6}
              className="logos-image6"
            />
          </div>
          <div className="logos-container11">
            <img
              alt={props.image_alt7}
              src={props.image_src7}
              className="logos-image7"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Logos.defaultProps = {
  image_src7: '/playground_assets/logo-weave.svg',
  image_alt6: 'image',
  image_src: '/playground_assets/logo-asana.svg',
  image_alt2: 'image',
  image_src6: '/playground_assets/logo-attlasian.svg',
  image_alt4: 'image',
  image_alt5: 'image',
  image_src5: '/playground_assets/logo-invision.svg',
  image_alt7: 'image',
  image_src1: '/playground_assets/logo-slack.svg',
  image_src2: '/playground_assets/logo-google-drive.svg',
  image_alt1: 'image',
  image_src3: '/playground_assets/logo-shopify.svg',
  image_alt3: 'image',
  image_alt: 'image',
  image_src4:
    'https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-apple.svg',
}

Logos.propTypes = {
  image_src7: PropTypes.string,
  image_alt6: PropTypes.string,
  image_src: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src6: PropTypes.string,
  image_alt4: PropTypes.string,
  image_alt5: PropTypes.string,
  image_src5: PropTypes.string,
  image_alt7: PropTypes.string,
  image_src1: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src3: PropTypes.string,
  image_alt3: PropTypes.string,
  image_alt: PropTypes.string,
  image_src4: PropTypes.string,
}

export default Logos
