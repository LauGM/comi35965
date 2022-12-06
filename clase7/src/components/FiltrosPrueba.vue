<template>
    <div>
        <h1>Lista de precios redondeados</h1>
        <p v-for="(precio,index) of listaPrecios" :key="index">$ {{precio | redondear}}</p>
    </div>
</template>

<script>
export default {
    name: 'FiltrosPrueba',

    data() {
        return {
            listaPrecios:[1299.99995555,10870.89, 34000, 9899.9090]
        };
    },
    filters: {
       redondear:(precio)=>{
        return precio.toFixed(3);
       } 
    },
};
</script>