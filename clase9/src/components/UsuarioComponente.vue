<template>
    <div>
        <!-- <p>{{this.$route.params.id}}</p> -->
        <h4>Datos del usuario {{this.$route.params.id}}</h4>
        <p>Nombre: {{usuarios[this.$route.params.id - 1].nombre}}</p>
        <p>Contraseña: {{usuarios[this.$route.params.id - 1].pass}}</p>
    </div>
</template>

<script>
export default {
    name: 'UsuarioComponente',

    data() {
        return {
            usuarios:[
                {
                    id:1,
                    nombre:"Alfredo",
                    pass:"23po"
                },
                {
                    id:2,
                    nombre:"Mariana",
                    pass:"mariiii222"
                }
            ]
        };
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>