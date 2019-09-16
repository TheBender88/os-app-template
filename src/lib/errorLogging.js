const errorHandlerVue = ({ withCredentials = false, env }) => (err, vm, info) => {
  env === 'development' && console.error(err)
  const data = {
    a: 'err',
    name: err.name,
    message: err.message,
    stack: err.stack,
    source: {
      name: vm.$route.name,
      fullPath: vm.$route.fullPath,
      info,
    },
  }
  const http = new XMLHttpRequest()
  http.open('POST', process.env.VUE_APP_API_BASE_URL + (withCredentials ? 'z/' : ''))
  http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  http.setRequestHeader('Accept', 'application/json')
  http.withCredentials = withCredentials
  http.send(JSON.stringify(data))
}

export default errorHandlerVue
