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
    background: rgba(0, 0, 0, 0.25);
    z-index: 999;
    text-align: center;
    overflow: scroll;
  }
  div.modal-x-inner {
    display: inline-block;
    min-width: 300px;
    text-align: left;
    margin: 5em auto;
    padding: 0.5em;
    border-radius: 8px;
    border: 4px solid rgba(0,0,0,0.8);
    box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.3);
    background: #fff;
  }
  .modal-x-header {
    font-size: 1.4em;
    font-weight: bold;
  }
  .modal-x-content {
  }
</style>
