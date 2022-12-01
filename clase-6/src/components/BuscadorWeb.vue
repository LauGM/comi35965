<template>
  <div>
    <input type="number" v-model="id" />
    <button @click="buscar()">Buscar</button>
    <p>{{ encontrado }}</p>
  </div>
</template>

<script>
export default {
  name: "BuscadorWeb",
  props: {
    lista: Array,
  },
  data() {
    return {
      id: "",
      encontrado: "",
    };
  },

  methods: {
    buscar() {
      this.encontrado =
        this.lista.find((producto) => producto.id === parseInt(this.id)) ??
        "no existe el id";
    },
  },
};
</script>

<style scoped>
</style>