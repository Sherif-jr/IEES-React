import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SecondaryButton from '../components/secondary-button'
import FooterGray from '../components/footer-gray'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - IEES</title>
        <meta property="og:title" content="About - IEES" />
      </Helmet>
      <Header></Header>
      <div className="about-banner">
        <h1 className="about-text">ABOUT IEES</h1>
        <span className="about-text1">
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
              dignissim tortor.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </span>
        <div className="about-btn-group">
          <button className="about-button button">Get Started</button>
          <button className="about-button1 button">Learn More</button>
        </div>
      </div>
      <div className="about-container1">
        <div className="about-main">
          <div className="about-container2">
            <h1 className="about-text5 HeadingOne">You Work With</h1>
            <h1 className="about-text6">Soft Design System</h1>
            <p className="about-text7 Lead">
              <span className="about-text8">
                The time is now for it be okay to be great. Subscribe now and
                get notified when it&apos;s launched!
              </span>
            </p>
            <div className="about-container3">
              <input
                type="text"
                placeholder="Email here"
                className="about-textinput Small input"
              />
              <SecondaryButton button="Subscribe"></SecondaryButton>
            </div>
          </div>
          <div className="about-grid">
            <img
              alt="image"
              src="/playground_assets/iphone-3-1000w.png"
              className="about-image"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className="about-image01"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-4-1000w.png"
              className="about-image02"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-1-1000w.png"
              className="about-image03"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className="about-image04"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-4-1000w.png"
              className="about-image05"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-1-1000w.png"
              className="about-image06"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-3-1000w.png"
              className="about-image07"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className="about-image08"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-4-1000w.png"
              className="about-image09"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-1-1000w.png"
              className="about-image10"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-3-1000w.png"
              className="about-image11"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-4-1000w.png"
              className="about-image12"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-1-1000w.png"
              className="about-image13"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-3-1000w.png"
              className="about-image14"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className="about-image15"
            />
          </div>
        </div>
      </div>
      <FooterGray></FooterGray>
    </div>
  )
}

export default About
