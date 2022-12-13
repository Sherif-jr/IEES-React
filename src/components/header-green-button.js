import React from 'react'

import PropTypes from 'prop-types'

import './header-green-button.css'

const HeaderGreenButton = (props) => {
  return (
    <div className={`header-green-button-container ${props.rootClassName} `}>
      <button className="header-green-button-button">{props.button}</button>
    </div>
  )
}

HeaderGreenButton.defaultProps = {
  button: 'Button',
  rootClassName: '',
}

HeaderGreenButton.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default HeaderGreenButton
