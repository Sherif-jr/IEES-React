<template>
  <div class="partner-carousel-container" v-bind:class="rootClassName">
    <div class="partner-carousel-container1">
      <div class="partner-carousel-container2">
        <img :alt="image_alt1" :src="image_src1" class="partner-carousel-image" />
      </div>
      <div class="partner-carousel-container3">
        <img
          :alt="image_alt11"
          :src="image_src11"
          class="partner-carousel-image1"
        />
      </div>
      <div class="partner-carousel-container4">
        <img
          :alt="image_alt111"
          :src="image_src111"
          class="partner-carousel-image2"
        />
      </div>
      <div class="partner-carousel-container5">
        <img
          :alt="image_alt1111"
          :src="image_src1111"
          class="partner-carousel-image3"
        />
      </div>
      <div class="partner-carousel-container6">
        <img
          :alt="image_alt11111"
          :src="image_src11111"
          class="partner-carousel-image4"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartnerCarousel',
  props: {
    image_src111: {
      type: String,
      default: '/playground_assets/eco-arch-200h.png',
    },
    image_alt11: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    image_alt111: {
      type: String,
      default: 'image',
    },
    image_src11111: {
      type: String,
      default: '/playground_assets/qcen-200h.png',
    },
    image_alt1111: {
      type: String,
      default: 'image',
    },
    image_alt11111: {
      type: String,
      default: 'image',
    },
    image_src1: {
      type: String,
      default: '/playground_assets/aurora-200h.png',
    },
    image_src11: {
      type: String,
      default: '/playground_assets/bahi-200h.png',
    },
    image_src1111: {
      type: String,
      default: '/playground_assets/ehst-200h.jpg',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    rootClassName: String,
    image_alt: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.partner-carousel-container {
  width: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.partner-carousel-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: fit-content;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: space-around;
}
.partner-carousel-container2 {
  flex: 0 0 auto;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.partner-carousel-image {
  width: 90%;
  object-fit: cover;
}
.partner-carousel-container3 {
  flex: 0 0 auto;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.partner-carousel-image1 {
  width: 100%;
  object-fit: cover;
}
.partner-carousel-container4 {
  flex: 0 0 auto;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.partner-carousel-image2 {
  width: 90%;
  object-fit: cover;
}
.partner-carousel-container5 {
  flex: 0 0 auto;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.partner-carousel-image3 {
  width: 90%;
  object-fit: cover;
}
.partner-carousel-container6 {
  flex: 0 0 auto;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.partner-carousel-image4 {
  width: 100%;
  object-fit: cover;
}


@media(max-width: 991px) {
  .partner-carousel-container2 {
    width: 150px;
    height: 150px;
  }
  .partner-carousel-container3 {
    width: 150px;
    height: 150px;
  }
  .partner-carousel-container4 {
    width: 150px;
    height: 150px;
  }
  .partner-carousel-container5 {
    width: 150px;
    height: 150px;
  }
  .partner-carousel-container6 {
    width: 150px;
    height: 150px;
  }
}
@media(max-width: 767px) {
  .partner-carousel-container1 {
    width: auto;
    align-self: center;
    padding-top: var(--dl-space-space-unitandahalfunit);
    padding-left: var(--dl-space-space-unitandahalfunit);
    padding-right: var(--dl-space-space-unitandahalfunit);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-unitandahalfunit);
    justify-content: center;
  }
  .partner-carousel-image1 {
    width: 90%;
  }
  .partner-carousel-image4 {
    width: 90%;
  }
}
</style>
