import React from 'react'

import PropTypes from 'prop-types'

import './images-grid.css'

const ImagesGrid = (props) => {
  return (
    <div className={`images-grid-grid ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="images-grid-image"
      />
      <img
        alt={props.image_alt1}
        src={props.image_src1}
        className="images-grid-image01"
      />
      <img
        alt={props.image_alt2}
        src={props.image_src2}
        className="images-grid-image02"
      />
      <img
        alt={props.image_alt3}
        src={props.image_src3}
        className="images-grid-image03"
      />
      <img
        alt={props.image_alt4}
        src={props.image_src4}
        className="images-grid-image04"
      />
      <img
        alt={props.image_alt5}
        src={props.image_src5}
        className="images-grid-image05"
      />
      <img
        alt={props.image_alt6}
        src={props.image_src6}
        className="images-grid-image06"
      />
      <img
        alt={props.image_alt7}
        src={props.image_src7}
        className="images-grid-image07"
      />
      <img
        alt={props.image_alt8}
        src={props.image_src8}
        className="images-grid-image08"
      />
      <img
        alt={props.image_alt9}
        src={props.image_src9}
        className="images-grid-image09"
      />
      <img
        alt={props.image_alt10}
        src={props.image_src10}
        className="images-grid-image10"
      />
      <img
        alt={props.image_alt11}
        src={props.image_src11}
        className="images-grid-image11"
      />
      <img
        alt={props.image_alt12}
        src={props.image_src12}
        className="images-grid-image12"
      />
      <img
        alt={props.image_alt13}
        src={props.image_src13}
        className="images-grid-image13"
      />
      <img
        alt={props.image_alt14}
        src={props.image_src14}
        className="images-grid-image14"
      />
      <img
        alt={props.image_alt15}
        src={props.image_src15}
        className="images-grid-image15"
      />
    </div>
  )
}

ImagesGrid.defaultProps = {
  rootClassName: '',
  image_alt3: 'image',
  image_alt14: 'image',
  image_alt13: 'image',
  image_src13: '/playground_assets/iphone-1-1100w.png',
  image_alt1: 'image',
  image_alt2: 'image',
  image_src7: '/playground_assets/iphone-3-1100w.png',
  image_alt8: 'image',
  image_alt10: 'image',
  image_src: '/playground_assets/iphone-3-1100w.png',
  image_src10: '/playground_assets/iphone-1-1100w.png',
  image_src6: '/playground_assets/iphone-1-1100w.png',
  image_src8: '/playground_assets/iphone-2-1100w.png',
  image_src1: '/playground_assets/iphone-2-1100w.png',
  image_alt12: 'image',
  image_alt: 'image',
  image_src14: '/playground_assets/iphone-3-1100w.png',
  image_alt7: 'image',
  image_src5: '/playground_assets/iphone-4-1100w.png',
  image_src11: '/playground_assets/iphone-3-1100w.png',
  image_src15: '/playground_assets/iphone-2-1100w.png',
  image_src9: '/playground_assets/iphone-4-1100w.png',
  image_src3: '/playground_assets/iphone-1-1100w.png',
  image_alt9: 'image',
  image_alt15: 'image',
  image_alt5: 'image',
  image_src12: '/playground_assets/iphone-4-1100w.png',
  image_alt6: 'image',
  image_src2: '/playground_assets/iphone-4-1100w.png',
  image_alt11: 'image',
  image_alt4: 'image',
  image_src4: '/playground_assets/iphone-2-1100w.png',
}

ImagesGrid.propTypes = {
  rootClassName: PropTypes.string,
  image_alt3: PropTypes.string,
  image_alt14: PropTypes.string,
  image_alt13: PropTypes.string,
  image_src13: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src7: PropTypes.string,
  image_alt8: PropTypes.string,
  image_alt10: PropTypes.string,
  image_src: PropTypes.string,
  image_src10: PropTypes.string,
  image_src6: PropTypes.string,
  image_src8: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt12: PropTypes.string,
  image_alt: PropTypes.string,
  image_src14: PropTypes.string,
  image_alt7: PropTypes.string,
  image_src5: PropTypes.string,
  image_src11: PropTypes.string,
  image_src15: PropTypes.string,
  image_src9: PropTypes.string,
  image_src3: PropTypes.string,
  image_alt9: PropTypes.string,
  image_alt15: PropTypes.string,
  image_alt5: PropTypes.string,
  image_src12: PropTypes.string,
  image_alt6: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt11: PropTypes.string,
  image_alt4: PropTypes.string,
  image_src4: PropTypes.string,
}

export default ImagesGrid
