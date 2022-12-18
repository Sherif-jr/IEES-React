import React from 'react'

import { Helmet } from 'react-helmet'

import './thank-you.css'

const ThankYou = (props) => {
  return (
    <div className="thank-you-container">
      <Helmet>
        <title>Thank-you - IEES</title>
        <meta property="og:title" content="Thank-you - IEES" />
      </Helmet>
    </div>
  )
}

export default ThankYou
