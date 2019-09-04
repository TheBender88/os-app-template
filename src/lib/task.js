const get = (obj, props) =>
  props.reduce((xs, x) =>
    xs && xs.hasOwnProperty(x) ? xs[x] : null, obj
  )

const Task = class Task {
  constructor (params) {
    this.isActive = false
    this.lastRun = 0
    this.error = false
    this.minReloadTime = params?.minReloadTime || 0
  }

  canRun () {
    // Check if active
    if (this.isActive) return 'task is already active'

    // Check if min reload time passed
    if (this.minReloadTime > 0 && this.lastRun > 0) {
      const timeSinceLastRun = parseInt(((new Date()).getTime() - this.lastRun) / 1000)
      if (timeSinceLastRun < this.minReloadTime) return `min reload time has not passed (${timeSinceLastRun} < ${this.minReloadTime})`
    }

    return true
  }

  isTimeThrottled (minTime) {
    // minTime in seconds
    return ((new Date()).getTime() - this.lastRun < (minTime * 1000))
  }

  setStatus ({ status, error, nodeData, data }) {
    switch (status) {
      case 'PENDING':
        this.error = false
        this.lastRun = (new Date()).getTime()
        this.isActive = true
        break
      case 'FAILURE':
        this.error = error
        this.isActive = false
        break
      case 'SUCCESS':
        if (nodeData !== undefined && data !== undefined) Object.assign(nodeData, data)
        this.isActive = false
        break
    }
  }

  processResult ({ commit, response, nodeName, nodeData }) {
    let errors = []
    do {
      if (typeof (response.data) !== 'object') {
        errors.push('Invalid response from server (error 1)')
        break
      }
      if (response.data.hasOwnProperty('status') === false) {
        errors.push('Invalid response from server (error 2)')
        break
      }
      if (response.data.status === false) {
        if (Array.isArray(get(response, ['data', 'messages', 'errors']))) {
          errors = errors.concat(response.data.messages.errors)
          break
        }
        // check messages.error
        // check messages.warning
        // check messages.info
        errors.push('Error received from server')
        break
      }
      if (response.data.hasOwnProperty('data') && typeof (response.data.data) !== 'object') {
        errors.push('Invalid response from server (error 3)')
        break
      }
    } while (false)
    if (errors.length > 0) {
      commit(nodeName, { nodeName, nodeTask: this, nodeData, status: 'FAILURE', error: errors.join('\n') })
      return false
    } else {
      commit(nodeName, { nodeName, nodeTask: this, nodeData, status: 'SUCCESS', data: response.data.data })
      return true
    }
  }
}

export default Task
