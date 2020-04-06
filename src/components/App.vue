<template>
  <div id="app">

    <!-- HEADER -->
    <header>
      <span v-if="headerLogo" class="logo">
        <img :src="headerLogo" width="94" height="50">
      </span>
      <span class="title">
        {{ headerTitle }}
      </span>
      <span class="user">
        <span style="font-weight: bold;">
          {{ headerUser }}
        </span>
        <span style="font-style: italic;">
          {{ headerProfile }}
        </span>
      </span>
    </header>

    <!-- BREADCRUMBS -->
    <app-breadcrumbs
      :sidebar-visible="sidebarVisible"
      @toggle="sidebarVisible = !sidebarVisible"
    />

    <!-- SIDEBAR -->
    <app-sidebar
      v-if="sidebarVisible"
      :sidebar-links="sidebarLinks"
    />

    <!-- APP CONTENT -->
    <div id="app-content" :class="sidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'">
      <router-view />
    </div>

    <!-- FOOTER -->
    <footer>
      <span>{{ footerTitle }}</span>
      <span>v{{ version }}</span>
    </footer>

  </div>
</template>

<script>
import AppBreadcrumbs from './app/Breadcrumbs'
import AppSidebar from './app/Sidebar'
export default {
  name: 'App',
  components: {
    AppBreadcrumbs,
    AppSidebar,
  },
  props: {
    version: { type: String, default () { return '0.0.1' } },
    headerLogo: { type: String, default () { return '' } },
    headerTitle: { type: String, default () { return 'HEADER TITLE' } },
    headerUser: { type: String, default () { return 'User' } },
    headerProfile: { type: String, default () { return 'Profile' } },
    footerTitle: { type: String, default () { return 'FOOTER TITLE' } },
    sidebarLinks: { type: Array, default () { return [] } },
    sidebarVisible: { type: Boolean, default () { return true } },
  },
}
</script>

<style scoped>
  #app {
    /*margin: 50px 0 20px 0;*/
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*height: 100vh;*/
    /*background: white;*/
  }
  header, footer {
    z-index: 100;
    position: fixed;
    left: 0;
    width: 100%;
    padding: 0;
    overflow: hidden;
    color: darkslategray;
    background: whitesmoke;
    text-align: center;
  }
  header {
    top: 0;
    border-bottom: 3px solid #094;
  }
  header span.logo {
    position: absolute;
    left: 1em;
  }
  header span.logo > img {
    vertical-align: middle;
  }
  header span.title {
    line-height: 48px;
    font-size: 2rem;
    font-weight: bold;
  }
  header span.title > span.warning {
    color: #900;
    font-style: italic;
    font-size: 0.7em;
    font-weight: normal;
    vertical-align: bottom;
  }
  header span.user {
    position: absolute;
    right: 0.5em;
    line-height: 24px;
    text-align: right;
  }
  span.user > span {
    display: block;
  }
  footer {
    bottom: 0;
    border-top: 3px solid #094;
  }
  footer > span {
    margin: 0 0.5rem;
  }
  footer > button {
    margin: 0 0.5rem;
    padding: 0;
    border: 1px solid #999;
  }
  #app-content.sidebar-hidden {
    padding-left: 0;
  }
  #app-content {
    padding: 84px 0 30px 180px;
    margin: 0.2em 0.5rem 1rem 0.5rem;
  }
</style>
