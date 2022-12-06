<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- $props $refs -->
    <HelloWorld :msg="usuario"/>
    <!-- $emit -->
    <padre-prueba />
    <!-- slots -->
    <slot-prueba>
      <h3>Osito mediante slot</h3>
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpeluchesgigantes.com%2F31-home_default%2Fosito-peluche-personalizado.jpg&f=1&nofb=1&ipt=6ebe63b1f19d11d1fee73d32acc3437a7593609e1908c4c302b981c9eb614167&ipo=images">
      <p slot="precio">${{precio}}</p>
    </slot-prueba>
    <!-- filtros -->
    <filtros-prueba />
    <!-- filtro global -->
    <h4>{{frase | formatFrase}}</h4>
    <!-- mixins -->
    <con-mixin :fecha="new Date()" />
  </div>
</template>

<script>
import ConMixin from './components/ConMixin.vue'
import FiltrosPrueba from './components/FiltrosPrueba.vue'
import HelloWorld from './components/HelloWorld.vue'
import PadrePrueba from './components/PadrePrueba.vue'
import SlotPrueba from './components/SlotPrueba.vue'

export default {
  name: 'App',
  data(){
    return{
      usuario:{nombre:"José Luis Rivas",edad:34},
      precio:2399,
      frase:"Frase para filtro global"
    }
  },
  components: {
    HelloWorld,
    PadrePrueba,
    SlotPrueba,
    FiltrosPrueba,
    ConMixin
  }
}
</script>
,
    ConMixin
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
