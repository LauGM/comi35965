<template>
    <v-container>
        <v-row class="text-center">
            <v-col>
                <h1>Libros</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="(libro,index) of obtenerLibros" :key="index">
                <tarjeta-componente :libro="libro"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import TarjetaComponente from '@/components/TarjetaComponente.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'AboutComponent',
    components:{TarjetaComponente},

    data() {
        return {
            
        };
    },

    created() {
        this.getApi();
    },

    methods: {
        ...mapActions(['getApi'])
    },
    computed:{
        ...mapGetters(['obtenerLibros'])
    }
};
</script>

<style scoped>

</style>