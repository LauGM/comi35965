<template>
    <div class="container">
        <form @submit.prevent="eliminar()">
            <label>Id de regalo a eliminar:</label>
            <input v-model="id" type="number" class="form-control" placeholder="Ingresa el id">
            <button type="submit" class="btn btn-warning">Eliminar regalo</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'EliminarRegalo',

    data() {
        return {
            id:null
        };
    },
    methods: {
        eliminar(){
            const URLDELETE ="https://63987b46fe03352a94d2992f.mockapi.io/regalos/"+this.id;
            const respuesta = axios.delete(URLDELETE);
            console.log(respuesta)
        }
    },
};
</script>

<style lang="scss" scoped>

</style>