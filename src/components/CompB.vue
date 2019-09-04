<template>
  <div :style="`border: ${2}px dotted #000;`">
    Comp-B : [{{ value }}]
  </div>
</template>

<script>
export default {
  name: 'CompB',
  props: {
    value: {
      type: [ String, Number ],
      default () {
        return 'bbb'
      },
    },
  },
}
</script>

<style scoped>
</style>
