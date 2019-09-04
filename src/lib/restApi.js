import axios from 'axios'

const RestApiGenerator = (httpParamsTemplate) => ({ state, commit, dispatch }, params = {}) => {
  // params
  // a: action
  // m: method [get|post]
  // n: node name

  return new Promise((resolve, reject) => {

    // Check if node exists in state
    const node = state[params.n]
    if (node) {
      // Check if task exists
      if (node.task) {
        const canRun = node.task.canRun()
        if (canRun !== true) {
          const msg = `RestApi: [${params.n}]: ` + canRun
          process.env.NODE_ENV === 'development' && console.log(msg)
          return resolve(false)
        }
        node.task.setStatus({ status: 'PENDING' })
      }
    }

    // Generate HTTP Parameters
    const isPostMethod = params.m === 'post'
    const withCredentials = params.z & 1
    const httpParams = Object.assign(
      {},
      params,
      httpParamsTemplate,
    );
    [ 'm', 'n', 'z' ].forEach(k => delete httpParams[k])

    // Send GET/POST request
    axios({
      method: isPostMethod ? 'post' : 'get',
      url: process.env.VUE_APP_API_BASE_URL + (withCredentials ? 'z/' : ''),
      withCredentials,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: isPostMethod ? {} : httpParams,
      data: isPostMethod ? httpParams : {},
    })
      .then(response => {
        if (node) {
          const result = node.task.processResult({ commit, response, nodeName: 'RestApi', nodeData: node })
          return resolve(result)
        }
        return resolve(response.data)
      })
      .catch(error => {
        if (node) {
          node.task.setStatus({ status: 'FAILURE', error: error.message })
          return resolve(false)
        }
        return reject(error)
      })
      .finally(() => {
        // return resolve(true)
      })
  })
}

export default RestApiGenerator
