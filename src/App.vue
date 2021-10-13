<template>
  <div id="app">
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import NavBar from './components/nav-bar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
