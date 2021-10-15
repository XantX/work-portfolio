<template>
  <div id="app">
    <nav-bar></nav-bar>
    <banner></banner>
    <about-me></about-me>
    <experience></experience>
  </div>
</template>

<script>
import AboutMe from './components/about-me.vue'
import Banner from './components/banner.vue'
import Experience from './components/experience.vue'
import NavBar from './components/nav-bar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Banner,
    Experience,
    AboutMe
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Montserrat,'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
