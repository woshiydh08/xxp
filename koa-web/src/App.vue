<template>
  <div id="app">
    <top-nav />
    <router-view class="view" />
    <tabbar />
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'
import Tabbar from './components/Tabbar.vue'

export default {
  name: 'App',
  components: {
    TopNav,
    Tabbar
  }
}
</script>

<style scoped lang="less">
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
  .view {
    margin-top: 1rem;
  }
}
</style>
