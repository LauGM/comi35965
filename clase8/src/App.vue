<template>
  <div id="app">
    <img alt="Vue logo" class="logo-small" src="./assets/logo.jpg">
    <formulario-web />
  </div>
</template>

<script>
import FormularioWeb from './components/FormularioWeb.vue'

export default {
  name: 'App',
  components: {
    FormularioWeb
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo-small {
 width: 6em;
}
</style>
