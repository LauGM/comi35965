<template>
    <!-- async await -->
    <div class="container">
        <form @submit.prevent="postear()">
            <label>Para quien es el regalo:</label>
            <input v-model="destinatario" type="text" class="form-control" placeholder="Ingresa el nombre">
            <label>Ingresa lo que quieres regalar:</label>
            <input v-model="regalo" type="text" class="form-control" placeholder="Aqui regalo">
            <button type="submit" class="btn btn-warning">Agregar regalo</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'NuevoRegalo',

    data() {
        return {
            destinatario:'',
            regalo:''
        };
    },
    methods: {
        async postear(){
            const nuevoRegalo={
                destinatario: this.destinatario,
                regalo: this.regalo
            }
            const URLPOST="https://63987b46fe03352a94d2992f.mockapi.io/regalos"
            const response = await fetch(URLPOST,{
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(nuevoRegalo)
            })
            const respuestaPost = response.json();
            console.log(respuestaPost);
        }
    },
};
</script>

<style lang="scss" scoped>

</style>