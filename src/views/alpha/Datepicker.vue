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
    <div>
      <vue-datepicker-x
        v-model="date3"
        type="date"
      />
      Date3 = [{{ date3 }}]
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
      // date2: null,
      // date2: '2019-11-13 10:13:55',
      // date2: '2019-11-13T13:05:40.939Z',
      // date2: '2019-10-08T11:51:13Z',
      // date2: '2019-10-08T11:51:13+02:00',
      date2: '2019-10-14T14:03:00+02:00',
      date3: '2019-11-13 10:13:55',
      // date2: '1573649238974',
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
