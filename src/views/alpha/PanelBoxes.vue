<template>
  <div>
    PANEL BOXES

    <div class="spacer" />
    <div
      v-for="(type, i) in list"
      :key="`1/${i}`"
      :class="`box ${type}`"
    >{{ type + ': ' + sampleText }}</div>

    <div class="spacer" />
    <div
      v-for="(type, i) in list"
      :key="`2/${i}`"
      :class="`box dotted ${type}`"
    >{{ type + ': ' + sampleText }}</div>

    <div class="spacer" />
    <div
      v-for="(type, i) in list"
      :key="`3/${i}`"
      :class="`box dashed ${type}`"
    >{{ type + ': ' + sampleText }}</div>
  </div>
</template>

<script>
export default {
  name: 'AlphaOne',
  data () {
    return {
      sampleText: 'The quick brown fox jumps over the lazy dog',
      list: [
        'header',
        'plain',
        'default',
        'info',
        'success',
        'warning',
        'error',
      ],
    }
  },
}
</script>

<style scoped>
  div.spacer {
    margin-top: 1em;
  }
</style>
