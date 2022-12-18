<template>
  <div class="logos-logos">
    <div class="logos-container">
      <div class="logos-container01">
        <div class="logos-container02">
          <img :alt="image_alt" :src="image_src" class="logos-image" />
        </div>
        <div class="logos-container03">
          <img :alt="image_alt1" :src="image_src1" class="logos-image1" />
        </div>
        <div class="logos-container04">
          <img :alt="image_alt2" :src="image_src2" class="logos-image2" />
        </div>
      </div>
      <div class="logos-container05">
        <div class="logos-container06">
          <img :alt="image_alt3" :src="image_src3" class="logos-image3" />
        </div>
        <div class="logos-container07">
          <img :alt="image_alt4" :src="image_src4" class="logos-image4" />
        </div>
        <div class="logos-container08">
          <img :alt="image_alt5" :src="image_src5" class="logos-image5" />
        </div>
      </div>
      <div class="logos-container09">
        <div class="logos-container10">
          <img :alt="image_alt6" :src="image_src6" class="logos-image6" />
        </div>
        <div class="logos-container11">
          <img :alt="image_alt7" :src="image_src7" class="logos-image7" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logos',
  props: {
    image_src7: {
      type: String,
      default: '/playground_assets/logo-weave.svg',
    },
    image_alt6: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default: '/playground_assets/logo-asana.svg',
    },
    image_alt2: {
      type: String,
      default: 'image',
    },
    image_src6: {
      type: String,
      default: '/playground_assets/logo-attlasian.svg',
    },
    image_alt4: {
      type: String,
      default: 'image',
    },
    image_alt5: {
      type: String,
      default: 'image',
    },
    image_src5: {
      type: String,
      default: '/playground_assets/logo-invision.svg',
    },
    image_alt7: {
      type: String,
      default: 'image',
    },
    image_src1: {
      type: String,
      default: '/playground_assets/logo-slack.svg',
    },
    image_src2: {
      type: String,
      default: '/playground_assets/logo-google-drive.svg',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    image_src3: {
      type: String,
      default: '/playground_assets/logo-shopify.svg',
    },
    image_alt3: {
      type: String,
      default: 'image',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src4: {
      type: String,
      default:
        'https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-apple.svg',
    },
  },
}
</script>

<style scoped>
.logos-logos {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.logos-container {
  flex: 0 0 auto;
  display: flex;
  min-width: 400px;
  align-items: flex-start;
  padding-left: var(--dl-space-space-triplequarterunit);
  flex-direction: column;
}
.logos-container01 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-tripleunit);
  flex-direction: row;
  justify-content: space-between;
}
.logos-container02 {
  width: 58px;
  height: 58px;
  padding: var(--dl-space-space-unit);
  align-self: flex-end;
  object-fit: cover;
  margin-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-round);
  background-color: var(--dl-color-gray-white);
}
.logos-image {
  width: 100%;
}
.logos-container03 {
  width: 58px;
  height: 58px;
  padding: var(--dl-space-space-unit);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
  background-color: var(--dl-color-gray-white);
}
.logos-image1 {
  width: 100%;
}
.logos-container04 {
  width: 58px;
  height: 58px;
  padding: var(--dl-space-space-unit);
  align-self: flex-end;
  object-fit: cover;
  margin-right: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-round);
  background-color: var(--dl-color-gray-white);
}
.logos-image2 {
  width: 100%;
}
.logos-container05 {
  flex: 0 0 auto;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-tripleunit);
  flex-direction: row;
  justify-content: space-between;
}
.logos-container06 {
  width: 58px;
  height: 58px;
  padding: var(--dl-space-space-unit);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
  background-color: var(--dl-color-gray-white);
}
.logos-image3 {
  width: 100%;
  object-fit: cover;
}
.logos-container07 {
  width: 58px;
  height: 58px;
  padding: var(--dl-space-space-unit);
  align-self: center;
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
  background-color: var(--dl-color-gray-white);
}
.logos-image4 {
  width: 100%;
}
.logos-container08 {
  width: 58px;
  padding: var(--dl-space-space-unit);
  align-self: flex-end;
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
  background-color: var(--dl-color-gray-white);
}
.logos-image5 {
  width: 100%;
}
.logos-container09 {
  flex: 0 0 auto;
  width: 50%;
  height: 70px;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.logos-container10 {
  width: 58px;
  height: 58px;
  padding: var(--dl-space-space-unit);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
  background-color: var(--dl-color-gray-white);
}
.logos-image6 {
  width: 100%;
}
.logos-container11 {
  width: 58px;
  height: 58px;
  padding: var(--dl-space-space-unit);
  align-self: flex-end;
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
  background-color: var(--dl-color-gray-white);
}
.logos-image7 {
  width: 100%;
  object-fit: cover;
}
@media(max-width: 991px) {
  .logos-logos {
    display: none;
  }
}
</style>
