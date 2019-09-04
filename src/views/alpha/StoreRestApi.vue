<template>
  <div>
    <div>
      Store Rest Api
      <button @click="doLogin" :disabled="login.task.isActive"
      >Store Rest Api</button>
      <loading-animation-x
        v-if="login.task.isActive"
        :size="25"
      />
    </div>

    <div class="box info">{{ login }}</div>

    <div class="box error" v-if="login.task.error">{{ login.task.error }}</div>

    <div class="box default">{{ eventLog.join('\n') }}</div>

  </div>
</template>

<script>
export default {
  name: 'StoreRestApi',
  data () {
    return {
      eventLog: [],
    }
  },
  computed: {
    login () { return this.$store.state.App.Login },
  },
  methods: {
    doLogin () {
      this.eventLog.push((new Date()).toISOString() + ' :: API Request')
      this.$store.dispatch('App/RestApi', {
        n: 'Login',
        a: 'Login',
      })
        .then(res => {
          console.log(res)
          this.eventLog.push((new Date()).toISOString() + ` :: API Response [${res}]`)
        })
    },
    button2 () {
      console.log('button2')
    },
  },
}
</script>

<style scoped>

</style>
