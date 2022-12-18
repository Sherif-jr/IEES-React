<template>
  <div class="page-container"></div>
</template>

<script>
export default {
  name: 'Page',
  metaInfo: {
    title: 'Page - IEES',
    meta: [
      {
        property: 'og:title',
        content: 'Page - IEES',
      },
    ],
  },
}
</script>

<style scoped>
.page-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
</style>
