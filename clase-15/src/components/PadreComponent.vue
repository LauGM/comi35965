<script setup>
import { ref, computed } from 'vue';
import HijoComponent from './HijoComponent.vue';

    const precio=ref(0);
    const calcularIva = computed(()=> precio.value * 1.21);
</script>

<template>
    <input v-model="precio" type="number" name="" id="" placeholder="Ingrese precio">
    <p>Precio con iva $ {{ calcularIva }}</p>
    <HijoComponent titulo="Soy titulo de componente hijo">
        <template #encabezado>
            <h2>Titulo template encabezado</h2>
        </template>
        <template #principal>
            <p>Un parrafo del template principal</p>
        </template>
    </HijoComponent>
</template>

<style scoped>

</style>