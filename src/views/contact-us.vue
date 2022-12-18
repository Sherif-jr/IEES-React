<template>
  <div class="contact-us-container">
    <app-header rootClassName="header-root-class-name"></app-header>
    <app-contact
      text1="Name"
      text2="Company"
      text6="sales@iees-co.com"
      textinput_placeholder1="Your company name"
    ></app-contact>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import AppContact from '../components/contact'
import AppFooter from '../components/footer'

export default {
  name: 'ContactUs',
  components: {
    AppHeader,
    AppContact,
    AppFooter,
  },
  metaInfo: {
    title: 'ContactUs - IEES',
    meta: [
      {
        property: 'og:title',
        content: 'ContactUs - IEES',
      },
    ],
  },
}
</script>

<style scoped>
.contact-us-container {
  width: 100%;
  height: auto;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-900);
}
</style>
