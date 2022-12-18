<template>
  <div class="services-container">
    <app-header></app-header>
    <div class="services-container1">
      <div class="services-main">
        <div class="services-container2">
          <h1 class="services-text HeadingOne">You Work With</h1>
          <h1 class="services-text1">Soft Design System</h1>
          <p class="services-text2 Lead">
            <span class="services-text3">
              The time is now for it be okay to be great. Subscribe now and get
              notified when it&apos;s launched!
            </span>
          </p>
          <div class="services-container3">
            <input
              type="text"
              placeholder="Email here"
              class="services-textinput Small input"
            />
            <secondary-button button="Subscribe"></secondary-button>
          </div>
        </div>
        <div class="services-grid">
          <img
            alt="image"
            src="/playground_assets/iphone-3-1000w.png"
            class="services-image"
          />
          <img
            alt="image"
            src="/playground_assets/iphone-2-1000w.png"
            class="services-image01"
          />
          <img
            alt="image"
            src="/playground_assets/iphone-4-1000w.png"
            class="services-image02"
          />
          <img
            alt="image"
            src="/playground_assets/iphone-1-1000w.png"
            class="services-image03"
          />
          <img
            alt="image"
            src="/playground_assets/iphone-2-1000w.png"
            class="services-image04"
          />
          <img
            alt="image"
            src="/playground_assets/iphone-4-1000w.png"
            class="services-image05"
          />
          <img
            alt="image"
            src="/playground_assets/iphone-1-1000w.png"
            class="services-image06"
          />
          <img
            alt="image"
            src="/playground_assets/iphone-3-1000w.png"
            class="services-image07"
          />
          <img
            alt="image"
            src="/playground_assets/iphone-2-1000w.png"
            class="services-image08"
          />
          <img
            alt="image"
            src="/playground_assets/iphone-4-1000w.png"
            class="services-image09"
          />
          <img
            alt="image"
            src="/playground_assets/iphone-1-1000w.png"
            class="services-image10"
          />
          <img
            alt="image"
            src="/playground_assets/iphone-3-1000w.png"
            class="services-image11"
          />
          <img
            alt="image"
            src="/playground_assets/iphone-4-1000w.png"
            class="services-image12"
          />
          <img
            alt="image"
            src="/playground_assets/iphone-1-1000w.png"
            class="services-image13"
          />
          <img
            alt="image"
            src="/playground_assets/iphone-3-1000w.png"
            class="services-image14"
          />
          <img
            alt="image"
            src="/playground_assets/iphone-2-1000w.png"
            class="services-image15"
          />
        </div>
      </div>
    </div>
    <footer-gray></footer-gray>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import SecondaryButton from '../components/secondary-button'
import FooterGray from '../components/footer-gray'

export default {
  name: 'Services',
  components: {
    AppHeader,
    SecondaryButton,
    FooterGray,
  },
  metaInfo: {
    title: 'Services - IEES',
    meta: [
      {
        property: 'og:title',
        content: 'Services - IEES',
      },
    ],
  },
}
</script>

