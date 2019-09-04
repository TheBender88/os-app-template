<template>
  <div>
    Comp-A : [{{ value }}]
  </div>
</template>

<script>
export default {
  name: 'CompA',
  props: {
    value: {
      type: [ String, Number ],
      default () {
        return 'aaa'
      },
    },
  },
}
</script>

<style scoped>
</style>
