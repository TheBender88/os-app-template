<template>
  <VueDatepickerLocal
    v-model="selectedDate"
    :format="formatComputed"
    :clearable="true"
    :local="dateWidgetLocale"
    :class="{
      'width-med': type === 'datetime',
    }"
    :disabled-date="disabledDate"
    range-separator=" ~ "
    @input="updateValue"
    @change="updateValue"
  />
</template>

<script>
export default {
  name: 'VueDatepickerX',
  components: {
    VueDatepickerLocal: () => import(/* webpackChunkName: "VueDatepickerLocal" */ 'vue-datepicker-local'),
  },
  props: {
    value: {
      type: [ String, Date, Array ],
      default () {
        return null
      },
    },
    format: {
      type: String,
      default () {
        return 'YYYY-MM-DD'
      },
    },
    type: {
      type: String,
      default () {
        return 'date'
      },
    },
    minDate: {
      type: Date,
      default () {
        return null
      },
    },
  },
  data () {
    return {
      selectedDate: this.value,
      dateWidgetLocale: {
        dow: 1, // Start of week is Monday
        weeks: [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ],
        hourTip: 'Hour ?',
        minuteTip: 'Minute ?',
        secondTip: 'Second ?',
        // yearSuffix: ' - ',
        monthsHead: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
        months: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
        // months: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ],
        cancelTip: 'Cancel ?',
        submitTip: 'Submit ?',
      },
    }
  },
  computed: {
    formatComputed () {
      switch (this.type) {
        case 'date':
          return 'YYYY-MM-DD'
        case 'datetime':
          return 'YYYY-MM-DD HH:mm:ss'
        default:
          return this.format
      }
    },
  },
  watch: {
    'value': function () {
      this.selectedDate = this.value
    },
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    },
    disabledDate (time) {
      if (this.minDate) {
        if (time.toISOString().slice(0, 10) < this.minDate.toISOString().slice(0, 10)) return true
      }
      return false
    },
  },
}
</script>

<style scoped>
  .datepicker {
    width: 8em;
  }
  .width-med {
    width: 11em;
  }
</style>
<style>
  div.datepicker-range {
    font-size: 1.0rem;
  }
  div.datepicker-range div.datepicker-popup {
    /*display: table-row;*/
    width: 415px;
  }
</style>
