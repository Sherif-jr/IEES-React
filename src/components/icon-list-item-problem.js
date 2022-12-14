import React from 'react'

import PropTypes from 'prop-types'

import './icon-list-item-problem.css'

const IconListItemProblem = (props) => {
  return (
    <div className="icon-list-item-problem-container">
      <li className="icon-list-item-problem-li list-item">
        <div className="icon-list-item-problem-container1">
          <svg viewBox="0 0 1024 1024" className="icon-list-item-problem-icon">
            <path d="M554 598v-172h-84v172h84zM554 768v-86h-84v86h84zM42 896l470-810 470 810h-940z"></path>
          </svg>
        </div>
        <div className="icon-list-item-problem-container2">
          <span>
            <span>This is a list item</span>
            <br></br>
          </span>
        </div>
      </li>
    </div>
  )
}

IconListItemProblem.defaultProps = {
  rootClassName: '',
}

IconListItemProblem.propTypes = {
  rootClassName: PropTypes.string,
}

export default IconListItemProblem
