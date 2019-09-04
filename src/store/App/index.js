'use strict'

import * as actions from './actions'
// import * as getters from './getters'
import * as mutations from './mutations'
// import * as objectTemplates from './objectTemplates'
import Task from '@/lib/task'

export default {
  namespaced: true,
  actions,
  // getters,
  mutations,
  state: {
    Login: {
      task: new Task(),
      user: 'guest',
      name: 'Guest',
      profile: 'View',
      roles: {},
    },
  },
}
