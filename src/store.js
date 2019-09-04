import Vue from 'vue'
import Vuex from 'vuex'
import App from './store/App'

Vue.use(Vuex)

const state = {}

const store = new Vuex.Store({
  state,
  modules: {
    App,
  },
})

// store.dispatch('App/RestApi', {
//   n: 'Login',
//   a: 'Login',
// })

if (module.hot) {
  // accept actions and mutations as hot modules
  module.hot.accept([
    './store/App',
  ], () => {
    // require the updated modules
    // have to add .default here due to babel 6 module output
    const newModuleApp = require('./store/App').default
    // swap in the new modules and mutations
    store.hotUpdate({
      modules: {
        App: newModuleApp,
      },
    })
  })
}

export default store
