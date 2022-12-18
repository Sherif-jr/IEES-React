<template>
  <div class="home-container">
    <app-header></app-header>
    <div class="home-hero">
      <div class="home-container01">
        <div class="home-card">
          <h1 class="home-text">CHILL, MANAGE, SAVE</h1>
          <h1 class="home-text01 HeadingOne">Choose the best</h1>
          <span class="home-text02">
            Start now with our all-in-one solution for construction projects and
            MEP services or you can pick the service you need and enjoy a
            headache-free, discipline and professional workflow for your project.
          </span>
          <div class="home-container02">
            <div class="home-container03">
              <router-link to="/contact-us" class="home-navlink">
                <primary-green-button
                  button="contact us"
                  rootClassName="primary-green-button-root-class-name"
                  class="home-component01"
                ></primary-green-button>
              </router-link>
            </div>
            <a href="#services" class="home-link">
              <outline-gray-button
                button="read more"
                class="home-component02"
              ></outline-gray-button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <img
      alt="image"
      src="/playground_assets/editedasset%201.svg"
      loading="eager"
      class="home-image"
    />
    <div id="services" class="home-services">
      <h2 class="home-text03 HeadingOne animate-gradient">
        <span>SERVICES</span>
        <br />
      </h2>
      <span class="home-text06">
        Whether you are a project owner, a contractor, or a consultant. You can
        rely on one or more of our services. An engineering back office, project
        manager, or a maintenance manager. we deliver the best in market
        solutions.
      </span>
      <div class="home-services-cards">
        <div class="home-container04">
          <div class="home-services-card">
            <div class="home-container05">
              <lottie-vue-player
                :src="`https://res.cloudinary.com/dhdonsil5/raw/upload/v1671147966/IEES/Project_u2gzea.json`"
                :loop="true"
                :hover="true"
                :speed="1"
                :autoplay="true"
                :backgroundColor="transparent"
                class="home-lottie-node"
              ></lottie-vue-player>
            </div>
            <h3 class="home-text07">
              <span>Project </span>
              <span>Management</span>
            </h3>
            <p class="home-text10">
              We support clients to achieve the best lifetime for their assets and
              equipment by proposing the optimum maintenance scenario and
              following up on the implementation of this scenario.
            </p>
            <div class="home-container06">
              <router-link to="/project-management" class="home-navlink01">
                <outline-gray-button
                  button="read more"
                  rootClassName="outline-gray-button-root-class-name"
                  class="home-component03"
                ></outline-gray-button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="home-container07">
          <div class="home-services-card home-card2">
            <div class="home-container08">
              <lottie-vue-player
                :src="`https://res.cloudinary.com/dhdonsil5/raw/upload/v1671147976/IEES/maintenance_w7givi.json`"
                :loop="true"
                :hover="true"
                :speed="1"
                :autoplay="true"
                :backgroundColor="transparent"
                class="home-lottie-node1"
              ></lottie-vue-player>
            </div>
            <h3 class="home-text11">
              <span>Maintenance </span>
              <span>Management</span>
              <br />
            </h3>
            <p class="home-text15">
              Providing the best scenario for managing MEP projects by optimizing
              the dilemma between Scope, time, quality, and budget. Using our
              experience in managing MEP projects and through our specialization
              in MEP systems.
            </p>
            <div class="home-container09">
              <router-link to="/maintenance-management" class="home-navlink02">
                <outline-gray-button
                  button="read more"
                  rootClassName="outline-gray-button-root-class-name1"
                  class="home-component04"
                ></outline-gray-button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="home-container10">
          <div class="home-services-card home-card3">
            <div class="home-container11">
              <lottie-vue-player
                :src="`https://res.cloudinary.com/dhdonsil5/raw/upload/v1671147982/IEES/Design_cxwgtw.json`"
                :loop="true"
                :hover="true"
                :speed="1"
                :autoplay="true"
                :backgroundColor="transparent"
                class="home-lottie-node2"
              ></lottie-vue-player>
            </div>
            <h3 class="home-text16">
              <span>Design </span>
              <span>Services</span>
              <br />
            </h3>
            <p class="home-text20">
              Developing optimized Mechanical, Electrical, and Plumbing (MEP)
              designs as per client requirements. we design, select, and optimize
              best-fit MEP systems that facilitate operations and fulfill client
              requirements as per international standards with considering the
              best life cycle cost.
            </p>
            <div class="home-container12">
              <router-link to="/energy-management" class="home-navlink03">
                <outline-gray-button
                  button="read more"
                  rootClassName="outline-gray-button-root-class-name2"
                  class="home-component05"
                ></outline-gray-button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="home-energy">
      <div class="home-container13">
        <div class="home-container14">
          <div class="home-container15">
            <p class="home-text21">The Added Unique Feature</p>
            <h2 class="home-text22 HeadingOne">ENERGY MANAGEMENT</h2>
            <p class="home-text23">
              supports clients in achieving energy targets that may be achieved by
              well-trained staff and feasible studied recommended projects using
              the most updated and calibrated devices and by auditing energy
              consumptions.​
            </p>
            <icon-list-item-light
              text="Money Saving"
              rootClassName="icon-list-item-light-root-class-name"
            ></icon-list-item-light>
            <icon-list-item-light
              text="Energy Efficiency and Security"
              rootClassName="icon-list-item-light-root-class-name1"
            ></icon-list-item-light>
            <icon-list-item-light
              text="End-user training on efficient operating methodologies"
              rootClassName="icon-list-item-light-root-class-name2"
            ></icon-list-item-light>
            <div class="home-container16">
              <div class="home-container17">
                <router-link to="/energy-management" class="home-navlink04">
                  read more
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/bottom.svg"
        class="home-bottom-wave-image"
      />
      <img
        alt="image"
        src="/playground_assets/waves-white.svg"
        class="home-image1"
      />
      <img
        alt="image"
        src="/playground_assets/top.svg"
        class="home-top-wave-image"
      />
    </section>
    <div class="home-projects">
      <h2 class="home-text24 HeadingOne animate-gradient">
        <span>PROJECTS</span>
        <br />
      </h2>
      <span class="home-text27">
        <span class="home-text28">
          Successful cases we&apos;ve done documented with details and
          photographs. You can contact us for more details if you want.
        </span>
        <br />
      </span>
      <div class="home-project-cards">
        <div class="home-container18">
          <div class="home-container19"></div>
          <div class="home-container20">
            <h3 class="home-text30">Universities of Canada</h3>
            <ul class="list list-with-bullets">
              <li class="list-item">
                <span class="home-text31">Building “C” MEP Systems</span>
              </li>
              <li class="list-item"><span>Main Electrical Network</span></li>
            </ul>
            <router-link to="/projects" class="home-navlink05">
              <outline-black-button
                button="Explore"
                class="home-component09"
              ></outline-black-button>
            </router-link>
          </div>
        </div>
        <div class="home-container21">
          <div class="home-container22"></div>
          <div class="home-container23">
            <p class="home-text33">EGYGAB for Education Development</p>
            <h3 class="home-text34">Egyptian Language School, Shorouk Project</h3>
            <ul class="list list-with-bullets">
              <li class="list-item">
                <span class="home-text35">
                  <span class="home-text36">MEP design</span>
                  <br />
                </span>
              </li>
              <li class="list-item"><span>Project Management</span></li>
            </ul>
            <router-link to="/projects" class="home-navlink06">
              <outline-black-button
                button="Explore"
                class="home-component10"
              ></outline-black-button>
            </router-link>
          </div>
        </div>
        <div class="home-container24">
          <div class="home-container25"></div>
          <div class="home-container26">
            <p class="home-text39">Katameya Company for developing Education</p>
            <h3 class="home-text40">Egyptian Language School New Cairo</h3>
            <ul class="list list-with-bullets">
              <li class="list-item">
                <span class="home-text41">Maintenance Management</span>
              </li>
              <li class="list-item"><span>Maintenance Supervision</span></li>
            </ul>
            <router-link to="/projects" class="home-navlink07">
              <outline-black-button
                button="Explore"
                class="home-component11"
              ></outline-black-button>
            </router-link>
          </div>
        </div>
        <div class="home-container27">
          <div class="home-container28"></div>
          <div class="home-container29">
            <p class="home-text43">
              6th October Company for developing Education
            </p>
            <h3 class="home-text44">Egyptian Language School 6th October</h3>
            <ul class="list list-with-bullets">
              <li class="list-item">
                <span class="home-text45">
                  <span class="home-text46">Maintenance Management</span>
                  <br />
                </span>
              </li>
              <li class="list-item"><span>Maintenance Supervision</span></li>
            </ul>
            <router-link to="/projects" class="home-navlink08">
              <outline-black-button
                button="Explore"
                class="home-component12"
              ></outline-black-button>
            </router-link>
          </div>
        </div>
        <div class="home-container30">
          <div class="home-container31"></div>
          <div class="home-container32">
            <p class="home-text49">
              <span>Alexandria Company for developing Education</span>
              <br />
            </p>
            <h3 class="home-text52">Egyptian Language School Alexandria</h3>
            <ul class="list list-with-bullets">
              <li class="list-item">
                <span class="home-text53">
                  <span class="home-text54">Maintenance Management</span>
                  <br />
                </span>
              </li>
              <li class="list-item"><span>Maintenance Supervision</span></li>
            </ul>
            <router-link to="/projects" class="home-navlink09">
              <outline-black-button
                button="Explore"
                class="home-component13"
              ></outline-black-button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <section class="home-contact-us">
      <div class="home-container33">
        <div class="home-container34">
          <div class="home-container35">
            <p class="home-text57">Bargain Price, Premium Services</p>
            <h3 class="home-text58">
              <span class="home-text59">Our mission is </span>
              <span>your comfort</span>
              <br />
            </h3>
            <p class="home-text62">
              <span>
                Our specialized team of engineers and employees can make your
                dreams a reality. With our premium set of services, you will no
                longer need to worry about a thing. Everything will go the way you
                planned.
              </span>
              <br />
              <span>
                No more inefficient projects, time delays, boring meetings, or
                overwhelming details.
              </span>
              <br />
              <span>Relax and leave all the hard work to us.</span>
            </p>
            <div class="home-container36">
              <router-link to="/contact-us" class="home-navlink10">
                <outline-black-button
                  button="Contact Us"
                  rootClassName="outline-black-button-root-class-name"
                  class="home-component14"
                ></outline-black-button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="home-container37">
          <img
            alt="image"
            src="/playground_assets/servicesasset-1-1024x805-600w.png"
            class="home-image2"
          />
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/bottom.svg"
        class="home-bottom-wave-image1"
      />
      <img
        alt="image"
        src="/playground_assets/asset%201-1500w.png"
        class="home-image3"
      />
      <img
        alt="image"
        src="/playground_assets/top.svg"
        class="home-top-wave-image1"
      />
    </section>
    <section class="home-partners">
      <div class="home-container38">
        <h2 class="home-text68 animate-gradient">
          <span>Partners</span>
          <br />
        </h2>
        <span class="home-text71">
          <span class="home-text72">of success</span>
          <br />
        </span>
      </div>
      <div class="home-container39">
        <partner-carousel
          rootClassName="partner-carousel-root-class-name"
        ></partner-carousel>
      </div>
    </section>
    <app-footer rootClassName="footer-root-class-name"></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import PrimaryGreenButton from '../components/primary-green-button'
