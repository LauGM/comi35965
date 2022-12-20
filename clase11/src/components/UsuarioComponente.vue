<template>
    <div>
       <p>Bienvenido/a {{ $store.getters.getUsuActivo }}</p> 
       <button class="btn btn-danger" @click="desloguear()">Log-Out</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name: 'UsuarioComponente',

    data() {
        return {
            
        };
    },

    methods: {
        ...mapMutations(['desloguearUsuario']),
        desloguear(){
            this.desloguearUsuario();
            this.$router.push('/');
        }
    },
};
</script>

<style scoped>

</style>