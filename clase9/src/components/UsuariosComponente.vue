<template>
    <div>
        <h2>Selecciona usuario</h2>
        <button v-for="(usuario,index) of usuarios" :key="index" @click="cambiarRuta({path:`/usuario/${usuario.id}`})">{{usuario.id}}</button>
    </div>
</template>

<script>
export default {
    name: 'UsuariosComponente',

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
        cambiarRuta(ruta){
            this.$router.push(ruta);
        }
    },
};
</script>

<style lang="scss" scoped>

</style>