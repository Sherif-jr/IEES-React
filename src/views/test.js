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
    </div>
  )
}

export default Test
