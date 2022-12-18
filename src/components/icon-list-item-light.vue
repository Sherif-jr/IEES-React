<template>
  <div class="icon-list-item-light-container" v-bind:class="rootClassName">
    <div class="icon-list-item-light-container1">
      <svg viewBox="0 0 1024 1024" class="icon-list-item-light-icon">
        <path
          d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"
        ></path>
      </svg>
      <p class="icon-list-item-light-text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IconListItemLight',
  props: {
    rootClassName: String,
    text: {
      type: String,
      default: 'This is A list Item',
    },
  },
}
</script>

<style scoped>
.icon-list-item-light-container {
  width: 100%;
  height: auto;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.icon-list-item-light-container1 {
  fill: var(--dl-color-gray-white);
  color: var(--dl-color-gray-white);
  display: flex;
  transition: 0.3s;
  align-items: center;
}
.icon-list-item-light-container1:hover {
  fill: var(--dl-color-gray-black);
  color: var(--dl-color-gray-black);
}
.icon-list-item-light-icon {
  fill: inherit;
  width: var(--dl-size-size-triplequarterunit);
  height: var(--dl-size-size-triplequarterunit);
  margin-top: 0px;
  margin-right: var(--dl-space-space-halfunit);
  margin-bottom: 0px;
}
.icon-list-item-light-text {
  color: inherit;
  width: 100%;
  font-size: .9rem;
  text-align: left;
}






@media(max-width: 991px) {
  .icon-list-item-light-text {
    font-size: 0.8rem;
  }
}
</style>
