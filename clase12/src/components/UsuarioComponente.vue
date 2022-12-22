<template>
    <div>
        <p>Usuario: {{ obtenerUsuario }}</p>
        <p>Ciudad: {{ obtenerCiudad }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'UsuarioComponente',

    data() {
        return {
            
        };
    },

    computed: {
        ...mapGetters('moduloUsuario',['obtenerUsuario','obtenerCiudad'])
    },
};
</script>

<style scoped>

</style>