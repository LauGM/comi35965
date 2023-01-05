<script setup>
import { ref, onBeforeUpdate } from 'vue';
    //estatico
    const titulo2="Soy otro titulo";
    //dinamico
    let clicks = ref(0);
    const aumentar=()=>{clicks.value++}
    onBeforeUpdate(()=>{
        console.log("El valor de clicks antes de actualizar:" + clicks.value)
    })
</script>

<template>
    <h1>Hola Vue 3</h1>
    <h2>{{ titulo2 }}</h2>
    <p>{{ clicks }}</p>
    <button @click="aumentar()">Contar clicks</button>
</template>

<style scoped>

</style>