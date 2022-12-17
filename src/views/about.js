import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PricingCard from '../components/pricing-card'
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
              className="about-image1"
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
          className="about-image2"
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
              className="about-image3"
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
              className="about-image4"
            />
          </div>
        </div>
      </div>
      <div className="about-pricing">
        <div className="about-container27">
          <Link to="/project-management" className="about-navlink">
            <PricingCard
              Title="PROJECT MANAGEMENT"
              rootClassName="pricing-card-root-class-name"
              descriptionArea="We support clients to achieve the best lifetime for their assets and equipment by proposing the optimum maintenance scenario and following up on the implementation of this scenario."
              className="about-component1"
            ></PricingCard>
          </Link>
          <Link to="/project-management" className="about-navlink1">
            <PricingCard
              Title="MAINTENANCE MANAGEMENT"
              rootClassName="pricing-card-root-class-name1"
              descriptionArea="Providing the best scenario for managing MEP projects by optimizing the dilemma between Scope, time, quality, and budget. Using our experience in managing MEP projects and through our specialization in MEP systems."
              className="about-component2"
            ></PricingCard>
          </Link>
          <Link to="/project-management" className="about-navlink2">
            <PricingCard
              Title="ENERGY MANAGEMENT"
              rootClassName="pricing-card-root-class-name2"
              descriptionArea="Developing optimized Mechanical, Electrical, and Plumbing (MEP) designs as per client requirements. we design, select, and optimize best-fit MEP systems that facilitate operations and fulfill client requirements as per international standards with considering the best life cycle cost."
              className="about-component3"
            ></PricingCard>
          </Link>
        </div>
      </div>
      <div className="about-banner">
        <div className="about-container28">
          <svg viewBox="0 0 1090.8525714285713 1024" className="about-icon10">
            <path d="M1017.714 532c0-16-17.714-20-30.286-20h-621.714c-30.286 0-70.286 18.857-89.714 42.286l-168 207.429c-5.143 6.857-10.286 14.286-10.286 22.857 0 16 17.714 20 30.286 20h621.714c30.286 0 70.286-18.857 89.714-42.857l168-207.429c5.143-6.286 10.286-13.714 10.286-22.286zM365.714 438.857h438.857v-91.429c0-30.286-24.571-54.857-54.857-54.857h-329.143c-30.286 0-54.857-24.571-54.857-54.857v-36.571c0-30.286-24.571-54.857-54.857-54.857h-182.857c-30.286 0-54.857 24.571-54.857 54.857v487.429l146.286-180c33.143-40.571 94.286-69.714 146.286-69.714zM1090.857 532c0 25.143-10.857 49.143-26.286 68.571l-168.571 207.429c-32.571 40-94.857 69.714-146.286 69.714h-621.714c-70.286 0-128-57.714-128-128v-548.571c0-70.286 57.714-128 128-128h182.857c70.286 0 128 57.714 128 128v18.286h310.857c70.286 0 128 57.714 128 128v91.429h109.714c38.857 0 77.714 17.714 94.857 54.286 5.714 12 8.571 25.143 8.571 38.857z"></path>
          </svg>
        </div>
        <h1 className="about-text26">Our portfolio</h1>
        <span className="about-text27">
          <span>Well documented projects are waiting for you to explore.</span>
          <br></br>
          <span>Take a look at our portfolio from the button below.</span>
          <br></br>
        </span>
        <button className="about-button1 button">
          <span className="about-text32">Explore Projects</span>
          <svg viewBox="0 0 1024 1024" className="about-icon12">
            <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM341.333 554.667h238.336l-97.835 97.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l170.667-170.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-170.667-170.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l97.835 97.835h-238.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </button>
      </div>
      <div className="about-banner1">
        <h2 className="about-heading">We&apos;d love to hear form you..</h2>
        <h2 className="about-heading1">
          Whether you are an existing customer who needs help, a new customer
          who wishes to know more, or you&apos;re just curious about the
          features and wants to be up to date with our latest news and offers.
          you are a click away from what you need.
        </h2>
        <button className="about-button2 button">Get in touch</button>
      </div>
      <FooterGray></FooterGray>
    </div>
  )
}

export default About
