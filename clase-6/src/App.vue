<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="mensaje"/>
    <BuscadorWeb :lista="productos"/>
    <watcher-prueba />
    <ComponenteVgc />
  </div>
</template>

<script>
import ComponenteVgc from './components/ComponenteVgc.vue'
import BuscadorWeb from './components/BuscadorWeb.vue'
import HelloWorld from './components/HelloWorld.vue'
import WatcherPrueba from './components/WatcherPrueba.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    BuscadorWeb,
    WatcherPrueba,
    ComponenteVgc
  },
  data:function(){
    return{
      mensaje:"Buscador de productos",
      productos:[
        {
          id:1,
          nombre:"Mouse"
        },
        {
          id:2,
          nombre:"Teclado"
        }
      ]
    }
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
