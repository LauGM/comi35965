<template>
    <div>
        <h4>{{titulo}}</h4>
        <input type="text" v-model="nuevaFrase">
        <button class="btn btn-dark" @click="enviar()">Enviar</button>
    </div>
</template>

<script>
export default {
    name: 'HijoPrueba',
    props:{
        titulo:String
    },
    data() {
        return {
            nuevaFrase:''
        };
    },


    methods: {
        enviar(){
            this.$emit("enviar",this.nuevaFrase);
        }
    },
};
</script>

<style scoped>

</style>