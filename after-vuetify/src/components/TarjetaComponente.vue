<template>
    <v-card
    shaped
    class="mx-auto my-12"
    max-width="300"
  >

    <v-img
      height="250"
      :src="libro.image"
    ></v-img>

    <v-card-title>{{ libro.title }}</v-card-title>

    <v-card-text>
      <div class="my-4 text-subtitle-1">
       {{libro.price}}
      </div>

      <div>{{ libro.subtitle }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Hay disponibilidad</v-card-title>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="agregar()"
      >
        Agregar al carro
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name: 'TarjetaComponente',
    props:{
        libro:Object
    },

    methods: {
        
    },
};
</script>

<style scoped>

</style>