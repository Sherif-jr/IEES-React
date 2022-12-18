<template>
  <div class="icon-list-item-dark-container" v-bind:class="rootClassName">
    <div class="icon-list-item-dark-container1">
      <svg viewBox="0 0 1024 1024" class="icon-list-item-dark-icon">
        <path
          d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"
        ></path>
      </svg>
      <p class="icon-list-item-dark-text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IconListItemDark',
  props: {
    text: {
      type: String,
      default: 'This is A list Item',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.icon-list-item-dark-container {
  width: 100%;
  height: auto;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.icon-list-item-dark-container1 {
  display: flex;
  align-items: center;
}
.icon-list-item-dark-icon {
  fill: var(--dl-color-primary-700);
  width: var(--dl-size-size-triplequarterunit);
  height: var(--dl-size-size-triplequarterunit);
  margin-top: 0px;
  margin-right: var(--dl-space-space-halfunit);
  margin-bottom: 0px;
}
.icon-list-item-dark-text {
  color: var(--dl-color-primary-700);
  width: 100%;
  font-size: .9rem;
  text-align: left;
}

.icon-list-item-dark-root-class-name1 {
  max-width: auto;
}




.icon-list-item-dark-root-class-name6 {
  max-width: auto;
}



.icon-list-item-dark-root-class-name10 {
  max-width: auto;
}



.icon-list-item-dark-root-class-name14 {
  max-width: auto;
}





.icon-list-item-dark-root-class-name20 {
  max-width: auto;
}




.icon-list-item-dark-root-class-name25 {
  max-width: auto;
}



.icon-list-item-dark-root-class-name29 {
  max-width: auto;
}




.icon-list-item-dark-root-class-name34 {
  max-width: auto;
}

.icon-list-item-dark-root-class-name36 {
  max-width: auto;
}

.icon-list-item-dark-root-class-name38 {
  max-width: auto;
}


.icon-list-item-dark-root-class-name41 {
  max-width: auto;
}



.icon-list-item-dark-root-class-name45 {
  max-width: auto;
}



.icon-list-item-dark-root-class-name49 {
  max-width: auto;
}

.icon-list-item-dark-root-class-name51 {
  max-width: auto;
}
.icon-list-item-dark-root-class-name52 {
  max-width: auto;
}


.icon-list-item-dark-root-class-name55 {
  max-width: auto;
}
.icon-list-item-dark-root-class-name56 {
  max-width: auto;
}
.icon-list-item-dark-root-class-name57 {
  max-width: auto;
}
@media(max-width: 991px) {
  .icon-list-item-dark-text {
    font-size: 0.8rem;
  }
}
@media(max-width: 767px) {
  .icon-list-item-dark-icon {
    width: var(--dl-size-size-unit);
    height: var(--dl-size-size-unit);
    margin-right: .25rem;
  }
  .icon-list-item-dark-text {
    font-size: .9rem;
  }
}
</style>
