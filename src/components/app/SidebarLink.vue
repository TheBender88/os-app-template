<template>
  <ul
    v-if="checkRole"
    :class="'level-' + depth"
  >
    <router-link
      tag="li"
      :to="fullPath"
    >
      <a
        :class="{
          'my-router-link-exact': pathMatches,
        }"
      >
        {{ link.name }}
      </a>
      <component
        :is="link.component"
        v-if="link.component"
      />
      <SidebarLink
        v-for="(child, key) in link.children"
        :key="key"
        :link="child"
        :parent-path="[...parentPath, link.path]"
        :depth="depth + 1"
      />
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'SidebarLink',
  props: {
    link: {
      type: Object,
      default () {
        return {
          name: 'HOME',
          path: '/',
          children: [],
        }
      },
    },
    parentPath: {
      type: Array,
      default () {
        return []
      },
    },
    depth: {
      type: Number,
      default () {
        return 0
      },
    },
  },
  computed: {
    fullPath () {
      return ['', ...this.parentPath, this.link.path].join('/')
    },
    currentPath () {
      // return Tools.get(this.$route.matched.slice(-1), [0, 'path'])
      return this?.$route?.matched.slice(-1)?.[0]?.path
    },
    pathMatches () {
      return this.fullPath === this.currentPath
    },
    checkRole () {
      if (!this.link.role) return true
      let obj = this.$store.state.App.Login?.roles || []
      for (let i = 0; i < this.link.role.length; i++) {
        if (!obj[this.link.role[i]]) return false
        obj = obj[this.link.role[i]]
      }
      return obj
    },
  },
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  ul.level-0 {
    padding: 0.3em 0;
    border-bottom: 1px solid darkblue;
  }
  li {
    list-style-type: none;
  }
  ul.level-0 > li > a {
    font-weight: bold;
    text-transform: uppercase;
    padding: 0.3em 0;
  }
  ul:not(.level-0) {
    padding-left: 0.5rem;
  }
  ul.level-2 {
    font-size: 0.9em;
  }
  li.router-link-active > ul.level-2 {
    display: list-item;
  }
  a {
    color: darkslategray;
    text-decoration: none;
    font-size: 1.1em;
  }
  a:hover {
    color: #42b883;
    font-style: italic;
  }
  li.router-link-exact-active {
    border-right: 5px solid #42b883;
  }
  a.my-router-link-exact,
  li.router-link-exact-active > a {
    color: #42b883;
    font-weight: bold;
  }
</style>
