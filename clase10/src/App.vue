<template>
  <div id="app">
    <nuevo-regalo />
    <regalos-componente />
    <eliminar-regalo />
  </div>
</template>

<script>
import EliminarRegalo from './components/EliminarRegalo.vue'
import NuevoRegalo from './components/NuevoRegalo.vue'
import RegalosComponente from './components/RegalosComponente.vue'

export default {
  name: 'App',
  components: {
    RegalosComponente,
    NuevoRegalo,
    EliminarRegalo
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
</style>
