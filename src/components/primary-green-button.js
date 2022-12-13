import React from 'react'

import PropTypes from 'prop-types'

import './primary-green-button.css'

const PrimaryGreenButton = (props) => {
  return (
    <div className={`primary-green-button-container ${props.rootClassName} `}>
      <button className="primary-green-button-button">{props.button}</button>
    </div>
  )
}

PrimaryGreenButton.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

PrimaryGreenButton.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default PrimaryGreenButton
