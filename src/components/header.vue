<template>
  <div data-role="Header" class="header-header" v-bind:class="rootClassName">
    <nav class="header-nav animate__fadeInDown animate__animated">
      <div class="header-container">
        <router-link to="/" class="header-navlink">
          <div class="header-container1">
            <img
              :alt="image_alt"
              src="/playground_assets/asset%2011.svg"
              class="header-image"
            />
            <span class="header-text Large">IEES</span>
          </div>
        </router-link>
        <div class="header-menu">
          <router-link to="/" class="header-navlink1 Large">Home</router-link>
          <div data-thq="thq-dropdown" class="header-thq-dropdown list-item">
            <div data-thq="thq-dropdown-toggle" class="header-dropdown-toggle">
              <span class="header-text1 Large">Services</span>
              <div data-thq="thq-dropdown-arrow" class="header-dropdown-arrow">
                <svg viewBox="0 0 1024 1024" class="header-icon">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul data-thq="thq-dropdown-list" class="header-dropdown-list">
              <li data-thq="thq-dropdown" class="header-dropdown list-item">
                <router-link to="/project-management">
                  <div
                    data-thq="thq-dropdown-toggle"
                    class="header-dropdown-toggle1"
                  >
                    <span class="header-project-management">
                      {{ first_item }}
                    </span>
                  </div>
                </router-link>
              </li>
              <li data-thq="thq-dropdown" class="header-dropdown1 list-item">
                <router-link to="/maintenance-management">
                  <div
                    data-thq="thq-dropdown-toggle"
                    class="header-dropdown-toggle2"
                  >
                    <span class="header-text2">{{ second_item }}</span>
                  </div>
                </router-link>
              </li>
              <li data-thq="thq-dropdown" class="header-dropdown2 list-item">
                <router-link to="/maintenance-management">
                  <div
                    data-thq="thq-dropdown-toggle"
                    class="header-dropdown-toggle3"
                  >
                    <span class="header-text3">{{ third_item }}</span>
                  </div>
                </router-link>
              </li>
              <li data-thq="thq-dropdown" class="header-dropdown3 list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  class="header-dropdown-toggle4"
                >
                  <span class="header-text4">{{ forth_item }}</span>
                </div>
              </li>
            </ul>
          </div>
          <router-link to="/projects" class="header-navlink5 Large">
            Projects
          </router-link>
          <router-link to="/about" class="header-navlink6 Large">
            About
          </router-link>
        </div>
        <div class="header-container2">
          <div class="header-container3">
            <router-link to="/contact-us" class="header-navlink7">
              <header-green-button
                button="CONTACT US"
                rootClassName="header-green-button-root-class-name"
                class="header-component"
              ></header-green-button>
            </router-link>
          </div>
          <div data-role="BurgerMenu" class="header-burger-menu">
            <svg viewBox="0 0 1024 1024" class="header-icon2">
              <path
                d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </nav>
    <div data-role="MobileMenu" class="header-mobile-menu">
      <div class="header-top">
        <router-link
          to="/"
          class="header-navlink8 animate__fadeIn animate__animated"
        >
          IEES
        </router-link>
        <div
          data-role="CloseMobileMenu"
          class="header-close-menu animate__animated"
        >
          <svg
            viewBox="0 0 1024 1024"
            class="header-icon4 animate__fadeIn animate__animated"
          >
            <path
              d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="header-mid">
        <div class="header-menu1">
          <router-link
            to="/"
            class="header-home-link animate__faster animate__fadeInLeft animate__animated"
          >
            Home
          </router-link>
          <router-link
            to="/contact-us"
            class="header-services-link animate__fadeInRight animate__faster animate__animated"
          >
            services
          </router-link>
          <router-link
            to="/projects"
            class="header-projects-link animate__faster animate__fadeInLeft animate__animated"
          >
            projects
          </router-link>
          <router-link
            to="/about"
            class="header-about-link animate__fadeInRight animate__faster animate__animated"
          >
            About
          </router-link>
          <router-link
            to="/contact-us"
            class="header-about-link1 animate__faster animate__fadeInLeft animate__animated"
          >
            contact us
          </router-link>
        </div>
      </div>
      <div class="header-bot">
        <div class="header-container4">
          <button class="header-button">Button</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderGreenButton from './header-green-button'

