import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import OutlineBlueButton from '../components/outline-blue-button'
import NextButton from '../components/next-button'
import BlogCard from '../components/blog-card'
import Contact from '../components/contact'
import Footer from '../components/footer'
import './profile1.css'

const Profile1 = (props) => {
  return (
    <div className="profile1-container">
      <Helmet>
        <title>Profile1 - IEES</title>
        <meta property="og:title" content="Profile1 - IEES" />
      </Helmet>
      <HeaderFull></HeaderFull>
      <div className="profile1-profile">
        <img
          alt="image"
          src="/playground_assets/bruce-mars-200h.jpg"
          className="profile1-image"
        />
        <div className="profile1-container1">
          <div className="profile1-container2">
            <h4 className="profile1-text">Michael Roven</h4>
            <OutlineBlueButton button="follow"></OutlineBlueButton>
          </div>
          <div className="profile1-container3">
            <span className="profile1-text01">
              <span className="profile1-text02">323</span>
              <span> Posts</span>
            </span>
            <span className="profile1-text04">
              <span className="profile1-text05">3.5k</span>
              <span> Followers</span>
            </span>
            <span>
              <span className="profile1-text08">260</span>
              <span> Following</span>
            </span>
          </div>
          <span className="Medium">
            Decisions: If you can’t decide, the answer is no. If two equally
            difficult paths, choose the one more painful in the short term (pain
            avoidance is creating an illusion of equality). Choose the path that
            leaves you more equanimous.
          </span>
          <NextButton button="More about me"></NextButton>
        </div>
      </div>
      <div className="profile1-blog-posts">
        <h1 className="profile1-text11 HeadingTwo">
          <span></span>
          <span>Check my latest blogposts</span>
          <br></br>
        </h1>
        <div className="profile1-container4">
          <BlogCard></BlogCard>
          <BlogCard
            image_src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-clock.jpg"
            description="Venture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large, ate-stage financings"
          ></BlogCard>
          <BlogCard
            title="MateLabs machine learning"
            image_src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-wall.jpg"
            description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with"
          ></BlogCard>
          <div className="profile1-container5">
            <div className="profile1-card">
              <div className="profile1-container6">
                <h1 className="profile1-text14">Flexible work hours</h1>
                <span className="profile1-text15">
                  <span className="profile1-text16">
                    Rather than worrying about switching offices every couple
                    years, you stay in the same place.
                  </span>
                </span>
                <div className="profile1-container7">
                  <button className="profile1-button button">
                    <span className="profile1-text17">Read more</span>
                    <svg viewBox="0 0 1024 1024" className="profile1-icon">
                      <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="profile1-container8"></div>
            </div>
          </div>
        </div>
      </div>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default Profile1
