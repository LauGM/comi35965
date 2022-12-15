<template>
    <!-- con fetch -->
    <div class="container">
        <h1>Lista de regalos navideños</h1>
        <div class="card-deck row">
            <carta-regalo v-for="(regalo,index) of regalos" :key="index" :regalo="regalo"></carta-regalo>
        </div>
    </div>
</template>

<script>
import CartaRegalo from "./CartaRegalo.vue";

export default {
    components: { CartaRegalo },
    name: 'RegalosComponente',

    data() {
        return {
            regalos:[]
        };
    },
    created(){
        const URLGET="https://63987b46fe03352a94d2992f.mockapi.io/regalos";
        //fetch recibe una URL y si no aclaramos nada respecto al metodo es un GET
        //funciona mediante promesas
        fetch(URLGET)
            .then(response => response.json())
            .then(data => {
                this.regalos = data;
                console.log(this.regalos);
            })
    }

};
</script>

<style lang="scss" scoped>

</style>