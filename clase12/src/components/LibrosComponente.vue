<template>
    <div>
        <p v-for="(libro,index) of obtenerLibros" :key="index">{{ libro.title }}</p>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: 'LibrosComponente',

    data() {
        return {
            
        };
    },

    created() {
       this.getApi(); 
    },

    computed:{
        ...mapGetters('moduloLibros',['obtenerLibros'])
    },

    methods: {
        ...mapActions('moduloLibros',['getApi'])
    },
};
</script>

<style scoped>

</style>