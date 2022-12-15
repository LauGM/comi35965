<template>
    <div class="card col-2">
        <img class="card-img-top" :src="regalo.avatar" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Regalo para: {{regalo.destinatario}}</h5>
            <p class="card-text">Agregado: {{regalo.createdAt}}</p>
            <p>Lo que le quiero regalar: <strong>{{regalo.regalo}}</strong></p>
            <p>ID: {{regalo.id}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartaRegalo',
    props:{
        regalo:Object
    }
}
</script>