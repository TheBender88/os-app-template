<template>
  <div>
    OS Loading Animations
    <div
      v-for="(size, i) in sizes"
      :key="i"
      :style="`height: ${size + 2}px; width: ${size + 2}px;`"
      class="loader"
    >
      <loading-animation-x :size="size" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingAnimation',
  data () {
    return {
      sampleText: 'The quick brown fox jumps over the lazy dog',
      sizes: [ 25, 50, 100, 200 ],
    }
  },
}
</script>

<style scoped>
  .loader {
    border: 1px dashed #999;
    margin: 1em 0;
  }
</style>