import OutlineGrayButton from '../components/outline-gray-button'
import IconListItemLight from '../components/icon-list-item-light'
import OutlineBlackButton from '../components/outline-black-button'
import PartnerCarousel from '../components/partner-carousel'
import AppFooter from '../components/footer'

export default {
  name: 'Home',
  components: {
    AppHeader,
    PrimaryGreenButton,
    OutlineGrayButton,
    IconListItemLight,
    OutlineBlackButton,
    PartnerCarousel,
    AppFooter,
  },
  metaInfo: {
    title: 'IEES',
    meta: [
      {
        property: 'og:title',
        content: 'IEES',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  height: auto;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.home-hero {
  width: 100%;
  height: 100vh;
  display: flex;
  max-width: 1320px;
  align-items: center;
  padding-left: var(--dl-space-space-unitandahalfunit);
  padding-right: var(--dl-space-space-unitandahalfunit);
  flex-direction: column;
}
.home-container01 {
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  max-width: 1320px;
  min-height: 85vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.home-card {
  flex: 0 0 auto;
  width: 60%;
  display: flex;
  padding: var(--dl-space-space-tripleunit);
  z-index: 1;
  box-shadow: 0 8px 26px -4px hsla(0,0%,8%,.15),0 8px 9px -5px hsla(0,0%,8%,.06)!important;
  margin-top: var(--dl-space-space-tripleunit);
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius1);
  flex-direction: column;
  backdrop-filter: saturate(200%) blur(30px);
  background-color: hsla(0,0%,100%,.8);
}
.home-text {
  font-size: 2.25rem;
  text-align: center;
  font-family: Open Sans;
  font-weight: 700;
  line-height: 1.3;
  text-transform: none;
  text-decoration: none;
  background-image: linear-gradient(310deg,#005d63,#82bb27);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.home-text01 {
  color: var(--dl-color-secondary-700);
  text-align: center;
  margin-bottom: var(--dl-space-space-unitandahalfunit);
}
.home-text02 {
  color: var(--dl-color-secondary-600);
  margin-right: var(--dl-space-space-tripleunit);
  margin-bottom: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-tripleunit);
}
.home-container02 {
  display: flex;
  min-width: 300px;
  align-self: flex-start;
  margin-top: var(--dl-space-space-unitandahalfunit);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
  justify-content: space-between;
}
.home-container03 {
  display: flex;
  align-items: flex-start;
  margin-right: var(--dl-space-space-unit);
  flex-direction: row;
}
.home-navlink {
  display: contents;
}
.home-component01 {
  text-decoration: none;
}
.home-link {
  display: contents;
}
.home-component02 {
  text-decoration: none;
}
.home-image {
  top: 40px;
  right: 0px;
  width: 60%;
  bottom: 0px;
  height: 85vh;
  position: absolute;
  object-fit: cover;
  object-position: center;
  border-bottom-left-radius: 10rem;
}
.home-services {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-text03 {
  margin-bottom: var(--dl-space-space-halfunit);
  background-image: linear-gradient(310deg, #005d63, #82bb27);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.home-text06 {
  max-width: 600px;
  text-align: center;
  margin-bottom: var(--dl-space-space-halfunit);
}
.home-services-cards {
  gap: 4%;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-tripleunit);
  flex-wrap: wrap;
  max-width: 1200;
  margin-top: var(--dl-space-space-tripleunit);
  min-height: auto;
  align-items: center;
  justify-content: space-around;
}
.home-container04 {
  flex: 0 0 auto;
  width: 30%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-container05 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-lottie-node {
  width: 150px;
  height: 150px;
}
.home-text07 {
  width: 100%;
  font-size: 1.2rem;
  text-align: center;
  text-transform: uppercase;
  background-image: linear-gradient(310deg, rgb(0, 93, 99), rgb(130, 187, 39));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.home-text10 {
  color: var(--dl-color-secondary-600);
  font-size: 0.8rem;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: justify;
  font-weight: 300;
  margin-right: 0px;
  margin-bottom: var(--dl-space-space-unit);
  padding-right: 0px;
}
.home-container06 {
  width: 100%;
  display: flex;
  margin-top: var(--dl-space-space-unitandahalfunit);
  align-items: center;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
  justify-content: center;
}
.home-navlink01 {
  display: contents;
}
.home-component03 {
  text-decoration: none;
}
.home-container07 {
  flex: 0 0 auto;
  width: 30%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-card2:hover {
  transform: translateY(7px);
}
.home-container08 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-lottie-node1 {
  width: 150px;
  height: 150px;
}
.home-text11 {
  width: 100%;
  font-size: 1.1em;
  text-align: center;
  text-transform: uppercase;
  background-image: linear-gradient(310deg, rgb(0, 93, 99), rgb(130, 187, 39));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.home-text15 {
  color: var(--dl-color-secondary-600);
  font-size: 0.8rem;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: justify;
  font-weight: 300;
  margin-right: 0px;
  margin-bottom: var(--dl-space-space-unit);
  padding-right: 0px;
}
.home-container09 {
  width: 100%;
  display: flex;
  align-self: flex-end;
  margin-top: var(--dl-space-space-unitandahalfunit);
  align-items: center;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
  justify-content: center;
}
.home-navlink02 {
  display: contents;
}
.home-component04 {
  text-decoration: none;
}
.home-container10 {
  flex: 0 0 auto;
  width: 30%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-card3:hover {
  transform: translateY(7px);
}
.home-container11 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-lottie-node2 {
  width: 150px;
  height: 150px;
}
.home-text16 {
  width: 100%;
  font-size: 1.2em;
  text-align: center;
  text-transform: uppercase;
  background-image: linear-gradient(310deg, rgb(0, 93, 99), rgb(130, 187, 39));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.home-text20 {
  color: var(--dl-color-secondary-600);
  font-size: 0.7rem;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: justify;
  font-weight: 300;
  margin-right: 0px;
  margin-bottom: var(--dl-space-space-unit);
  padding-right: 0px;
}
.home-container12 {
  width: 100%;
  display: flex;
  align-self: flex-end;
  margin-top: var(--dl-space-space-unitandahalfunit);
  align-items: center;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
  justify-content: center;
}
.home-navlink03 {
  display: contents;
}
.home-component05 {
  text-decoration: none;
}
.home-energy {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(310deg,#005d63,#82bb27);
}
.home-container13 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  z-index: 1;
  max-width: 1320px;
  align-items: flex-start;
  padding-top: 15rem;
  padding-left: var(--dl-space-space-tripleunit);
  padding-right: var(--dl-space-space-tripleunit);
  flex-direction: row;
  padding-bottom: 15rem;
  justify-content: space-between;
}
.home-container14 {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.home-container15 {
  display: flex;
  max-width: 600px;
  align-items: flex-start;
  margin-right: var(--dl-space-space-tripleunit);
  flex-direction: column;
}
.home-text21 {
  color: var(--dl-color-gray-white);
  opacity: 0.8;
  font-size: 1rem;
  font-family: Open Sans;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: var(--dl-space-space-unit);
  text-transform: none;
  text-decoration: none;
}
.home-text22 {
  color: var(--dl-color-gray-white);
  margin-bottom: var(--dl-space-space-tripleunit);
}
.home-text23 {
  color: var(--dl-color-gray-white);
  opacity: 0.8;
  margin-bottom: var(--dl-space-space-doubleunit);
}
.home-container16 {
  flex: 0 0 auto;
  width: 200px;
  height: 100px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
}
.home-container17 {
  display: flex;
  position: relative;
  align-self: flex-start;
  border-color: var(--dl-color-primary-700);
  border-style: solid;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius40);
}
.home-navlink04 {
  color: var(--dl-color-gray-900);
  outlinr: none;
  font-size: 0.78rem;
  font-style: normal;
  text-align: center;
  transition: 0.3s;
  font-family: Open Sans;
  font-weight: 700;
  line-height: 1.4;
  padding-top: var(--dl-space-space-triplequarterunit);
  border-color: var(--dl-color-secondary-200);
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: 1.875rem;
  padding-right: var(--dl-space-space-unitandahalfunit);
  letter-spacing: -0.025rem;
  padding-bottom: var(--dl-space-space-triplequarterunit);
  text-transform: uppercase;
  text-decoration: none;
}
.home-navlink04:hover {
  cursor: pointer;
  background-color: var(--dl-color-primary-700);
}
.home-bottom-wave-image {
  top: auto;
  left: auto;
  right: 0px;
  width: 100%;
  bottom: -5px;
  position: absolute;
  object-fit: cover;
}
.home-image1 {
  top: auto;
  left: 0px;
  right: 0px;
  width: 100%;
  bottom: auto;
  height: 100%;
  position: absolute;
  object-fit: cover;
}
.home-top-wave-image {
  top: -5px;
  left: auto;
  right: 0px;
  width: 100%;
  bottom: auto;
  position: absolute;
  object-fit: cover;
}
.home-projects {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-text24 {
  margin-bottom: var(--dl-space-space-halfunit);
  background-image: linear-gradient(310deg, #005d63, #82bb27);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.home-text27 {
  max-width: 600px;
  text-align: center;
  margin-bottom: var(--dl-space-space-halfunit);
}
.home-text28 {
  max-width: 600px;
  text-align: center;
  margin-bottom: var(--dl-space-space-halfunit);
}
.home-project-cards {
  gap: 5%;
  flex: 0 0 auto;
  display: flex;
  padding: var(--dl-space-space-tripleunit);
  flex-wrap: wrap;
  max-width: 1200;
  margin-top: var(--dl-space-space-tripleunit);
  min-height: auto;
  align-items: center;
  justify-content: flex-start;
}
.home-container18 {
  width: 30%;
  height: 25rem;
  display: flex;
  position: relative;
  box-shadow: 0 8px 26px -4px hsla(0,0%,8%,.15),0 8px 9px -5px hsla(0,0%,8%,.06)!important;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-sixunits);
  padding-left: var(--dl-space-space-sixunits);
  border-radius: var(--dl-radius-radius-radius1);
  margin-bottom: 50px;
  padding-right: var(--dl-space-space-sixunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-doubleunit);
  background-size: cover;
  justify-content: center;
  background-image: linear-gradient(90deg, rgba(44, 62, 80, 0.32) 1.00%,rgba(0, 93, 99, 0.45) 100.00%),url('https://res.cloudinary.com/dhdonsil5/image/upload/v1671186833/IEES/Img/projects/1.UofCanada/UoC01_lc2dun.jpg');
  background-position: center;
}
.home-container18:hover {
  transform: scale(1.04);
}
.home-container19 {
  top: 0px;
  left: 0px;
  right: auto;
  width: 100%;
  bottom: auto;
  height: 100%;
  position: absolute;
  background: rgba(0,0,0,.4);
  transition: 0.3s;
  border-radius: var(--dl-radius-radius-radius1);
}

.home-container20 {
  display: flex;
  z-index: 1;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-text30 {
  color: var(--dl-color-applegreen-main);
  max-width: 200px;
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
  text-transform: uppercase;
}
.home-navlink05 {
  display: contents;
}
.home-component09 {
  text-decoration: none;
}
.home-container21 {
  width: 30%;
  height: 25rem;
  display: flex;
  position: relative;
  box-shadow: 0 8px 26px -4px hsla(0,0%,8%,.15),0 8px 9px -5px hsla(0,0%,8%,.06)!important;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-sixunits);
  padding-left: var(--dl-space-space-sixunits);
  border-radius: var(--dl-radius-radius-radius1);
  margin-bottom: 50px;
  padding-right: var(--dl-space-space-sixunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-doubleunit);
  background-size: cover;
  justify-content: center;
  background-image: linear-gradient(90deg, rgba(44, 62, 80, 0.32) 1.00%,rgba(0, 93, 99, 0.45) 100.00%),url('https://images.unsplash.com/photo-1494949649109-ecfc3b8c35df?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxzY2hvb2x8ZW58MHx8fHwxNjcxMzY1MDcz&ixlib=rb-4.0.3&h=1500');
  background-position: center;
}
.home-container21:hover {
  transform: scale(1.04);
}
.home-container22 {
  top: 0px;
  left: 0px;
  right: auto;
  width: 100%;
  bottom: auto;
  height: 100%;
  position: absolute;
  background: rgba(0,0,0,.4);
  transition: 0.3s;
  border-radius: var(--dl-radius-radius-radius1);
}

.home-container23 {
  display: flex;
  z-index: 1;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-text33 {
  color: var(--dl-color-gray-800);
  font-size: 0.875rem;
  font-family: Open Sans;
  font-weight: 200;
  line-height: 1.5;
  text-transform: none;
  text-decoration: none;
}
.home-text34 {
  color: var(--dl-color-applegreen-main);
  max-width: 200px;
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
  text-transform: uppercase;
}
.home-navlink06 {
  display: contents;
}
.home-component10 {
  text-decoration: none;
}
.home-container24 {
  width: 30%;
  height: 25rem;
  display: flex;
  position: relative;
  box-shadow: 0 8px 26px -4px hsla(0,0%,8%,.15),0 8px 9px -5px hsla(0,0%,8%,.06)!important;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-sixunits);
  padding-left: var(--dl-space-space-sixunits);
  border-radius: var(--dl-radius-radius-radius1);
  margin-bottom: 50px;
  padding-right: var(--dl-space-space-sixunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-doubleunit);
  background-size: cover;
  justify-content: center;
  background-image: linear-gradient(90deg, rgba(44, 62, 80, 0.32) 1.00%,rgba(0, 93, 99, 0.45) 100.00%),url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fHNjaG9vbHxlbnwwfHx8fDE2NzEzNjUwNzM&ixlib=rb-4.0.3&h=1500');
  background-position: center;
}
.home-container24:hover {
  transform: scale(1.04);
}
.home-container25 {
  top: 0px;
  left: 0px;
  right: auto;
  width: 100%;
  bottom: auto;
  height: 100%;
  position: absolute;
  background: rgba(0,0,0,.4);
  transition: 0.3s;
  border-radius: var(--dl-radius-radius-radius1);
}

.home-container26 {
  display: flex;
  z-index: 1;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-text39 {
  color: var(--dl-color-gray-800);
  font-size: 0.7rem;
  font-family: Open Sans;
  font-weight: 200;
  line-height: 1.5;
  text-transform: none;
  text-decoration: none;
}
.home-text40 {
  color: var(--dl-color-applegreen-main);
  font-size: 1.1rem;
  max-width: 200px;
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
  text-transform: uppercase;
}
.home-navlink07 {
  display: contents;
}
.home-component11 {
  text-decoration: none;
}
.home-container27 {
  width: 30%;
  height: 25rem;
  display: flex;
  position: relative;
  box-shadow: 0 8px 26px -4px hsla(0,0%,8%,.15),0 8px 9px -5px hsla(0,0%,8%,.06)!important;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-sixunits);
  padding-left: var(--dl-space-space-sixunits);
  border-radius: var(--dl-radius-radius-radius1);
  margin-bottom: 50px;
  padding-right: var(--dl-space-space-sixunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-doubleunit);
  background-size: cover;
  justify-content: center;
  background-image: linear-gradient(90deg, rgba(44, 62, 80, 0.32) 1.00%,rgba(0, 93, 99, 0.45) 100.00%),url('https://images.unsplash.com/photo-1510531704581-5b2870972060?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDUyfHxzY2hvb2x8ZW58MHx8fHwxNjcxMzY2MDQ3&ixlib=rb-4.0.3&h=1500');
  background-position: center;
}
.home-container27:hover {
  transform: scale(1.04);
}
.home-container28 {
  top: 0px;
  left: 0px;
  right: auto;
  width: 100%;
  bottom: auto;
  height: 100%;
  position: absolute;
  background: rgba(0,0,0,.4);
  transition: 0.3s;
  border-radius: var(--dl-radius-radius-radius1);
}

.home-container29 {
  display: flex;
  z-index: 1;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-text43 {
  color: var(--dl-color-gray-800);
  font-size: 0.875rem;
  font-family: Open Sans;
  font-weight: 200;
  line-height: 1.5;
  text-transform: none;
  text-decoration: none;
}
.home-text44 {
  color: var(--dl-color-applegreen-main);
  max-width: 200px;
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
  text-transform: uppercase;
}
.home-navlink08 {
  display: contents;
}
.home-component12 {
  text-decoration: none;
}
.home-container30 {
  width: 30%;
  height: 25rem;
  display: flex;
  position: relative;
  box-shadow: 0 8px 26px -4px hsla(0,0%,8%,.15),0 8px 9px -5px hsla(0,0%,8%,.06)!important;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-sixunits);
  padding-left: var(--dl-space-space-sixunits);
  border-radius: var(--dl-radius-radius-radius1);
  margin-bottom: 50px;
  padding-right: var(--dl-space-space-sixunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-doubleunit);
  background-size: cover;
  justify-content: center;
  background-image: linear-gradient(90deg, rgba(44, 62, 80, 0.32) 1.00%,rgba(0, 93, 99, 0.45) 100.00%),url('https://images.unsplash.com/photo-1631885661110-aa12f8b42b25?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzNXx8c2Nob29sfGVufDB8fHx8MTY3MTM2NjM0Ng&ixlib=rb-4.0.3&h=1500');
  background-position: center;
}
.home-container30:hover {
  transform: scale(1.04);
}
.home-container31 {
  top: 0px;
  left: 0px;
  right: auto;
  width: 100%;
  bottom: auto;
  height: 100%;
  position: absolute;
  background: rgba(0,0,0,.4);
  transition: 0.3s;
  border-radius: var(--dl-radius-radius-radius1);
}

.home-container32 {
  display: flex;
  z-index: 1;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-text49 {
  color: var(--dl-color-gray-800);
  font-size: 0.875rem;
  font-family: Open Sans;
  font-weight: 200;
  line-height: 1.5;
  text-transform: none;
  text-decoration: none;
}
.home-text52 {
  color: var(--dl-color-applegreen-main);
  max-width: 200px;
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
  text-transform: uppercase;
}
.home-navlink09 {
  display: contents;
}
.home-component13 {
  text-decoration: none;
}
.home-contact-us {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(310deg,#005d63,#82bb27);
}
.home-container33 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  z-index: 1;
  max-width: 1320px;
  align-items: flex-start;
  padding-top: 15rem;
  padding-left: var(--dl-space-space-tripleunit);
  padding-right: var(--dl-space-space-tripleunit);
  flex-direction: row;
  padding-bottom: 15rem;
  justify-content: space-between;
}
.home-container34 {
  flex: 1;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.home-container35 {
  display: flex;
  max-width: 600px;
  align-items: flex-start;
  margin-right: var(--dl-space-space-tripleunit);
  flex-direction: column;
}
.home-text57 {
  color: var(--dl-color-gray-white);
  opacity: 0.8;
  font-size: 1rem;
  font-family: Open Sans;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: var(--dl-space-space-unit);
  text-transform: none;
  text-decoration: none;
}
.home-text58 {
  color: var(--dl-color-gray-white);
  margin-bottom: var(--dl-space-space-tripleunit);
  text-transform: uppercase;
}
.home-text62 {
  color: var(--dl-color-gray-white);
  opacity: 0.8;
  margin-bottom: var(--dl-space-space-doubleunit);
}
.home-container36 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-navlink10 {
  display: contents;
}
.home-component14 {
  text-decoration: none;
}
.home-container37 {
  flex: 0 0 auto;
  width: 40%;
  height: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-image2 {
  width: 100%;
  object-fit: cover;
}
.home-bottom-wave-image1 {
  top: auto;
  left: auto;
  right: 0px;
  width: 100%;
  bottom: -5px;
  z-index: 2;
  position: absolute;
  object-fit: cover;
}
.home-image3 {
  top: auto;
  left: 0px;
  right: 0px;
  width: 100%;
  bottom: auto;
  filter: opacity(.3);
  height: 100%;
  position: absolute;
  object-fit: cover;
}
.home-top-wave-image1 {
  top: -5px;
  left: auto;
  right: 0px;
  width: 100%;
  bottom: auto;
  z-index: 2;
  position: absolute;
  object-fit: cover;
}
.home-partners {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  min-height: 40vh;
  align-items: center;
  padding-top: var(--dl-space-space-fourunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-sixunits);
}
.home-container38 {
  flex: 0 0 auto;
  width: 200px;
  height: 100px;
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: var(--dl-space-space-fourunits);
  flex-direction: column;
  justify-content: center;
}
.home-text68 {
  font-size: 2.25rem;
  font-family: Open Sans;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: var(--dl-space-space-halfunit);
  text-transform: uppercase;
  text-decoration: none;
  background-image: linear-gradient(310deg, #005d63, #82bb27);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.home-text71 {
  right: -10px;
  bottom: -10px;
  position: absolute;
  font-size: 2rem;
  max-width: 600px;
  text-align: center;
  font-family: Satisfy;
}
.home-text72 {
  max-width: 600px;
  text-align: center;
  margin-bottom: var(--dl-space-space-halfunit);
}
.home-container39 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
@media(max-width: 1200px) {
  .home-hero {
    padding-left: var(--dl-space-space-doubleunit);
    padding-right: var(--dl-space-space-doubleunit);
  }
  .home-card {
    width: 60%;
  }
  .home-text {
    letter-spacing: 6px;
  }
  .home-container02 {
    min-width: 00px;
  }
  .home-image {
    width: 50%;
    object-position: right;
  }
  .home-services-cards {
    margin-top: var(--dl-space-space-unit);
  }
  .home-container10 {
    max-height: 600px;
  }
  .home-project-cards {
    margin-top: var(--dl-space-space-unit);
  }
  .home-text58 {
    color: var(--dl-color-gray-white);
  }
  .home-container38 {
    position: relative;
  }
  .home-text71 {
    right: 2px;
    bottom: -7px;
    position: absolute;
    font-size: 1.7rem;
  }
}
@media(max-width: 991px) {
  .home-hero {
    padding-left: var(--dl-space-space-tripleunit);
    padding-right: var(--dl-space-space-tripleunit);
  }
  .home-container01 {
    max-width: 960px;
    justify-content: flex-end;
  }
  .home-card {
    width: 70%;
    align-items: center;
  }
  .home-text {
    letter-spacing: 1.2;
  }
  .home-text02 {
    align-self: center;
    margin-right: 0px;
    padding-right: 0px;
  }
  .home-container02 {
    align-self: center;
  }
  .home-image {
    top: var(--dl-space-space-fourunits);
    width: 100%;
  }
  .home-services {
    height: auto;
    margin-top: var(--dl-space-space-tripleunit);
    min-height: 85vh;
    padding-top: var(--dl-space-space-doubleunit);
  }
  .home-text06 {
    text-align: center;
  }
  .home-services-cards {
    margin-top: 0;
    flex-direction: column;
  }
  .home-container04 {
    width: 45%;
  }
  .home-container07 {
    width: 45%;
  }
  .home-container10 {
    width: 45%;
  }
  .home-container13 {
    padding-left: var(--dl-space-space-doubleunit);
    padding-right: var(--dl-space-space-doubleunit);
    justify-content: center;
  }
  .home-container14 {
    align-items: center;
  }
  .home-container15 {
    margin-right: 0px;
  }
  .home-navlink04 {
    font-size: 1rem;
  }
  .home-projects {
    height: auto;
    margin-top: var(--dl-space-space-tripleunit);
    min-height: 85vh;
    padding-top: var(--dl-space-space-doubleunit);
  }
  .home-text27 {
    text-align: center;
  }
  .home-text28 {
    text-align: center;
  }
  .home-project-cards {
    margin-top: 0;
    flex-direction: column;
  }
  .home-container18 {
    width: 100%;
  }
  .home-container21 {
    width: 100%;
  }
  .home-container24 {
    width: 100%;
  }
  .home-container27 {
    width: 100%;
  }
  .home-container30 {
    width: 100%;
  }
  .home-container33 {
    padding-left: var(--dl-space-space-doubleunit);
    padding-right: var(--dl-space-space-doubleunit);
    justify-content: center;
  }
  .home-container34 {
    align-items: center;
  }
  .home-container35 {
    margin-right: 0px;
  }
  .home-partners {
    height: auto;
    margin-top: var(--dl-space-space-tripleunit);
    min-height: 50vh;
    padding-top: var(--dl-space-space-fourunits);
    padding-left: var(--dl-space-space-fourunits);
    padding-right: var(--dl-space-space-fourunits);
    justify-content: flex-start;
  }
  .home-container38 {
    position: relative;
    margin-bottom: 60px;
  }
  .home-text71 {
    right: 11px;
    bottom: -4px;
    position: absolute;
    font-size: 1.5rem;
    text-align: center;
  }
  .home-text72 {
    text-align: center;
  }
}
@media(max-width: 767px) {
  .home-container01 {
    justify-content: flex-end;
  }
  .home-card {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .home-text02 {
    text-align: center;
    margin-right: 0px;
    padding-right: 0px;
  }
  .home-container02 {
    align-self: center;
  }
  .home-image {
    top: var(--dl-space-space-fourunits);
    width: 100%;
    object-position: center;
  }
  .home-container13 {
    padding-top: 12rem;
    padding-bottom: 12rem;
  }
  .home-container18 {
    background-size: cover;
    background-image: url("/playground_assets/uoc01-1500h.jpg");
  }
  .home-text30 {
    color: var(--dl-color-gray-white);
  }
  .home-container21 {
    background-size: cover;
    background-image: url("/playground_assets/uoc01-1500h.jpg");
  }
  .home-text34 {
    color: var(--dl-color-gray-white);
  }
  .home-container24 {
    background-size: cover;
    background-image: url("/playground_assets/uoc01-1500h.jpg");
  }
  .home-container27 {
    background-size: cover;
    background-image: url("/playground_assets/uoc01-1500h.jpg");
  }
  .home-text44 {
    color: var(--dl-color-gray-white);
  }
  .home-container30 {
    background-size: cover;
    background-image: url("/playground_assets/uoc01-1500h.jpg");
  }
  .home-text52 {
    color: var(--dl-color-gray-white);
  }
  .home-container33 {
    padding-top: 12rem;
    padding-bottom: 12rem;
  }
  .home-container37 {
    display: none;
  }
  .home-container38 {
    position: relative;
  }
  .home-text71 {
    right: 4px;
    bottom: -1px;
    position: absolute;
    font-size: 1.4rem;
  }
}
@media(max-width: 479px) {
  .home-container01 {
    margin-top: var(--dl-space-space-sixunits);
    justify-content: center;
  }
  .home-card {
    width: 100%;
    padding: var(--dl-space-space-unit);
    align-self: center;
    margin-top: var(--dl-space-space-sixunits);
    justify-content: center;
  }
  .home-text {
    font-size: 1.7rem;
  }
  .home-text01 {
    font-size: 1rem;
    align-self: center;
  }
  .home-container02 {
    gap: var(--dl-space-space-unit);
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
  .home-container03 {
    width: auto;
    height: auto;
    margin-right: 0px;
  }
  .home-image {
    top: var(--dl-space-space-sixunits);
    width: 100%;
    height: auto;
    object-fit: contain;
  }
  .home-services {
    padding: var(--dl-space-space-tripleunit);
    margin-top: var(--dl-space-space-unit);
  }
  .home-text03 {
    margin-bottom: var(--dl-space-space-doubleunit);
  }
  .home-services-cards {
    padding: 0px;
  }
  .home-container04 {
    width: 100%;
  }
  .home-container06 {
    align-items: center;
    flex-direction: column;
  }
  .home-container07 {
    width: 100%;
  }
  .home-container09 {
    align-items: center;
    flex-direction: column;
  }
  .home-container10 {
    width: 100%;
  }
  .home-container12 {
    align-items: center;
    flex-direction: column;
  }
  .home-container13 {
    padding-top: var(--dl-space-space-sixunits);
    padding-bottom: var(--dl-space-space-sixunits);
  }
  .home-text21 {
    color: var(--dl-color-secondary-100);
  }
  .home-container16 {
    width: 100%;
    height: auto;
  }
  .home-navlink04 {
    font-size: 0.75rem;
  }
  .home-projects {
    margin-top: var(--dl-space-space-unit);
    min-height: 85vh;
    padding-top: var(--dl-space-space-tripleunit);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-tripleunit);
  }
  .home-text24 {
    margin-bottom: var(--dl-space-space-doubleunit);
  }
  .home-project-cards {
    gap: var(--dl-space-space-doubleunit);
    padding: 0px;
    align-self: center;
    margin-top: var(--dl-space-space-fourunits);
    align-items: center;
  }
  .home-container18 {
    padding-left: var(--dl-space-space-fourunits);
    padding-right: var(--dl-space-space-fourunits);
    background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-working.jpg');
  }
  .home-container20 {
    max-width: 200px;
  }
  .home-text30 {
    color: var(--dl-color-applegreen-main);
  }
  .home-text31 {
    width: 100%;
  }
  .home-container21 {
    padding-left: var(--dl-space-space-fourunits);
    padding-right: var(--dl-space-space-fourunits);
    background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-working.jpg');
  }
  .home-container23 {
    max-width: 200px;
  }
  .home-text33 {
    color: var(--dl-color-secondary-100);
    font-size: .7rem;
  }
  .home-text34 {
    color: var(--dl-color-applegreen-main);
    font-size: 1.1rem;
    text-align: center;
  }
  .home-text35 {
    width: 100%;
  }
  .home-text36 {
    width: 100%;
  }
  .home-container24 {
    padding-left: var(--dl-space-space-fourunits);
    padding-right: var(--dl-space-space-fourunits);
    background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-working.jpg');
  }
  .home-container26 {
    max-width: 200px;
  }
  .home-text39 {
    color: var(--dl-color-secondary-100);
    width: auto;
  }
  .home-text40 {
    font-size: 1.1rem;
  }
  .home-text41 {
    width: 100%;
  }
  .home-container27 {
    padding-left: var(--dl-space-space-fourunits);
    padding-right: var(--dl-space-space-fourunits);
    background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-working.jpg');
  }
  .home-container29 {
    max-width: 200px;
  }
  .home-text43 {
    color: var(--dl-color-secondary-100);
    font-size: 0.7rem;
  }
  .home-text44 {
    color: var(--dl-color-applegreen-main);
    font-size: 1.1rem;
  }
  .home-text45 {
    width: 100%;
  }
  .home-text46 {
    width: 100%;
  }
  .home-container30 {
    padding-left: var(--dl-space-space-fourunits);
    padding-right: var(--dl-space-space-fourunits);
    background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-working.jpg');
  }
  .home-container32 {
    max-width: 200px;
  }
  .home-text49 {
    color: var(--dl-color-secondary-100);
    font-size: 0.7rem;
    font-family: Open Sans;
    font-weight: 200;
    line-height: 1.5;
    text-transform: none;
    text-decoration: none;
  }
  .home-text52 {
    color: var(--dl-color-applegreen-main);
    font-size: 1.1rem;
    text-transform: uppercase;
  }
  .home-text53 {
    width: 100%;
  }
  .home-text54 {
    width: 100%;
  }
  .home-container33 {
    padding-top: var(--dl-space-space-sixunits);
    padding-bottom: var(--dl-space-space-sixunits);
  }
  .home-text57 {
    color: var(--dl-color-secondary-100);
    font-size: 1rem;
    font-style: normal;
    font-family: Open Sans;
    font-weight: 400;
    line-height: 1.5;
    text-transform: none;
    text-decoration: none;
  }
  .home-text58 {
    color: var(--dl-color-gray-white);
    width: 382px;
    font-family: Open Sans;
    font-weight: 700;
    line-height: 1.375;
    text-transform: uppercase;
    text-decoration: none;
  }
  .home-text59 {
    color: var(--dl-color-primary-700);
    font-size: 1.2rem;
  }
  .home-text62 {
    color: var(--dl-color-gray-white);
  }
  .home-container36 {
    width: 100%;
  }
  .home-container37 {
    display: none;
  }
  .home-partners {
    position: relative;
    margin-top: var(--dl-space-space-unit);
    min-height: 85vh;
    padding-top: var(--dl-space-space-tripleunit);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-tripleunit);
  }
  .home-text71 {
    right: 7px;
    bottom: 8px;
    position: absolute;
    font-size: 1.3rem;
    font-family: Satisfy;
  }
}
</style>
