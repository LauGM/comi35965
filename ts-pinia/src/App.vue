<script setup lang="ts">
  import {ref} from 'vue'
  import TsComponent from './components/TsComponent.vue';
  import { useProductoStore } from './store/ProductoStore';
  // antes del store
  // const talleSeleccionado=ref(44);

  //con el store
  const producto = useProductoStore();
</script>

<template>
  <!-- antes del store -->
  <!-- <TsComponent :talla="talleSeleccionado" @cambiar-talla="talleSeleccionado=$event"/> -->
  <!-- con store -->
  <TsComponent :talla="producto.talle" @cambiar-talla="producto.modificarTalla($event)"/>
</template>

<style scoped>

</style>
