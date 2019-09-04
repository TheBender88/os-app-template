<template>
  <select
    :value="value"
    @input="updateValue"
    @change="updateValue"
  >
    <option
      v-for="(option, key) in options"
      :key="key"
      :value="useKeysAsValue ? key : option"
    >
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'SimpleSelectX',
  props: {
    value: {
      type: [ String, Number ],
      default () {
        return ''
      },
    },
    options: {
      type: [ Array, Object ],
      default () {
        return []
      },
    },
    useKeysAsValue: {
      type: Boolean,
      default () {
        return false
      },
    },
  },
  methods: {
    updateValue (event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>
