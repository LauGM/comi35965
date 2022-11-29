<template>
  <div class="hello">
    <h3 class="text-primary">{{ msg }}</h3>
    <button class="btn btn-primary">
     Hola Bootstrap
   </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
