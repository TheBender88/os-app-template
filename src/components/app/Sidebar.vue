<template>
  <div id="app-sidebar">
    <sidebar-link
      v-for="(link, key) in sidebarLinks"
      :key="key"
      :link="link"
    />
  </div>
</template>

<script>
import SidebarLink from './SidebarLink'
export default {
  name: 'AppSidebar',
  components: {
    SidebarLink,
  },
  props: {
    sidebarLinks: {
      type: Array,
      default () {
        return []
      },
    },
  },
}
</script>

<style scoped>
  #app-sidebar {
    position: fixed;
    left: 0;
    top: 84px;
    height: 100%;
    padding: 0.2rem 0.2rem 0.5rem 0.2rem;
    width: 180px;
    border-right: 4px double #094;
    background: white;
  }
</style>
