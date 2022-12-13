<template>
    <div>
        <h1>Soy el componente de la vista ABOUT</h1>
        <button @click="volverAtras()">Volver atrás</button>
    </div>
</template>

<script>
export default {
    name: 'AboutComponent',
    methods: {
        volverAtras(){
            this.$router.go(-1);
        }
    },
};
</script>

<style lang="scss" scoped>

</style>