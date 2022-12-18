<template>
  <div class="slider-nav-container" v-bind:class="rootClassName">
    <aside class="slider-nav-container1">
      <a href="#navItem1" id="navItem1" class="slider-nav-link">
        {{ SectionName }}
      </a>
      <a href="#navItem2" id="navItem2" class="slider-nav-link1">
        {{ SectionName1 }}
      </a>
      <a href="#navItem3" id="navItem3" class="slider-nav-link2">
        {{ SectionName11 }}
      </a>
      <a href="#navItem4" id="navItem4" class="slider-nav-link3">
        {{ SectionName111 }}
      </a>
      <outline-gray-button
        button="Finish"
        rootClassName="outline-gray-button-root-class-name9"
      ></outline-gray-button>
    </aside>
  </div>
</template>

<script>
import OutlineGrayButton from './outline-gray-button'

export default {
  name: 'SliderNav',
  props: {
    SectionName111: {
      type: String,
      default: 'Section1',
    },
    SectionName1: {
      type: String,
      default: 'Section1',
    },
    rootClassName: String,
    link_text: {
      type: String,
      default: '#',
    },
    SectionName11: {
      type: String,
      default: 'Section1',
    },
    SectionName: {
      type: String,
      default: 'Section1',
    },
    link_text111: {
      type: String,
      default: '#',
    },
    link_text11: {
      type: String,
      default: '#',
    },
    link_text1: {
      type: String,
      default: '#',
    },
  },
  components: {
    OutlineGrayButton,
  },

  data() {
    return {
      isVisible: true,
    }
  },
}
</script>

<style scoped>
.slider-nav-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.slider-nav-container1 {
  gap: 5vh;
  flex: 0 0 auto;
  color: white;
  width: fit-content;
  height: 50vh;
  display: flex;
  position: fixed;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.slider-nav-link {
  transition: 0.3s;
  text-decoration: none;
}
.slider-nav-link:hover {
  color: var(--dl-color-applegreen-main);
  font-size: 2rem;
  transform: translate();
  transition: all .3s linear;
}
.slider-nav-link1 {
  transition: 0.3s;
  text-decoration: none;
}
.slider-nav-link1:hover {
  color: var(--dl-color-applegreen-main);
  font-size: 2rem;
  transform: translate();
  transition: all .3s linear;
}
.slider-nav-link2 {
  transition: 0.3s;
  text-decoration: none;
}
.slider-nav-link2:hover {
  color: var(--dl-color-applegreen-main);
  font-size: 2rem;
  transform: translate();
  transition: all .3s linear;
}
.slider-nav-link3 {
  transition: 0.3s;
  text-decoration: none;
}
.slider-nav-link3:hover {
  color: var(--dl-color-applegreen-main);
  font-size: 2rem;
  transform: translate();
  transition: all .3s linear;
}
</style>
