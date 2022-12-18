<template>
  <footer class="footer-footer" v-bind:class="rootClassName">
    <div class="footer-container">
      <div class="footer-container1">
        <img :alt="image_alt" :src="image_src" class="footer-image" />
        <span class="footer-text">
          <span>Copyright © 2022</span>
          <br />
        </span>
      </div>
      <div class="footer-container2">
        <div class="footer-container3">
          <span class="footer-text03 Large">Company</span>
          <span class="footer-text04 Large">About Us</span>
          <span class="footer-text05 Large">Careers</span>
          <span class="footer-text06 Large">Press</span>
        </div>
        <div class="footer-container4">
          <span class="footer-text07 Large">Pages</span>
          <span class="footer-text08 Large">Login</span>
          <span class="footer-text09 Large">Register</span>
          <span class="footer-text10 Large">About</span>
        </div>
        <div class="footer-container5">
          <svg viewBox="0 0 1024 1024" class="footer-icon">
            <path
              d="M928 0h-832c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM384 832h-128v-448h128v448zM320 320c-35.4 0-64-28.6-64-64s28.6-64 64-64c35.4 0 64 28.6 64 64s-28.6 64-64 64zM832 832h-128v-256c0-35.4-28.6-64-64-64s-64 28.6-64 64v256h-128v-448h128v79.4c26.4-36.2 66.8-79.4 112-79.4 79.6 0 144 71.6 144 160v288z"
            ></path></svg
          ><svg viewBox="0 0 877.7142857142857 1024" class="footer-icon2">
            <path
              d="M731.429 348.571c-21.714 9.714-44.571 16-69.143 19.429 25.143-14.857 44-38.857 53.143-66.857-23.429 13.714-49.143 24-76.571 29.143-21.714-23.429-53.143-37.714-87.429-37.714-66.286 0-120 53.714-120 120 0 9.143 0.571 18.857 2.857 27.429-100-5.143-188.571-52.571-248-125.714-10.286 17.714-16.571 38.857-16.571 60.571 0 41.714 19.429 78.286 52 100-20-0.571-38.857-6.286-57.143-14.857v1.143c0 58.286 44 106.857 98.857 117.714-10.286 2.857-18.286 4.571-29.143 4.571-7.429 0-14.857-1.143-22.286-2.286 15.429 47.429 59.429 82.286 112 83.429-41.143 32-92.571 51.429-149.143 51.429-9.714 0-19.429-0.571-28.571-1.714 53.143 33.714 116 53.714 184 53.714 220.571 0 341.714-182.857 341.714-341.714 0-5.143 0-10.286-0.571-15.429 23.429-16.571 44-37.714 60-62.286zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"
            ></path></svg
          ><svg viewBox="0 0 877.7142857142857 1024" class="footer-icon4">
            <path
              d="M829.143 73.143c26.857 0 48.571 21.714 48.571 48.571v780.571c0 26.857-21.714 48.571-48.571 48.571h-223.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-420c-26.857 0-48.571-21.714-48.571-48.571v-780.571c0-26.857 21.714-48.571 48.571-48.571h780.571z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    rootClassName: String,
    image_src: {
      type: String,
      default: '/playground_assets/asset%203.svg',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src1: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    link_text: {
      type: String,
      default: 'https://example.com',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    text: {
      type: String,
      default: 'Link',
    },
  },
}
</script>