export default {
  name: 'Header',
  props: {
    second_item: {
      type: String,
      default: 'Maintenance Management',
    },
    rootClassName: String,
    image_src: String,
    first_item: {
      type: String,
      default: 'Project Management',
    },
    forth_item: {
      type: String,
      default: 'Design Management',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    button: {
      type: String,
      default: 'Button',
    },
    third_item: {
      type: String,
      default: 'Energy Management',
    },
  },
  components: {
    HeaderGreenButton,
  },
}
</script>

<style scoped>
.header-header {
  top: 0px;
  left: auto;
  right: auto;
  width: 100%;
  bottom: auto;
  display: flex;
  z-index: 3;
  position: fixed;
  max-width: 1320px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  padding-right: var(--dl-space-space-unitandahalfunit);
  justify-content: center;
}
.header-nav {
  flex: 0 0 auto;
  color: var(--dl-color-secondary-600);
  width: 100%;
  height: 60px;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 .25rem .375rem -.0625rem hsla(0,0%,8%,.12),0 .125rem .25rem -.0625rem hsla(0,0%,8%,.07)!important;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: var(--dl-radius-radius-radius40);
  padding-right: var(--dl-space-space-unitandahalfunit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-halfunit);
  backdrop-filter: saturate(200%) blur(30px);
  justify-content: space-between;
  background-color: hsla(0,0%,100%,.8)!important;
}
.header-container {
  color: var(--dl-color-gray-black);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.header-navlink {
  display: contents;
}
.header-container1 {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
.header-image {
  width: 40px;
  object-fit: contain;
}
.header-text {
  color: var(--dl-color-applegreen-main);
  font-size: 30px;
  font-weight: 600;
  margin-left: var(--dl-space-space-halfunit);
  margin-right: var(--dl-space-space-unit);
}
.header-menu {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.header-navlink1 {
  margin-top: var(--dl-space-space-halfunit);
  transition: 0.3s;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-navlink1:hover {
  color: var(--dl-color-applegreen-main);
}
.header-thq-dropdown {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: 2px;
}
.header-dropdown-toggle {
  fill: var(--dl-color-gray-black);
  color: var(--dl-color-gray-black);
  width: 100%;
  display: inline-flex;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-halfunit);
  border-radius: 2px;
  padding-right: var(--dl-space-space-halfunit);
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: center;
}
.header-text1 {
  transition: 0.3s;
}
.header-dropdown-arrow {
  transition: 0.3s;
}
.header-icon {
  width: 18px;
  height: 18px;
  margin-top: auto;
  transition: 0.3s;
  margin-bottom: auto;
}
.header-dropdown-list {
  left: 0%;
  width: max-content;
  display: none;
  z-index: 100;
  position: absolute;
  min-width: 100%;
  transition: 0.3s;
  align-items: stretch;
  border-color: #D9D9D9;
  border-width: 1px;
  border-radius: 4px;
  flex-direction: column;
  list-style-type: none;
  background-color: var(--dl-color-gray-white);
  list-style-position: inside;
}
.header-dropdown {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: 2px;
}
.header-dropdown-toggle1 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-unit);
  border-radius: 4px;
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.header-dropdown-toggle1:hover {
  fill: #fff;
  color: #fff;
  background-color: #595959;
}
.header-project-management {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  transition: all .3s ease-out;
  font-weight: 500;
}
.header-dropdown1 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: 2px;
}
.header-dropdown-toggle2 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-unit);
  border-radius: 4px;
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.header-dropdown-toggle2:hover {
  fill: #fff;
  color: #fff;
  background-color: #595959;
}
.header-text2 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.header-dropdown2 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: 2px;
}
.header-dropdown-toggle3 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-unit);
  border-radius: 4px;
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.header-dropdown-toggle3:hover {
  fill: #fff;
  color: #fff;
  background-color: #595959;
}
.header-text3 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.header-dropdown3 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: 2px;
}
.header-dropdown-toggle4 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-unit);
  border-radius: 4px;
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-unit);
}
.header-dropdown-toggle4:hover {
  fill: #fff;
  color: #fff;
  background-color: #595959;
}
.header-text4 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.header-navlink5 {
  margin-top: var(--dl-space-space-halfunit);
  transition: 0.3s;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-navlink5:hover {
  color: var(--dl-color-gray-500);
}
.header-navlink6 {
  margin-top: var(--dl-space-space-halfunit);
  transition: 0.3s;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-navlink6:hover {
  color: var(--dl-color-gray-500);
}
.header-container2 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.header-container3 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.header-navlink7 {
  display: contents;
}
.header-component {
  text-decoration: none;
}
.header-burger-menu {
  display: none;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.header-icon2 {
  width: 24px;
  height: 24px;
  margin-left: var(--dl-space-space-unit);
}
.header-mobile-menu {
  top: 0px;
  flex: 0 0 auto;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: var(--dl-space-space-unitandahalfunit);
  z-index: 100;
  overflow: hidden;
  position: fixed;
  align-items: flex-start;
  flex-direction: column;
  backdrop-filter: saturate(200%) blur(30px);
  background-color: var(--dl-color-gray-white);
}
.header-top {
  top: 0;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  position: absolute;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.header-navlink8 {
  color: var(--dl-color-secondary-700);
  font-weight: 600;
  text-decoration: none;
}
.header-close-menu {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.header-icon4 {
  width: 24px;
  height: 24px;
}
.header-mid {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
}
.header-menu1 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
}
.header-home-link {
  font-size: 0.875rem;
  transition: 0.3s;
  font-family: Open Sans;
  font-weight: 400;
  margin-bottom: var(--dl-space-space-halfunit);
  letter-spacing: -0.025rem;
  text-transform: none;
  text-decoration: none;
}
.header-services-link {
  font-size: 0.875rem;
  transition: 0.3s;
  font-family: Open Sans;
  font-weight: 400;
  margin-bottom: var(--dl-space-space-halfunit);
  letter-spacing: -0.025rem;
  text-transform: none;
  text-decoration: none;
}
.header-projects-link {
  font-size: 0.875rem;
  transition: 0.3s;
  font-family: Open Sans;
  font-weight: 400;
  margin-bottom: var(--dl-space-space-halfunit);
  letter-spacing: -0.025rem;
  text-transform: none;
  text-decoration: none;
}
.header-about-link {
  font-size: 0.875rem;
  transition: 0.3s;
  font-family: Open Sans;
  font-weight: 400;
  margin-bottom: var(--dl-space-space-halfunit);
  letter-spacing: -0.025rem;
  text-transform: none;
  text-decoration: none;
}
.header-about-link1 {
  font-size: 0.875rem;
  transition: 0.3s;
  font-family: Open Sans;
  font-weight: 400;
  margin-bottom: var(--dl-space-space-halfunit);
  letter-spacing: -0.025rem;
  text-transform: none;
  text-decoration: none;
}
.header-bot {
  flex: 0 0 auto;
  display: flex;
  margin-top: auto;
  flex-direction: column;
}
.header-container4 {
  display: flex;
  position: relative;
}
.header-button {
  color: var(--dl-color-gray-white);
  outline: none;
  position: relative;
  font-size: 0.78rem;
  background:  linear-gradient( 310deg ,#005d63,#82bb27);
  box-shadow: 0 4px 7px -1px rgb(0 0 0 / 11%), 0 2px 4px -1px rgb(0 0 0 / 7%);
  font-style: normal;
  text-align: center;
  transition: all .15s ease-in;
  font-family: Open Sans;
  font-weight: 700;
  line-height: 1.4;
  padding-top: var(--dl-space-space-triplequarterunit);
  border-width: 0px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: 1.875rem;
  padding-right: var(--dl-space-space-unitandahalfunit);
  letter-spacing: -0.025rem;
  padding-bottom: var(--dl-space-space-triplequarterunit);
  text-transform: uppercase;
}

@media(max-width: 1200px) {
  .header-nav {
    align-items: center;
  }
  .header-dropdown-list {
    display: none;
  }
}
@media(max-width: 991px) {
  .header-nav {
    max-width: 960px;
  }
  .header-menu {
    display: none;
  }
}
@media(max-width: 767px) {
  .header-menu {
    display: none;
  }
  .header-burger-menu {
    display: flex;
  }
  .header-button {
    font-size: .6rem;
  }
}
@media(max-width: 479px) {
  .header-text {
    font-size: 20px;
  }
  .header-container3 {
    display: none;
  }
  .header-mobile-menu {
    align-items: center;
    justify-content: center;
  }
  .header-navlink8 {
    color: var(--dl-color-secondary-700);
    font-weight: 600;
    text-decoration: none;
  }
  .header-mid {
    align-items: center;
    justify-content: center;
  }
  .header-menu1 {
    align-items: center;
  }
  .header-home-link {
    color: var(--dl-color-primary-700);
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    margin-bottom: var(--dl-space-space-doubleunit);
    text-transform: uppercase;
  }
  .header-services-link {
    color: var(--dl-color-primary-700);
    font-size: 2rem;
    font-style: normal;
    font-family: Open Sans;
    font-weight: 600;
    margin-bottom: var(--dl-space-space-doubleunit);
    letter-spacing: -0.025rem;
    text-transform: uppercase;
    text-decoration: none;
  }
  .header-projects-link {
    color: var(--dl-color-primary-700);
    font-size: 2rem;
    font-style: normal;
    font-family: Open Sans;
    font-weight: 600;
    margin-bottom: var(--dl-space-space-doubleunit);
    letter-spacing: -0.025rem;
    text-transform: uppercase;
    text-decoration: none;
  }
  .header-about-link {
    color: var(--dl-color-primary-700);
    font-size: 2rem;
    font-style: normal;
    font-family: Open Sans;
    font-weight: 600;
    margin-bottom: var(--dl-space-space-doubleunit);
    letter-spacing: -0.025rem;
    text-transform: uppercase;
    text-decoration: none;
  }
  .header-about-link1 {
    color: var(--dl-color-primary-700);
    font-size: 2rem;
    font-style: normal;
    font-family: Open Sans;
    font-weight: 600;
    margin-bottom: var(--dl-space-space-doubleunit);
    letter-spacing: -0.025rem;
    text-transform: uppercase;
    text-decoration: none;
  }
  .header-bot {
    width: 100%;
    display: none;
  }
  .header-container4 {
    width: auto;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .header-button {
    align-self: center;
  }
}
</style>
