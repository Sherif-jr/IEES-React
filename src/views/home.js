import React from 'react'
import { Link } from 'react-router-dom'

import { Player } from '@lottiefiles/react-lottie-player'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryGreenButton from '../components/primary-green-button'
import OutlineGrayButton from '../components/outline-gray-button'
import IconListItemLight from '../components/icon-list-item-light'
import OutlineBlackButton from '../components/outline-black-button'
import PartnerCarousel from '../components/partner-carousel'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>IEES</title>
        <meta property="og:title" content="IEES" />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div className="home-container01">
          <div className="home-card">
            <h1 className="home-text">CHILL, MANAGE, SAVE</h1>
            <h1 className="home-text01 HeadingOne">Choose the best</h1>
            <span className="home-text02">
              Start now with our all-in-one solution for construction projects
              and MEP services or you can pick the service you need and enjoy a
              headache-free, discipline and professional workflow for your
              project.
            </span>
            <div className="home-container02">
              <div className="home-container03">
                <Link to="/contact-us" className="home-navlink">
                  <PrimaryGreenButton
                    button="contact us"
                    rootClassName="primary-green-button-root-class-name"
                    className="home-component01"
                  ></PrimaryGreenButton>
                </Link>
              </div>
              <a href="#services" className="home-link">
                <OutlineGrayButton
                  button="read more"
                  className="home-component02"
                ></OutlineGrayButton>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/editedasset%201.svg"
        loading="eager"
        className="home-image"
      />
      <div id="services" className="home-services">
        <h2 className="home-text03 HeadingOne animate-gradient">
          <span>SERVICES</span>
          <br></br>
        </h2>
        <span className="home-text06">
          Whether you are a project owner, a contractor, or a consultant. You
          can rely on one or more of our services. An engineering back office,
          project manager, or a maintenance manager. we deliver the best in
          market solutions.
        </span>
        <div className="home-services-cards">
          <div className="home-container04">
            <div className="home-services-card">
              <div className="home-container05">
                <Player
                  src="https://res.cloudinary.com/dhdonsil5/raw/upload/v1671147966/IEES/Project_u2gzea.json"
                  loop
                  hover
                  speed="1"
                  autoplay
                  background="transparent"
                  className="home-lottie-node"
                ></Player>
              </div>
              <h3 className="home-text07">
                <span>Project </span>
                <span>Management</span>
              </h3>
              <p className="home-text10">
                We support clients to achieve the best lifetime for their assets
                and equipment by proposing the optimum maintenance scenario and
                following up on the implementation of this scenario.
              </p>
              <div className="home-container06">
                <Link to="/project-management" className="home-navlink01">
                  <OutlineGrayButton
                    button="read more"
                    rootClassName="outline-gray-button-root-class-name"
                    className="home-component03"
                  ></OutlineGrayButton>
                </Link>
              </div>
            </div>
          </div>
          <div className="home-container07">
            <div className="home-services-card home-card2">
              <div className="home-container08">
                <Player
                  src="https://res.cloudinary.com/dhdonsil5/raw/upload/v1671147976/IEES/maintenance_w7givi.json"
                  loop
                  hover
                  speed="1"
                  autoplay
                  background="transparent"
                  className="home-lottie-node1"
                ></Player>
              </div>
              <h3 className="home-text11">
                <span>Maintenance </span>
                <span>Management</span>
                <br></br>
              </h3>
              <p className="home-text15">
                Providing the best scenario for managing MEP projects by
                optimizing the dilemma between Scope, time, quality, and budget.
                Using our experience in managing MEP projects and through our
                specialization in MEP systems.
              </p>
              <div className="home-container09">
                <Link to="/maintenance-management" className="home-navlink02">
                  <OutlineGrayButton
                    button="read more"
                    rootClassName="outline-gray-button-root-class-name1"
                    className="home-component04"
                  ></OutlineGrayButton>
                </Link>
              </div>
            </div>
          </div>
          <div className="home-container10">
            <div className="home-services-card home-card3">
              <div className="home-container11">
                <Player
                  src="https://res.cloudinary.com/dhdonsil5/raw/upload/v1671147982/IEES/Design_cxwgtw.json"
                  loop
                  hover
                  speed="1"
                  autoplay
                  background="transparent"
                  className="home-lottie-node2"
                ></Player>
              </div>
              <h3 className="home-text16">
                <span>Design </span>
                <span>Services</span>
                <br></br>
              </h3>
              <p className="home-text20">
                Developing optimized Mechanical, Electrical, and Plumbing (MEP)
                designs as per client requirements. we design, select, and
                optimize best-fit MEP systems that facilitate operations and
                fulfill client requirements as per international standards with
                considering the best life cycle cost.
              </p>
              <div className="home-container12">
                <Link to="/energy-management" className="home-navlink03">
                  <OutlineGrayButton
                    button="read more"
                    rootClassName="outline-gray-button-root-class-name2"
                    className="home-component05"
                  ></OutlineGrayButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="home-energy">
        <div className="home-container13">
          <div className="home-container14">
            <div className="home-container15">
              <p className="home-text21">The Added Unique Feature</p>
              <h2 className="home-text22 HeadingOne">ENERGY MANAGEMENT</h2>
              <p className="home-text23">
                supports clients in achieving energy targets that may be
                achieved by well-trained staff and feasible studied recommended
                projects using the most updated and calibrated devices and by
                auditing energy consumptions.​
              </p>
              <IconListItemLight
                text="Money Saving"
                rootClassName="icon-list-item-light-root-class-name"
              ></IconListItemLight>
              <IconListItemLight
                text="Energy Efficiency and Security"
                rootClassName="icon-list-item-light-root-class-name1"
              ></IconListItemLight>
              <IconListItemLight
                text="End-user training on efficient operating methodologies"
                rootClassName="icon-list-item-light-root-class-name2"
              ></IconListItemLight>
              <div className="home-container16">
                <div className="home-container17">
                  <Link to="/energy-management" className="home-navlink04">
                    read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className="home-bottom-wave-image"
        />
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="home-image1"
        />
        <img
          alt="image"
          src="/playground_assets/top.svg"
          className="home-top-wave-image"
        />
      </section>
      <div className="home-projects">
        <h2 className="home-text24 HeadingOne animate-gradient">
          <span>PROJECTS</span>
          <br></br>
        </h2>
        <span className="home-text27">
          <span className="home-text28">
            Successful cases we&apos;ve done documented with details and
            photographs. You can contact us for more details if you want.
          </span>
          <br></br>
        </span>
        <div className="home-project-cards">
          <div className="home-container18">
            <div className="home-container19"></div>
            <div className="home-container20">
              <h3 className="home-text30">Universities of Canada</h3>
              <ul className="list list-with-bullets">
                <li className="list-item">
                  <span className="home-text31">Building “C” MEP Systems</span>
                </li>
                <li className="list-item">
                  <span>Main Electrical Network</span>
                </li>
              </ul>
              <Link to="/projects" className="home-navlink05">
                <OutlineBlackButton
                  button="Explore"
                  className="home-component09"
                ></OutlineBlackButton>
              </Link>
            </div>
          </div>
          <div className="home-container21">
            <div className="home-container22"></div>
            <div className="home-container23">
              <p className="home-text33">EGYGAB for Education Development</p>
              <h3 className="home-text34">
                Egyptian Language School, Shorouk Project
              </h3>
              <ul className="list list-with-bullets">
                <li className="list-item">
                  <span className="home-text35">
                    <span className="home-text36">MEP design</span>
                    <br></br>
                  </span>
                </li>
                <li className="list-item">
                  <span>Project Management</span>
                </li>
              </ul>
              <Link to="/projects" className="home-navlink06">
                <OutlineBlackButton
                  button="Explore"
                  className="home-component10"
                ></OutlineBlackButton>
              </Link>
            </div>
          </div>
          <div className="home-container24">
            <div className="home-container25"></div>
            <div className="home-container26">
              <p className="home-text39">
                Katameya Company for developing Education
              </p>
              <h3 className="home-text40">
                Egyptian Language School New Cairo
              </h3>
              <ul className="list list-with-bullets">
                <li className="list-item">
                  <span className="home-text41">Maintenance Management</span>
                </li>
                <li className="list-item">
                  <span>Maintenance Supervision</span>
                </li>
              </ul>
              <Link to="/projects" className="home-navlink07">
                <OutlineBlackButton
                  button="Explore"
                  className="home-component11"
                ></OutlineBlackButton>
              </Link>
            </div>
          </div>
          <div className="home-container27">
            <div className="home-container28"></div>
            <div className="home-container29">
              <p className="home-text43">
                6th October Company for developing Education
              </p>
              <h3 className="home-text44">
                Egyptian Language School 6th October
              </h3>
              <ul className="list list-with-bullets">
                <li className="list-item">
                  <span className="home-text45">
                    <span className="home-text46">Maintenance Management</span>
                    <br></br>
                  </span>
                </li>
                <li className="list-item">
                  <span>Maintenance Supervision</span>
                </li>
              </ul>
              <Link to="/projects" className="home-navlink08">
                <OutlineBlackButton
                  button="Explore"
                  className="home-component12"
                ></OutlineBlackButton>
              </Link>
            </div>
          </div>
          <div className="home-container30">
            <div className="home-container31"></div>
            <div className="home-container32">
              <p className="home-text49">
                <span>Alexandria Company for developing Education</span>
                <br></br>
              </p>
              <h3 className="home-text52">
                Egyptian Language School Alexandria
              </h3>
              <ul className="list list-with-bullets">
                <li className="list-item">
                  <span className="home-text53">
                    <span className="home-text54">Maintenance Management</span>
                    <br></br>
                  </span>
                </li>
                <li className="list-item">
                  <span>Maintenance Supervision</span>
                </li>
              </ul>
              <Link to="/projects" className="home-navlink09">
                <OutlineBlackButton
                  button="Explore"
                  className="home-component13"
                ></OutlineBlackButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="home-contact-us">
        <div className="home-container33">
          <div className="home-container34">
            <div className="home-container35">
              <p className="home-text57">Bargain Price, Premium Services</p>
              <h3 className="home-text58">
                <span className="home-text59">Our mission is </span>
                <span>your comfort</span>
                <br></br>
              </h3>
              <p className="home-text62">
                <span>
                  Our specialized team of engineers and employees can make your
                  dreams a reality. With our premium set of services, you will
                  no longer need to worry about a thing. Everything will go the
                  way you planned.
                </span>
                <br></br>
                <span>
                  No more inefficient projects, time delays, boring meetings, or
                  overwhelming details.
                </span>
                <br></br>
                <span>Relax and leave all the hard work to us.</span>
              </p>
              <div className="home-container36">
                <Link to="/contact-us" className="home-navlink10">
                  <OutlineBlackButton
                    button="Contact Us"
                    rootClassName="outline-black-button-root-class-name"
                    className="home-component14"
                  ></OutlineBlackButton>
                </Link>
              </div>
            </div>
          </div>
          <div className="home-container37">
            <img
              alt="image"
              src="/playground_assets/servicesasset-1-1024x805-600w.png"
              className="home-image2"
            />
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className="home-bottom-wave-image1"
        />
        <img
          alt="image"
          src="/playground_assets/asset%201-1500w.png"
          className="home-image3"
        />
        <img
          alt="image"
          src="/playground_assets/top.svg"
          className="home-top-wave-image1"
        />
      </section>
      <section className="home-partners">
        <div className="home-container38">
          <h2 className="home-text68 animate-gradient">
            <span>Partners</span>
            <br></br>
          </h2>
          <span className="home-text71">
            <span className="home-text72">of success</span>
            <br></br>
          </span>
        </div>
        <div className="home-container39">
          <PartnerCarousel rootClassName="partner-carousel-root-class-name"></PartnerCarousel>
        </div>
      </section>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Home
