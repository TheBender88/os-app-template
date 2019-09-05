<template>
  <div>
    Datepicker
    <div>
      <vue-datepicker-x
        v-model="date1"
      />
      Date1 = [{{ date1 }}]
    </div>
    <div>
      <vue-datepicker-x
        v-model="date2"
        type="datetime"
        :min-date="new Date()"
      />
      Date2 = [{{ date2 }}]
    </div>
  </div>
</template>

<script>
export default {
  name: 'Datepicker',
  components: {
    VueDatepickerX: () => import(/* webpackChunkName: "VueDatepickerX" */ '@/components/VueDatepickerX'),
  },
  data () {
    return {
      date1: null,
      date2: null,
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
