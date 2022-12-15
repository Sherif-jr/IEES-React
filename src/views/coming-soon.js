import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import { Helmet } from 'react-helmet'

import './coming-soon.css'

const ComingSoon = (props) => {
  return (
    <div className="coming-soon-container">
      <Helmet>
        <title>IEES</title>
        <meta property="og:title" content="IEES" />
      </Helmet>
      <div className="coming-soon-container1">
        <div className="coming-soon-main">
          <Player
            src="https://assets7.lottiefiles.com/packages/lf20_ukkmrz6p.json"
            autoplay
            speed="1"
            background="transparent"
            className="coming-soon-lottie-node"
          ></Player>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon
