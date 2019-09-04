<template>
  <div>
    TEMPLATE
    <div>My Val = {{ value }}</div>
    <div>My Num = {{ myNum }}</div>
    <div>My Str = {{ myStr }}</div>
    <div>My Str Rev = {{ myStrRev }}</div>
    <div>
      <button @click="buttonClick1">Button 1</button>
      <button @click="buttonClick2">Button 2</button>
    </div>
    <pre>Log:{{ '\n' + myLog.join('\n' )}}</pre>
    <simple-select-x
      :options="['one', 'two', 'three']"
    />
  </div>
</template>

<script>
export default {
  name: 'Blank',
  components: {
    SimpleSelectX: () => import(/* webpackChunkName: "SimpleSelectX" */ '@/components/SimpleSelectX'),
  },
  props: {
    value: {
      type: [ String, Number ],
      default () {
        return 'qwerty'
      },
    },
  },
  data () {
    return {
      myNum: 12345,
      myStr: 'The quick brown fox jumps over the lazy dog',
      myLog: [],
    }
  },
  computed: {
    myStrRev () {
      return this.myStr.split('').reverse().join('')
    },
  },
  watch: {
    myNum: function () {
      this.myLog.push((new Date()).toISOString() + ' :: myNum changed')
    },
  },
  methods: {
    buttonClick1 (event) {
      // this.$emit('input', event.target.value)
      this.myLog.push((new Date()).toISOString() + ' :: button 1 clicked')
    },
    buttonClick2 () {
      this.myNum++
    },
  },
  mounted () { if (process.env.NODE_ENV === 'development') console.log(`${this.$options.name}::mounted`) },
  activated () { if (process.env.NODE_ENV === 'development') console.log(`${this.$options.name}::activated`) },
  deactivated () { if (process.env.NODE_ENV === 'development') console.log(`${this.$options.name}::deactivated`) },
  beforeRouteUpdate (to, from, next) {
    process.env.NODE_ENV === 'development' && console.log(`${this.$options.name}::beforeRouteUpdate`)
    next()
  },
  beforeRouteLeave (to, from, next) {
    process.env.NODE_ENV === 'development' && console.log(`${this.$options.name}::beforeRouteLeave`)
    next()
  },
}
</script>

<style scoped>

</style>