<style scoped>
.services-container {
  width: 100%;
  height: auto;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--dl-color-gray-900);
}
.services-container1 {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-sixunits);
}
.services-main {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 0;
  position: relative;
  max-width: 1320px;
  margin-top: var(--dl-space-space-fourunits);
  align-items: center;
  margin-bottom: var(--dl-space-space-fourunits);
  flex-direction: row;
  justify-content: flex-end;
}
.services-container2 {
  flex: 0 0 auto;
  width: 50%;
  display: flex;
  z-index: 2;
  align-self: flex-end;
  margin-top: var(--dl-space-space-sixunits);
  align-items: flex-start;
  margin-left: var(--dl-space-space-tripleunit);
  padding-top: var(--dl-space-space-tripleunit);
  margin-right: var(--dl-space-space-tripleunit);
  margin-bottom: var(--dl-space-space-sixunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-tripleunit);
}
.services-text {
  font-size: 3rem;
  margin-bottom: var(--dl-space-space-halfunit);
  background-image: linear-gradient(310deg,#7928ca,#ff0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.services-text1 {
  color: var(--dl-color-secondary-700);
  font-size: 3rem;
  margin-bottom: var(--dl-space-space-halfunit);
}
.services-text2 {
  margin-bottom: var(--dl-space-space-unit);
}
.services-text3 {
  color: rgb(103, 116, 142);
  display: inline;
  font-weight: 400;
  white-space: normal;
}
.services-container3 {
  flex: 0 0 auto;
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.services-textinput {
  width: 100%;
  transition: 0.3s;
  padding-top: var(--dl-space-space-halfunit);
  border-color: var(--dl-color-secondary-100);
  margin-right: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-triplequarterunit);
  border-radius: var(--dl-radius-radius-radius5);
  padding-right: var(--dl-space-space-triplequarterunit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.services-textinput:focus {
  outline: 0;
  box-shadow: 0 0 0 2px #e9aede;
  border-color: var(--dl-color-pink-200);
}
.services-grid {
  top: -20%;
  left: -35%;
  width: 70%;
  display: grid;
  grid-gap: var(--dl-space-space-doubleunit);
  position: absolute;
  transform: rotate(20deg);
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.services-image {
  width: 100%;
}
.services-image01 {
  width: 100%;
  margin-top: -200px;
}
.services-image02 {
  width: 100%;
  margin-top: -50px;
}
.services-image03 {
  width: 100%;
}
.services-image04 {
  width: 100%;
}
.services-image05 {
  width: 100%;
  margin-top: -200px;
}
.services-image06 {
  width: 100%;
  margin-top: -50px;
}
.services-image07 {
  width: 100%;
}
.services-image08 {
  width: 100%;
}
.services-image09 {
  width: 100%;
  margin-top: -200px;
}
.services-image10 {
  width: 100%;
  margin-top: -50px;
}
.services-image11 {
  width: 100%;
}
.services-image12 {
  width: 100%;
}
.services-image13 {
  width: 100%;
  margin-top: -200px;
}
.services-image14 {
  width: 100%;
}
.services-image15 {
  width: 100%;
}
@media(max-width: 991px) {
  .services-container1 {
    background-size: auto;
  }
  .services-main {
    justify-content: flex-start;
  }
  .services-container2 {
    width: 70%;
    align-self: flex-start;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: var(--dl-space-space-tripleunit);
    margin-bottom: 0px;
    padding-right: var(--dl-space-space-tripleunit);
  }
  .services-grid {
    top: 40%;
    left: auto;
    right: -6rem;
    bottom: -6rem;
  }
  .services-image {
    width: 120px;
  }
  .services-image01 {
    width: 120px;
  }
  .services-image02 {
    width: 120px;
  }
  .services-image03 {
    width: 120px;
  }
  .services-image04 {
    width: 120px;
  }
  .services-image05 {
    width: 120px;
  }
  .services-image06 {
    width: 120px;
  }
  .services-image07 {
    width: 120px;
  }
  .services-image08 {
    width: 120px;
  }
  .services-image09 {
    width: 120px;
  }
  .services-image10 {
    width: 120px;
  }
  .services-image11 {
    width: 120px;
  }
  .services-image12 {
    width: 120px;
  }
  .services-image13 {
    width: 120px;
  }
  .services-image14 {
    width: 120px;
    margin-top: -50px;
  }
  .services-image15 {
    width: 120px;
  }
}
@media(max-width: 767px) {
  .services-container2 {
    width: 100%;
  }
  .services-grid {
    right: 0;
  }
  .services-image {
    width: 100px;
  }
  .services-image01 {
    width: 100px;
  }
  .services-image02 {
    width: 100px;
  }
  .services-image03 {
    width: 100px;
  }
  .services-image04 {
    width: 100px;
  }
  .services-image05 {
    width: 100px;
  }
  .services-image06 {
    width: 100px;
  }
  .services-image07 {
    width: 100px;
  }
  .services-image08 {
    width: 100px;
  }
  .services-image09 {
    width: 100px;
  }
  .services-image10 {
    width: 100px;
  }
  .services-image11 {
    width: 100px;
  }
  .services-image12 {
    width: 100px;
  }
  .services-image13 {
    width: 100px;
  }
  .services-image14 {
    width: 100px;
  }
  .services-image15 {
    width: 100px;
  }
}
@media(max-width: 479px) {
  .services-container3 {
    flex-direction: column;
  }
  .services-textinput {
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>
