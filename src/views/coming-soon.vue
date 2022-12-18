<template>
  <div class="coming-soon-container">
    <div class="coming-soon-container1">
      <div class="coming-soon-main">
        <lottie-vue-player
          :src="`https://assets7.lottiefiles.com/packages/lf20_ukkmrz6p.json`"
          :loop="true"
          :speed="1"
          :autoplay="true"
          :backgroundColor="transparent"
          class="coming-soon-lottie-node"
        ></lottie-vue-player>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComingSoon',
  metaInfo: {
    title: 'ComingSoon - IEES',
    meta: [
      {
        property: 'og:title',
        content: 'ComingSoon - IEES',
      },
    ],
  },
}
</script>

<style scoped>
.coming-soon-container {
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--dl-color-gray-900);
}
.coming-soon-container1 {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
}
.coming-soon-main {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 0;
  position: relative;
  max-width: 1320px;
  margin-top: 0px;
  align-items: center;
  margin-bottom: 0px;
  flex-direction: row;
  justify-content: center;
}
.coming-soon-lottie-node {
  width: 100%;
}
@media(max-width: 991px) {
  .coming-soon-container1 {
    background-size: auto;
  }
  .coming-soon-main {
    justify-content: flex-start;
  }
}
@media(max-width: 479px) {
  .coming-soon-container1 {
    padding: var(--dl-space-space-doubleunit);
  }
}
</style>
