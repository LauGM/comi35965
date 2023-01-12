<script setup lang="ts">
import {ref,reactive} from 'vue'
const medidas = [38, 40, 42, 44, 46, 48];
const props = defineProps<{
    talla: number
}>();
const emits = defineEmits<{
    (evento: 'cambiarTalla', valor: number): void
}>()

const nombre=ref("Lau");

function cambiarNombre(nombre2: string):void{
    nombre.value=nombre2
}

// interface ProdInfo{
//     id:number,
//     name:string
// }

// const producto:ProdInfo = reactive({
//     id:1,
//     name:"Remera de bugs bunny"
// })

</script>

<template>
    <h2>Selecciona la talla, {{ nombre }}</h2>
    <button @click="cambiarNombre('Pepe')">Cambiar a Pepe</button>
    <div>
        <button 
            v-for="(medida, index) of medidas" :key="index" 
            :class="{ 'activa': props.talla == medida }"
            @click='emits("cambiarTalla",medida)'
        >{{
            medida
        }}</button>
    </div>
</template>

<style scoped>
button {
    margin: 3px;
}

.activa {
    background-color: azure;
    color: black;
}
</style>