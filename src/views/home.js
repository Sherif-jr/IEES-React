import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryGreenButton from '../components/primary-green-button'
import OutlineGrayButton from '../components/outline-gray-button'
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
            <h1 className="home-text HeadingOne">CHILL, MANAGE, SAVE</h1>
            <h1 className="home-text01 HeadingOne">Choose the best</h1>
            <span className="home-text02 Lead">
              <span>
                Find the story of Creative Tim&apos;s most complex design
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                system and all the work that make this design available.
              </span>
            </span>
            <div className="home-container02">
              <div className="home-container03">
                <PrimaryGreenButton
                  button="contact us"
                  rootClassName="primary-green-button-root-class-name"
                ></PrimaryGreenButton>
              </div>
              <OutlineGrayButton button="read more"></OutlineGrayButton>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/editedasset%201.svg"
        loading="lazy"
        className="home-image"
      />
      <div className="home-services">
        <h2 className="home-text05 HeadingOne">
          <span>SERVICES</span>
          <br></br>
        </h2>
        <span className="home-text08">
          Whether you are a project owner, a contractor, or a consultant. You
          can rely on one or more of our services. An engineering back office,
          project manager, or a maintenance manager. we deliver the best in
          market one solution.
        </span>
        <div className="home-services-cards">
          <div className="home-container04">
            <div className="home-card1">
              <Player
                src="https://presentation-website-assets.teleporthq.io/features/lottie.json"
                speed="1"
                background="transparent"
                className="home-lottie-node"
              ></Player>
              <h3 className="home-text09">
                <span>Project</span>
                <br></br>
                <span>Management</span>
              </h3>
              <p className="home-text13 Small">
                <span>
                  Find the story of Creative Tim&apos;s most complex design
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  system and all the work that make this design available.
                </span>
              </p>
              <div className="home-container05">
                <OutlineGrayButton
                  button="read more"
                  rootClassName="outline-gray-button-root-class-name"
                ></OutlineGrayButton>
              </div>
            </div>
          </div>
          <div className="home-container06">
            <div className="home-card2">
              <Player
                src="https://presentation-website-assets.teleporthq.io/features/lottie.json"
                speed="1"
                autoplay
                background="transparent"
                className="home-lottie-node1"
              ></Player>
              <h3 className="home-text16">
                <span>Maintenance</span>
                <br></br>
                <span>Management</span>
                <br></br>
              </h3>
              <p className="home-text21 Small">
                <span>
                  Find the story of Creative Tim&apos;s most complex design
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  system and all the work that make this design available.
                </span>
              </p>
              <div className="home-container07">
                <OutlineGrayButton
                  button="read more"
                  rootClassName="outline-gray-button-root-class-name1"
                ></OutlineGrayButton>
              </div>
            </div>
          </div>
          <div className="home-container08">
            <div className="home-card3">
              <Player
                src="https://presentation-website-assets.teleporthq.io/features/lottie.json"
                speed="1"
                autoplay
                background="transparent"
                className="home-lottie-node2"
              ></Player>
              <h3 className="home-text24">
                <span>Design</span>
                <br></br>
                <span>Services</span>
                <br></br>
              </h3>
              <p className="home-text29 Small">
                <span>
                  Find the story of Creative Tim&apos;s most complex design
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  system and all the work that make this design available.
                </span>
              </p>
              <div className="home-container09">
                <OutlineGrayButton
                  button="read more"
                  rootClassName="outline-gray-button-root-class-name2"
                ></OutlineGrayButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="home-energy">
        <div className="home-container10">
          <div className="home-container11">
            <div className="home-container12">
              <p className="home-text32">The Added Unique Feature</p>
              <h2 className="home-text33 HeadingOne">ENERGY MANAGEMENT</h2>
              <p className="home-text34 Body">
                &quot;Take up one idea. Make that one idea your life - think of
                it, dream of it, live on that idea. Let the brain, muscles,
                nerves, every part of your body, be full of that idea, and just
                leave every other idea alone. This is the way to success. A
                single rose can be my garden... a single friend, my world.&quot;
              </p>
              <div className="home-container13">
                <OutlineGrayButton
                  button="read more"
                  rootClassName="outline-gray-button-root-class-name7"
                ></OutlineGrayButton>
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
        <h2 className="home-text35 HeadingOne">
          <span>PROJECTS</span>
          <br></br>
        </h2>
        <span className="home-text38">
          <span className="home-text39">
            Successful cases we&apos;ve done documented with details and
            photographs. You can contact us for more details if you want.
          </span>
          <br></br>
        </span>
        <div className="home-project-cards">
          <div className="home-container14">
            <div className="home-container15"></div>
            <div className="home-container16">
              <h3 className="home-text41">Universities of Canada</h3>
              <ul className="list list-with-bullets">
                <li className="list-item">
                  <span className="home-text42">Building “C” MEP Systems</span>
                </li>
                <li className="list-item">
                  <span>Main Electrical Network</span>
                </li>
              </ul>
              <OutlineBlackButton button="Explore"></OutlineBlackButton>
            </div>
          </div>
          <div className="home-container17">
            <div className="home-container18"></div>
            <div className="home-container19">
              <p className="home-text44">EGYGAB for Education Development</p>
              <h3 className="home-text45">
                Egyptian Language School, Shorouk Project
              </h3>
              <ul className="list list-with-bullets">
                <li className="list-item">
                  <span className="home-text46">
                    <span className="home-text47">MEP design</span>
                    <br></br>
                  </span>
                </li>
                <li className="list-item">
                  <span>Project Management</span>
                </li>
              </ul>
              <OutlineBlackButton button="Explore"></OutlineBlackButton>
            </div>
          </div>
          <div className="home-container20">
            <div className="home-container21"></div>
            <div className="home-container22">
              <p className="home-text50">
                Katameya Company for developing Education
              </p>
              <h3 className="home-text51">
                Egyptian Language School New Cairo
              </h3>
              <ul className="list list-with-bullets">
                <li className="list-item">
                  <span className="home-text52">Maintenance Management</span>
                </li>
                <li className="list-item">
                  <span>Maintenance Supervision</span>
                </li>
              </ul>
              <OutlineBlackButton button="Explore"></OutlineBlackButton>
            </div>
          </div>
          <div className="home-container23">
            <div className="home-container24"></div>
            <div className="home-container25">
              <p className="home-text54">
                6th October Company for developing Education
              </p>
              <h3 className="home-text55">
                Egyptian Language School 6th October
              </h3>
              <ul className="list list-with-bullets">
                <li className="list-item">
                  <span className="home-text56">
                    <span className="home-text57">Maintenance Management</span>
                    <br></br>
                  </span>
                </li>
                <li className="list-item">
                  <span>Maintenance Supervision</span>
                </li>
              </ul>
              <OutlineBlackButton button="Explore"></OutlineBlackButton>
            </div>
          </div>
          <div className="home-container26">
            <div className="home-container27"></div>
            <div className="home-container28">
              <p className="home-text60">
                <span>Alexandria Company for developing Education</span>
                <br></br>
              </p>
              <h3 className="home-text63">
                Egyptian Language School Alexandria
              </h3>
              <ul className="list list-with-bullets">
                <li className="list-item">
                  <span className="home-text64">
                    <span className="home-text65">Maintenance Management</span>
                    <br></br>
                  </span>
                </li>
                <li className="list-item">
                  <span>Maintenance Supervision</span>
                </li>
              </ul>
              <OutlineBlackButton button="Explore"></OutlineBlackButton>
            </div>
          </div>
        </div>
      </div>
      <section className="home-contact-us">
        <div className="home-container29">
          <div className="home-container30">
            <div className="home-container31">
              <p className="home-text68">Bargain Price, Premium Services</p>
              <h3 className="home-text69">
                <span className="home-text70">Our mission is</span>
                <br></br>
                <span>your comfort</span>
                <br></br>
              </h3>
              <p className="home-text74">
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
              <div className="home-container32">
                <OutlineBlackButton
                  button="Contact Us"
                  rootClassName="outline-black-button-root-class-name"
                ></OutlineBlackButton>
              </div>
            </div>
          </div>
          <div className="home-container33">
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
        <div className="home-container34">
          <h2 className="home-text80">
            <span>Partners</span>
            <br></br>
          </h2>
          <span className="home-text83">
            <span className="home-text84">of success</span>
            <br></br>
          </span>
        </div>
        <div className="home-container35">
          <PartnerCarousel rootClassName="partner-carousel-root-class-name"></PartnerCarousel>
          <div>
            <DangerousHTML
              html={`<script>
    function App() {
  const images = [
    {
      src:
        "https://via.placeholder.com/300"
    },
    {
      src:
        "https://via.placeholder.com/300"
    },
    {
      src:
        "https://via.placeholder.com/300"
    }
  ];
  return (
    <Carousel>
      {images.map((image, index) => (
        <div
          key={index}
          className="demo-item"
          style={{ backgroundImage: "url(" + image.src + ")" }}
        />
      ))}
    </Carousel>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

</script>`}
            ></DangerousHTML>
          </div>
        </div>
      </section>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Home
