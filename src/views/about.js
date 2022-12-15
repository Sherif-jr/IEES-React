import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PricingCard from '../components/pricing-card'
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
      <div className="about-intro">
        <h1 className="about-text">
          This is why we existed, That is what we achieve.
        </h1>
        <div className="about-container01">
          <div className="about-container02">
            <span className="about-text01">
              We provide you the best in market engineering services. No more
              headaches or delays. Our services are tailored for your needs. Pay
              only for what you need and expand even more at any time.
            </span>
            <div className="about-container03">
              <div className="about-container04">
                <div className="about-container05">
                  <li className="about-li list-item">
                    <div className="about-container06">
                      <svg viewBox="0 0 1024 1024" className="about-icon">
                        <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                      </svg>
                      <p className="about-text02">Latest technology</p>
                    </div>
                  </li>
                </div>
                <div className="about-container07">
                  <li className="about-li1 list-item">
                    <div className="about-container08">
                      <svg viewBox="0 0 1024 1024" className="about-icon02">
                        <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                      </svg>
                      <p className="about-text03">
                        Efficient project management
                      </p>
                    </div>
                  </li>
                </div>
                <div className="about-container09">
                  <li className="about-li2 list-item">
                    <div className="about-container10">
                      <svg viewBox="0 0 1024 1024" className="about-icon04">
                        <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                      </svg>
                      <p className="about-text04">
                        Optimized engineering designs
                      </p>
                    </div>
                  </li>
                </div>
                <div className="about-container11">
                  <li className="about-li3 list-item">
                    <div className="about-container12">
                      <svg viewBox="0 0 1024 1024" className="about-icon06">
                        <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                      </svg>
                      <p className="about-text05">Less energy consumption</p>
                    </div>
                  </li>
                </div>
                <div className="about-container13">
                  <li className="about-li4 list-item">
                    <div className="about-container14">
                      <svg viewBox="0 0 1024 1024" className="about-icon08">
                        <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                      </svg>
                      <p className="about-text06">Greener environment</p>
                    </div>
                  </li>
                </div>
              </div>
            </div>
            <div className="about-container15">
              <button className="about-button button">Learn More</button>
            </div>
          </div>
          <div className="about-container16">
            <img
              alt="image"
              src="/playground_assets/yoga-officeasset%201-700w.png"
              className="about-image"
            />
          </div>
        </div>
      </div>
      <section className="about-history">
        <div className="about-container17">
          <div className="about-container18">
            <div className="about-container19">
              <p className="about-text07">
                <span className="about-text08">
                  PAST IS THE BEGINNING OF THE FUTURE
                </span>
                <br></br>
              </p>
              <h3 className="about-text10">
                <span>IEES HISTORY</span>
                <br></br>
              </h3>
              <p className="about-text13">
                After a long experience in Mechanical, Electrical, and Plumbing
                (MEP) projects in different phases (Designing, Tendering,
                Contracting, Construction, operating, maintenance, developing,
                and upgrading) and as a response and responsibility on our
                global duty to participate in climate change actions, we
                developed an adapted firm (Integrated Energy and Engineering
                Services Company IEES) that depends on the market experience and
                updated science and research to participate in:
              </p>
              <ul className="about-ul list">
                <li className="list-item">
                  <span>
                    Developing optimized MEP designs (Design Services).
                  </span>
                </li>
                <li className="list-item">
                  <span>
                    Managing MEP projects (Project Management Services).
                  </span>
                </li>
                <li className="list-item">
                  <span>
                    Energy Management for different facilities (Energy
                    Management Services).
                  </span>
                </li>
                <li className="list-item">
                  <span>
                    Maintenance Management for different facilities (Maintenance
                    Management Services).
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="about-container20">
            <img
              alt="image"
              src="/playground_assets/servicesasset-1-1024x805-600w.png"
              className="about-image01"
            />
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className="about-bottom-wave-image"
        />
        <img
          alt="image"
          src="/playground_assets/asset%201-1500w.png"
          className="about-image02"
        />
        <img
          alt="image"
          src="/playground_assets/top.svg"
          className="about-top-wave-image"
        />
      </section>
      <div className="about-vision">
        <div className="about-container21">
          <div className="about-container22">
            <img
              alt="image"
              src="/playground_assets/victor-iaqua2snpbk-unsplash11-700w.jpg"
              className="about-image03"
            />
          </div>
          <div className="about-container23">
            <p className="about-text18">
              <span className="about-text19">DREAM, ACHIEVE</span>
              <br></br>
            </p>
            <h1 className="about-text21">OUR VISION</h1>
            <span className="about-text22">
              Applying the most updated technologies and methodologies in
              developing sustainable facilities through using our experience in
              designing, construction, developing, upgrading, and operating
              experiences
            </span>
          </div>
        </div>
      </div>
      <div className="about-mission">
        <div className="about-container24">
          <div className="about-container25">
            <p className="about-text23">A GLIMPSE OF TOMORROW</p>
            <h1 className="about-text24">OUR MISSION</h1>
            <span className="about-text25">
              To be one of the leading MEP Engineering houses in the MENA region
              that challenge climate change by providing Energy and Engineering
              services for MEP and Renewable energy projects
            </span>
          </div>
          <div className="about-container26">
            <img
              alt="image"
              src="/playground_assets/kyle-nieber-ldvz14861qe-unsplash-500w.jpg"
              className="about-image04"
            />
          </div>
        </div>
      </div>
      <div className="about-pricing">
        <div className="about-container27">
          <PricingCard descriptionArea="We support clients to achieve the best lifetime for their assets and equipment by proposing the optimum maintenance scenario and following up on the implementation of this scenario."></PricingCard>
          <PricingCard
            Title="Project&lt;br&gt;Management"
            descriptionArea="Providing the best scenario for managing MEP projects by optimizing the dilemma between Scope, time, quality, and budget. Using our experience in managing MEP projects and through our specialization in MEP systems."
          ></PricingCard>
          <PricingCard descriptionArea="Developing optimized Mechanical, Electrical, and Plumbing (MEP) designs as per client requirements. we design, select, and optimize best-fit MEP systems that facilitate operations and fulfill client requirements as per international standards with considering the best life cycle cost."></PricingCard>
        </div>
      </div>
      <div className="about-container28">
        <div className="about-main">
          <div className="about-container29">
            <h1 className="about-text26 HeadingOne">You Work With</h1>
            <h1 className="about-text27">Soft Design System</h1>
            <p className="about-text28 Lead">
              <span className="about-text29">
                The time is now for it be okay to be great. Subscribe now and
                get notified when it&apos;s launched!
              </span>
            </p>
            <div className="about-container30">
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
              className="about-image05"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className="about-image06"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-4-1000w.png"
              className="about-image07"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-1-1000w.png"
              className="about-image08"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className="about-image09"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-4-1000w.png"
              className="about-image10"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-1-1000w.png"
              className="about-image11"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-3-1000w.png"
              className="about-image12"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className="about-image13"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-4-1000w.png"
              className="about-image14"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-1-1000w.png"
              className="about-image15"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-3-1000w.png"
              className="about-image16"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-4-1000w.png"
              className="about-image17"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-1-1000w.png"
              className="about-image18"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-3-1000w.png"
              className="about-image19"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className="about-image20"
            />
          </div>
        </div>
      </div>
      <FooterGray></FooterGray>
    </div>
  )
}

export default About
