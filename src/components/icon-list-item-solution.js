import React from 'react'

import PropTypes from 'prop-types'

import './icon-list-item-solution.css'

const IconListItemSolution = (props) => {
  return (
    <div
      className={`icon-list-item-solution-container ${props.rootClassName} `}
    >
      <li className="icon-list-item-solution-li list-item">
        <div className="icon-list-item-solution-container1">
          <svg viewBox="0 0 1024 1024" className="icon-list-item-solution-icon">
            <path
              d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"
              className=""
            ></path>
          </svg>
        </div>
        <div className="icon-list-item-solution-container2">
          <span className="icon-list-item-solution-text">
            <span className="">This is a list item</span>
            <br className=""></br>
          </span>
        </div>
      </li>
    </div>
  )
}

IconListItemSolution.defaultProps = {
  rootClassName: '',
  TextContent: () => {},
}

IconListItemSolution.propTypes = {
  rootClassName: PropTypes.string,
  TextContent: PropTypes.func,
}

export default IconListItemSolution
