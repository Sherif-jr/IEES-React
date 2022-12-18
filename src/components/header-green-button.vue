<template>
  <div class="header-green-button-container" v-bind:class="rootClassName">
    <button class="header-green-button-button">{{ button }}</button>
  </div>
</template>

<script>
export default {
  name: 'HeaderGreenButton',
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
.header-green-button-container {
  display: flex;
  position: relative;
}
.header-green-button-button {
  color: var(--dl-color-gray-white);
  outline: none;
  font-size: 0.78rem;
  background:  linear-gradient( 310deg ,#005d63,#82bb27);
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

@media(max-width: 767px) {
  .header-green-button-button {
    font-size: .6rem;
  }
}
@media(max-width: 479px) {
  .header-green-button-button {
    display: none;
  }
}
</style>
