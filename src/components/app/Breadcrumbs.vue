<template>
  <div id="app-breadcrumbs">
    <span
      :class="{
       'sidebar-toggle': true,
       'open': sidebarVisible,
      }"
      @click="$emit('toggle')"
    >
      ≡
    </span>
    <span
      v-for="(route, key) in matchedRoutes"
      :key="key"
      class="breadcrumb"
    >
      <router-link :to="{ name: route.name }">{{ route.meta.title }}</router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: 'AppBreadcrumb',
  props: {
    sidebarVisible: { type: Boolean, default () { return true } },
  },
  computed: {
    matchedRoutes () {
      return this?.$route?.matched?.length ? this.$route.matched : [{ name: 'Home', meta: { title: 'Home' } }]
    },
  },
  methods: {
    updateValue (event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>

<style scoped>
  #app-breadcrumbs {
    z-index: 99;
    position: fixed;
    left: 0;
    top: 50px;
    width: 100%;
    border-bottom: 1px solid darkblue;
    background: aliceblue;
    padding: 0.3em;
  }
  #app-breadcrumbs > span.breadcrumb:nth-child(n+2):before {
    content: '❯';
    margin: 0 0.5em;
  }
  #app-breadcrumbs a {
    color: #20a8d8;
    text-decoration: none;
    font-size: 1.1em;
  }
  #app-breadcrumbs a:hover {
    color: #167495;
    text-decoration: underline;
  }
  span.sidebar-toggle {
    cursor: pointer;
    display: inline-block;
    width: 1em;
    text-align: center;
    height: 20px;
    font-size: 2em;
    position: relative;
    top: -0.4em;
    vertical-align: middle;
  }
  span.sidebar-toggle.open {
    transform: rotate(90deg);
    transform-origin: bottom;
  }
</style>
