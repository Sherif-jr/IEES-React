<template>
  <div class="images-grid-grid" v-bind:class="rootClassName">
    <img :alt="image_alt" :src="image_src" class="images-grid-image" />
    <img :alt="image_alt1" :src="image_src1" class="images-grid-image01" />
    <img :alt="image_alt2" :src="image_src2" class="images-grid-image02" />
    <img :alt="image_alt3" :src="image_src3" class="images-grid-image03" />
    <img :alt="image_alt4" :src="image_src4" class="images-grid-image04" />
    <img :alt="image_alt5" :src="image_src5" class="images-grid-image05" />
    <img :alt="image_alt6" :src="image_src6" class="images-grid-image06" />
    <img :alt="image_alt7" :src="image_src7" class="images-grid-image07" />
    <img :alt="image_alt8" :src="image_src8" class="images-grid-image08" />
    <img :alt="image_alt9" :src="image_src9" class="images-grid-image09" />
    <img :alt="image_alt10" :src="image_src10" class="images-grid-image10" />
    <img :alt="image_alt11" :src="image_src11" class="images-grid-image11" />
    <img :alt="image_alt12" :src="image_src12" class="images-grid-image12" />
    <img :alt="image_alt13" :src="image_src13" class="images-grid-image13" />
    <img :alt="image_alt14" :src="image_src14" class="images-grid-image14" />
    <img :alt="image_alt15" :src="image_src15" class="images-grid-image15" />
  </div>
</template>

<script>
export default {
  name: 'ImagesGrid',
  props: {
    rootClassName: String,
    image_alt3: {
      type: String,
      default: 'image',
    },
    image_alt14: {
      type: String,
      default: 'image',
    },
    image_alt13: {
      type: String,
      default: 'image',
    },
    image_src13: {
      type: String,
      default: '/playground_assets/iphone-1-1100w.png',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    image_alt2: {
      type: String,
      default: 'image',
    },
    image_src7: {
      type: String,
      default: '/playground_assets/iphone-3-1100w.png',
    },
    image_alt8: {
      type: String,
      default: 'image',
    },
    image_alt10: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default: '/playground_assets/iphone-3-1100w.png',
    },
    image_src10: {
      type: String,
      default: '/playground_assets/iphone-1-1100w.png',
    },
    image_src6: {
      type: String,
      default: '/playground_assets/iphone-1-1100w.png',
    },
    image_src8: {
      type: String,
      default: '/playground_assets/iphone-2-1100w.png',
    },
    image_src1: {
      type: String,
      default: '/playground_assets/iphone-2-1100w.png',
    },
    image_alt12: {
      type: String,
      default: 'image',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src14: {
      type: String,
      default: '/playground_assets/iphone-3-1100w.png',
    },
    image_alt7: {
      type: String,
      default: 'image',
    },
    image_src5: {
      type: String,
      default: '/playground_assets/iphone-4-1100w.png',
    },
    image_src11: {
      type: String,
      default: '/playground_assets/iphone-3-1100w.png',
    },
    image_src15: {
      type: String,
      default: '/playground_assets/iphone-2-1100w.png',
    },
    image_src9: {
      type: String,
      default: '/playground_assets/iphone-4-1100w.png',
    },
    image_src3: {
      type: String,
      default: '/playground_assets/iphone-1-1100w.png',
    },
    image_alt9: {
      type: String,
      default: 'image',
    },
    image_alt15: {
      type: String,
      default: 'image',
    },
    image_alt5: {
      type: String,
      default: 'image',
    },
    image_src12: {
      type: String,
      default: '/playground_assets/iphone-4-1100w.png',
    },
    image_alt6: {
      type: String,
      default: 'image',
    },
    image_src2: {
      type: String,
      default: '/playground_assets/iphone-4-1100w.png',
    },
    image_alt11: {
      type: String,
      default: 'image',
    },
    image_alt4: {
      type: String,
      default: 'image',
    },
    image_src4: {
      type: String,
      default: '/playground_assets/iphone-2-1100w.png',
    },
  },
}
</script>

<style scoped>
.images-grid-grid {
  width: 70%;
  display: grid;
  grid-gap: var(--dl-space-space-doubleunit);
  position: relative;
  transform: rotate(20deg);
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.images-grid-image {
  width: 100%;
}
.images-grid-image01 {
  width: 100%;
  margin-top: -200px;
}
.images-grid-image02 {
  width: 100%;
  margin-top: -50px;
}
.images-grid-image03 {
  width: 100%;
}
.images-grid-image04 {
  width: 100%;
}
.images-grid-image05 {
  width: 100%;
  margin-top: -200px;
}
.images-grid-image06 {
  width: 100%;
  margin-top: -50px;
}
.images-grid-image07 {
  width: 100%;
}
.images-grid-image08 {
  width: 100%;
}
.images-grid-image09 {
  width: 100%;
  margin-top: -200px;
}
.images-grid-image10 {
  width: 100%;
  margin-top: -50px;
}
.images-grid-image11 {
  width: 100%;
}
.images-grid-image12 {
  width: 100%;
}
.images-grid-image13 {
  width: 100%;
  margin-top: -200px;
}
.images-grid-image14 {
  width: 100%;
}
.images-grid-image15 {
  width: 100%;
}
@media(max-width: 991px) {
  .images-grid-grid {
    top: 40%;
    left: auto;
    right: -6rem;
    bottom: -6rem;
  }
  .images-grid-image {
    width: 120px;
  }
  .images-grid-image01 {
    width: 120px;
  }
  .images-grid-image02 {
    width: 120px;
  }
  .images-grid-image03 {
    width: 120px;
  }
  .images-grid-image04 {
    width: 120px;
  }
  .images-grid-image05 {
    width: 120px;
  }
  .images-grid-image06 {
    width: 120px;
  }
  .images-grid-image07 {
    width: 120px;
  }
  .images-grid-image08 {
    width: 120px;
  }
  .images-grid-image09 {
    width: 120px;
  }
  .images-grid-image10 {
    width: 120px;
  }
  .images-grid-image11 {
    width: 120px;
  }
  .images-grid-image12 {
    width: 120px;
  }
  .images-grid-image13 {
    width: 120px;
  }
  .images-grid-image14 {
    width: 120px;
    margin-top: -50px;
  }
  .images-grid-image15 {
    width: 120px;
  }
}
@media(max-width: 767px) {
  .images-grid-grid {
    right: 0;
  }
  .images-grid-image {
    width: 100px;
  }
  .images-grid-image01 {
    width: 100px;
  }
  .images-grid-image02 {
    width: 100px;
  }
  .images-grid-image03 {
    width: 100px;
  }
  .images-grid-image04 {
    width: 100px;
  }
  .images-grid-image05 {
    width: 100px;
  }
  .images-grid-image06 {
    width: 100px;
  }
  .images-grid-image07 {
    width: 100px;
  }
  .images-grid-image08 {
    width: 100px;
  }
  .images-grid-image09 {
    width: 100px;
  }
  .images-grid-image10 {
    width: 100px;
  }
  .images-grid-image11 {
    width: 100px;
  }
  .images-grid-image12 {
    width: 100px;
  }
  .images-grid-image13 {
    width: 100px;
  }
  .images-grid-image14 {
    width: 100px;
  }
  .images-grid-image15 {
    width: 100px;
  }
}
</style>
