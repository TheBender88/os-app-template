import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'Home', meta: { title: 'Home' }, component: Home },
    {
      path: '/alpha',
      name: 'Alpha',
      meta: { title: 'Examples Alpha' },
      component: () => import(/* webpackChunkName: "Alpha" */ './views/Alpha.vue'),
      children: [
        {
          path: 'boxes',
          name: 'PanelBoxes',
          meta: { title: 'Panel Boxes' },
          component: () => import(/* webpackChunkName: "PanelBoxes" */ './views/alpha/PanelBoxes.vue'),
        },
        {
          path: 'store',
          name: 'StoreRestApi',
          meta: { title: 'Store Rest Api' },
          component: () => import(/* webpackChunkName: "StoreRestApi" */ './views/alpha/StoreRestApi.vue'),
        },
        {
          path: 'loading',
          name: 'LoadingAnimation',
          meta: { title: 'OS Loading Animation' },
          component: () => import(/* webpackChunkName: "LoadingAnimation" */ './views/alpha/LoadingAnimation.vue'),
        },
        {
          path: 'modal',
          name: 'ViewModal',
          meta: { title: 'Modal' },
          component: () => import(/* webpackChunkName: "Modal" */ './views/alpha/ViewModal.vue'),
        },
        {
          path: 'datepicker',
          name: 'Datepicker',
          meta: { title: 'Date Picker' },
          component: () => import(/* webpackChunkName: "Datepicker" */ './views/alpha/Datepicker.vue'),
        },
      ],
    },
    {
      path: '/beta',
      name: 'Beta',
      meta: { title: 'Examples Beta' },
      component: () => import(/* webpackChunkName: "Beta" */ './views/Blank.vue'),
      children: [
        {
          path: '1',
          name: 'BetaOne',
          meta: { title: 'One' },
          component: () => import(/* webpackChunkName: "Beta" */ './views/Blank.vue'),
        },
        {
          path: '2',
          name: 'BetaTwo',
          meta: { title: 'Two' },
          component: () => import(/* webpackChunkName: "Beta" */ './views/Blank.vue'),
        },
        {
          path: '3',
          name: 'BetaThree',
          meta: { title: 'Three' },
          component: () => import(/* webpackChunkName: "Beta" */ './views/Blank.vue'),
        },
      ],
    },
    {
      path: '/template',
      name: 'Template',
      meta: { title: 'Template' },
      component: () => import(/* webpackChunkName: "Template" */ './views/Template.vue'),
    },
    {
      path: '/help',
      name: 'Help',
      meta: { title: 'Help' },
      component: () => import(/* webpackChunkName: "Help" */ './views/Help.vue'),
    },
  ],
})
