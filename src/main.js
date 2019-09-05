import Vue from 'vue'
import router from './router'
import store from './store'
import App from './components/App'
import './components/app/css/main.css'
// import App from '/work/code/vue-components-x/src/components/App'
// import '@riophae/vue-treeselect/dist/vue-treeselect.css' // TreeSelect styles

Vue.component('LoadingAnimationX', () => import(/* webpackChunkName: "LoadingAnimationX" */ '@/components/LoadingAnimationX'))
// Vue.component('VueTreeselect', () => import(/* webpackChunkName: "VueTreeselect" */ '@riophae/vue-treeselect'))
// Vue.component('VueModalX', () => import(/* webpackChunkName: "VueModalX" */ '@/components/VueModalX'))
// Vue.component('VueDatepickerX', () => import(/* webpackChunkName: "VueModalX" */ '@/components/VueDatepickerX'))
/* Vue-Components-X */
// Vue.component('SimpleSelectX', () => import(/* webpackChunkName: "SimpleSelectX" */ '/work/code/vue-components-x/src/components/SimpleSelectX'))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App, {
    props: {
      version: process.env.VUE_APP_VERSION,
      headerLogo: 'app-logo.png',
      headerTitle: process.env.VUE_APP_HEADERTITLE + (process.env.NODE_ENV === 'development' ? ' (** DEV **)' : ''),
      headerUser: store.state.App.Login.name,
      headerProfile: store.state.App.Login.profile,
      footerTitle: 'DIV | ORG | APP',
      sidebarLinks: [
        { name: 'Home', path: 'home' },
        { name: 'Examples Alpha', path: 'alpha', children: [
          { name: 'Panel Boxes', path: 'boxes' },
          { name: 'Store Rest Api', path: 'store' },
          { name: 'OS Loading Animation', path: 'loading' },
          { name: 'Modal', path: 'modal' },
          { name: 'Datepicker', path: 'datepicker' },
        ] },
        { name: 'Examples Beta', path: 'beta', children: [
          { name: 'One', path: '1' },
          { name: 'Two', path: '2' },
          { name: 'Three', path: '3' },
        ] },
        { name: 'Help', path: 'help' },
        { name: 'Template', path: 'template' },
      ],
    },
  }),
}).$mount('#app')
