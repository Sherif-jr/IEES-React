<template>
  <div class="outline-gray-button-container" v-bind:class="rootClassName">
    <button type="button" class="outline-gray-button-button">{{ button }}</button>
  </div>
</template>

<script>
export default {
  name: 'OutlineGrayButton',
  props: {
    button: {
      type: String,
      default: 'Button',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.outline-gray-button-container {
  display: flex;
  position: relative;
  border-color: var(--dl-color-primary-700);
  border-style: solid;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius40);
}
.outline-gray-button-button {
  color: var(--dl-color-secondary-200);
  outlinr: none;
  font-size: .78rem;
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
}
.outline-gray-button-button:hover {
  color: var(--dl-color-gray-white);
  background-color: var(--dl-color-primary-500);
}
.outline-gray-button-root-class-name {
  align-self: center;
}
.outline-gray-button-root-class-name1 {
  align-self: center;
}
.outline-gray-button-root-class-name2 {
  align-self: center;
}
.outline-gray-button-root-class-name3 {
  align-self: center;
}
.outline-gray-button-root-class-name4 {
  align-self: center;
}
.outline-gray-button-root-class-name5 {
  align-self: center;
}
.outline-gray-button-root-class-name6 {
  align-self: center;
}
.outline-gray-button-root-class-name7 {
  align-self: center;
}
.outline-gray-button-root-class-name8 {
  align-self: center;
}
.outline-gray-button-root-class-name9 {
  align-self: center;
}
.outline-gray-button-root-class-name10 {
  align-self: center;
}
.outline-gray-button-root-class-name11 {
  align-self: center;
}
@media(max-width: 991px) {
  .outline-gray-button-button {
    font-size: 1rem;
  }
}
@media(max-width: 767px) {
  .outline-gray-button-button {
    font-size: 0.6rem;
  }
}
@media(max-width: 479px) {
  .outline-gray-button-button {
    font-size: 0.75rem;
  }
}
</style>
