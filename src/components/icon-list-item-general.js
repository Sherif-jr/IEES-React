import React from 'react'

import PropTypes from 'prop-types'

import './icon-list-item-general.css'

const IconListItemGeneral = (props) => {
  return (
    <div className={`icon-list-item-general-container ${props.rootClassName} `}>
      <li className="icon-list-item-general-li list-item">
        <div className="icon-list-item-general-container1">
          <svg viewBox="0 0 1024 1024" className="icon-list-item-general-icon">
            <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
          </svg>
          <p className="icon-list-item-general-text">{props.text}</p>
        </div>
      </li>
    </div>
  )
}

IconListItemGeneral.defaultProps = {
  rootClassName: '',
  text: 'This is A list Item',
}

IconListItemGeneral.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default IconListItemGeneral
