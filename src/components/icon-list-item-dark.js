import React from 'react'

import PropTypes from 'prop-types'

import './icon-list-item-dark.css'

const IconListItemDark = (props) => {
  return (
    <div className={`icon-list-item-dark-container ${props.rootClassName} `}>
      <div className="icon-list-item-dark-container1">
        <svg viewBox="0 0 1024 1024" className="icon-list-item-dark-icon">
          <path
            d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"
            className=""
          ></path>
        </svg>
        <p className="icon-list-item-dark-text">{props.text}</p>
      </div>
    </div>
  )
}

IconListItemDark.defaultProps = {
  text: 'This is A list Item',
  rootClassName: '',
}

IconListItemDark.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default IconListItemDark
