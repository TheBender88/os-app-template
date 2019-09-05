<template>
  <div
    class="modal-x-outer"
    @click.self="cancel"
  >
    <div class="modal-x-inner">
      <div class="modal-x-header">
        <slot name="header" />
      </div>
      <div class="modal-x-content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueModalX',
  props: {},
  data () {
    return {}
  },
  methods: {
    cancel () {
      this.$emit('cancel')
    },
  },
}
</script>

<style scoped>
  div.modal-x-outer {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    text-align: center;
    overflow: scroll;
  }
  div.modal-x-inner {
    display: inline-block;
    min-width: 300px;
    text-align: left;
    border: 4px solid #00cc;
    border-radius: 4px;
    background: #eef;
    margin: 5em auto;
    padding: 0.5em;
  }
  .modal-x-header {
    font-size: 1.4em;
    font-weight: bold;
  }
  .modal-x-content {
  }
</style>