<style scoped>
.footer-footer {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(310deg,#141727,#3a416f);
}
.footer-container {
  color: var(--dl-color-gray-white);
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-tripleunit);
  z-index: 1;
  max-width: 1320px;
  justify-content: space-between;
}
.footer-container1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.footer-image {
  width: 150px;
  object-fit: cover;
}
.footer-text {
  font-size: .6rem;
}
.footer-container2 {
  display: flex;
  justify-content: space-between;
}
.footer-container3 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.footer-text03 {
  font-weight: 700;
  margin-bottom: var(--dl-space-space-halfunit);
}
.footer-text04 {
  color: var(--dl-color-gray-800);
  transition: 0.3s;
  margin-bottom: var(--dl-space-space-halfunit);
}
.footer-text04:hover {
  color: var(--dl-color-gray-white);
}
.footer-text05 {
  color: var(--dl-color-gray-800);
  transition: 0.3s;
  margin-bottom: var(--dl-space-space-halfunit);
}
.footer-text05:hover {
  color: var(--dl-color-gray-white);
}
.footer-text06 {
  color: var(--dl-color-gray-800);
  transition: 0.3s;
  margin-bottom: var(--dl-space-space-halfunit);
}
.footer-text06:hover {
  color: var(--dl-color-gray-white);
}
.footer-container4 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  margin-left: var(--dl-space-space-sixunits);
  flex-direction: column;
}
.footer-text07 {
  font-weight: 700;
  margin-bottom: var(--dl-space-space-halfunit);
}
.footer-text08 {
  color: var(--dl-color-gray-800);
  transition: 0.3s;
  margin-bottom: var(--dl-space-space-halfunit);
}
.footer-text08:hover {
  color: var(--dl-color-gray-white);
}
.footer-text09 {
  color: var(--dl-color-gray-800);
  transition: 0.3s;
  margin-bottom: var(--dl-space-space-halfunit);
}
.footer-text09:hover {
  color: var(--dl-color-gray-white);
}
.footer-text10 {
  color: var(--dl-color-gray-800);
  transition: 0.3s;
  margin-bottom: var(--dl-space-space-halfunit);
}
.footer-text10:hover {
  color: var(--dl-color-gray-white);
}
.footer-container5 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  margin-left: var(--dl-space-space-sixunits);
  flex-direction: column;
  justify-content: space-around;
}
.footer-icon {
  fill: var(--dl-color-secondary-100);
  width: 24px;
  height: 24px;
}
.footer-icon2 {
  fill: var(--dl-color-secondary-100);
  width: 24px;
  height: 24px;
}
.footer-icon4 {
  fill: var(--dl-color-secondary-100);
  width: 24px;
  height: 24px;
}
.footer-root-class-name {
  background-image: linear-gradient(350deg,#82bb27,#005d63);
}
.footer-root-class-name1 {
  background-image: linear-gradient(350deg,#82bb27,#005d63);
}
@media(max-width: 1200px) {
  .footer-root-class-name {
    background-image: linear-gradient(350deg,#82bb27,#005d63);
  }
  .footer-root-class-name1 {
    background-image: linear-gradient(350deg,#82bb27,#005d63);
  }
}
@media(max-width: 991px) {
  .footer-container {
    padding: var(--dl-space-space-doubleunit);
  }
  .footer-root-class-name {
    background-image: linear-gradient(350deg,#82bb27,#005d63);
  }
  .footer-root-class-name1 {
    background-image: linear-gradient(350deg,#82bb27,#005d63);
  }
}
@media(max-width: 767px) {
  .footer-container {
    flex-direction: column;
  }
  .footer-container1 {
    align-items: center;
    margin-bottom: var(--dl-space-space-doubleunit);
  }
  .footer-container4 {
    margin-left: var(--dl-space-space-doubleunit);
  }
  .footer-container5 {
    margin-left: var(--dl-space-space-doubleunit);
  }
  .footer-root-class-name {
    background-image: linear-gradient(210deg,#005d63,#82bb27);
  }
  .footer-root-class-name1 {
    background-image: linear-gradient(210deg,#005d63,#82bb27);
  }
}
@media(max-width: 479px) {
  .footer-text {
    font-size: 0.6rem;
  }
  .footer-root-class-name {
    background-image: linear-gradient(210deg,#005d63,#82bb27);
  }
  .footer-root-class-name1 {
    background-image: linear-gradient(210deg,#005d63,#82bb27);
  }
}
</style>
