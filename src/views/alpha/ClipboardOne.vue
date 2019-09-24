<template>
  <div>
    Clipboard testing

    <table>
      <tr>
        <td>{{ text[0] }}</td>
        <td>{{ clip[0] }}</td>
        <td>
          <button @click="clipRead(0)">Paste from clipboard</button>
          <button @click="clipWrite(0)">Copy to clipboard</button>
        </td>
      </tr>
      <tr>
        <td>{{ text[1] }}</td>
        <td>{{ clip[1] }}</td>
        <td>
          <button @click="clipRead(1)">Paste from clipboard</button>
          <button @click="clipWrite(1)">Copy to clipboard</button>
        </td>
      </tr>
    </table>

    <input id="input1" />
    <button @click="tryPaste">Try Paste</button>

    <pre>{{ log }}</pre>

  </div>
</template>

<script>
import * as clipboard from 'clipboard-polyfill'
export default {
  name: 'ClipboardOne',
  data () {
    return {
      text: [
        'The quick brown fox jumps over the lazy dog',
        'Pack my box with five dozen liquor jugs',
      ],
      clip: [
        '. . . . .',
        '. . . . .',
      ],
      log: [],
    }
  },
  mounted () {
    console.log('!! mounted !!')
    document.addEventListener('paste', function (e) {
      console.log(e)
      console.log(e.clipboardData.getData('text/plain'))
      if (e.clipboardData.types.indexOf('text/html') > -1) {
        let oldData = e.clipboardData.getData('text/html')
        let newData = '<b>Oh Yeah!</b> ' + oldData
        document.execCommand(newData)
        e.preventDefault()
      }
    })
  },
  methods: {
    clipRead (i) {
      clipboard.readText()
        .then(text => {
          this.$set(this.clip, i, text)
          const ts = (new Date()).toISOString()
          this.log.push(`[${ts}] clipboard read '${text}'`)
        })
        .catch(err => { console.error(err) })
    },
    clipWrite (i) {
      clipboard.writeText(this.text[i])
        .then(res => {
          const ts = (new Date()).toISOString()
          this.log.push(`[${ts}] clipboard write '${this.text[i]}'`)
        })
        .catch(err => { console.error(err) })
    },
    tryPaste (e) {
      // console.log(this)
      // console.log(e)
      document.getElementById('input1').focus()
      this.$nextTick(() => document.execCommand('paste'))
      // document.execCommand('paste')
    },
  },
}
</script>

<style scoped>
</style>
