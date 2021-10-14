<template>
  <div id="app">
    <nav-bar></nav-bar>
    <banner></banner>
  </div>
</template>

<script>
import Banner from './components/banner.vue'
import NavBar from './components/nav-bar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Banner
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
