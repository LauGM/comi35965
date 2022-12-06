<template>
  <div class="container-fluid">
    <h1>{{ titulo }}</h1>
    <div class="row p-4">
      <hijo-prueba :titulo="tit_hijo" @enviar="frases.push($event)"/>
      <card-frase v-for="(frase, index) of frases" :key="index" :frase="frase" :indice="index"/>
    </div>
  </div>
</template>

<script>
import CardFrase from './CardFrase.vue';
import HijoPrueba from './HijoPrueba.vue';

export default {
  name: "PadrePrueba",

  data() {
    return {
      titulo: "Frases inspiradoras",
      frases: ["Persevera y triunfarás"],
      tit_hijo:"Ingrese nueva frase"
    };
  },

  components: {
    CardFrase,
    HijoPrueba
  },
};
</script>