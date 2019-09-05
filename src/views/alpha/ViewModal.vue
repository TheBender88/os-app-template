<template>
  <div>
    Modal
    <button @click="showModal">Modal</button>
    <vue-modal-x
      v-show="modalVisible"
      @cancel="closeModal"
    >
      <template v-slot:header>
        MODAL HEADER
      </template>
      <template v-slot:content>
        Modal content
      </template>
    </vue-modal-x>
  </div>
</template>

<script>
export default {
  name: 'LoadingAnimation',
  components: {
    VueModalX: () => import(/* webpackChunkName: "VueModalX" */ '@/components/VueModalX'),
  },
  data () {
    return {
      modalVisible: false,
    }
  },
  methods: {
    showModal () {
      this.modalVisible = true
    },
    closeModal () {
      this.modalVisible = false
    },
  },
}
</script>

<style scoped>
</style>
