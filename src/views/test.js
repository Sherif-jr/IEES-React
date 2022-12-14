import React from 'react'

import { Helmet } from 'react-helmet'

import './test.css'

const Test = (props) => {
  return (
    <div className="test-container">
      <Helmet>
        <title>Test - IEES</title>
        <meta property="og:title" content="Test - IEES" />
      </Helmet>
      <div className="test-container1">
        <svg viewBox="0 0 1024 1024" className="test-icon">
          <path d="M554 598v-172h-84v172h84zM554 768v-86h-84v86h84zM42 896l470-810 470 810h-940z"></path>
        </svg>
      </div>
      <div className="test-container2">
        <svg viewBox="0 0 1024 1024" className="test-icon2">
          <path d="M451.669 281.003c-33.323 33.237-33.323 87.339 0 120.661l67.669 67.669h-309.077c-47.104 0-85.333 38.187-85.333 85.333 0 47.104 38.229 85.333 85.333 85.333h309.077l-67.669 67.669c-33.323 33.237-33.323 87.339 0 120.661 16.683 16.683 38.485 25.003 60.331 25.003s43.648-8.32 60.331-25.003l273.664-273.664-273.664-273.664c-33.323-33.323-87.339-33.323-120.661 0z"></path>
        </svg>
      </div>
    </div>
  )
}

export default Test
