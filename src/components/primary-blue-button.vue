<template>
  <div class="primary-blue-button-container" v-bind:class="rootClassName">
    <button type="submit" class="primary-blue-button-button">{{ button }}</button>
  </div>
</template>

<script>
export default {
  name: 'PrimaryBlueButton',
  props: {
    rootClassName: String,
    button: {
      type: String,
      default: 'Button',
    },
  },
}
</script>

<style scoped>
.primary-blue-button-container {
  display: flex;
  position: relative;
}
.primary-blue-button-button {
  color: var(--dl-color-gray-white);
  outline: none;
  font-size: 0.6rem;
  background: linear-gradient(310deg,#005d63,#21d4fd);
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
</style>
