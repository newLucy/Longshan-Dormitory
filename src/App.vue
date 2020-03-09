<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
  }
}
</script>

<style>
#app {
  font-family: Arial, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
/*.fade-transform-enter-active, .fade-transform-leave-active {
  transition: opacity .5s;
}
.fade-transform-enter, .fade-transform-leave-to {
  opacity: 0;
}
.tab-fade-transform-enter-active, .tab-fade-transform-leave-active {
  transition: opacity .1s;
}
.tab-fade-transform-enter, .tab-fade-transform-leave-to {
  opacity: 0;
}*/
</style>
