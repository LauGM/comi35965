<template>
  <div class="card col-2 m-2">
    <img
      class="card-img-top"
      src="https://picsum.photos/100"
      alt="Card image cap"
    />
    <h5 class="card-title">Frase {{ indice + 1 }}</h5>
    <p class="card-text">
      {{ frase }}
    </p>
    <button class="btn btn-dark btn-sm">🤍</button>
  </div>
</template>

<script>
export default {
  name: "CardFrase",
  props: {
    frase: String,
    indice: Number,
  },
};
</script>