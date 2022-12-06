<template>
  <div class="hello">
    <h1 ref="usu">Usuario: {{msg.nombre}} - Edad: {{msg.edad}}</h1>
    <button @click="cambiarColor()">Cambiar color</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: Object
  },
  methods:{
    cambiarColor(){
      this.$refs.usu.style.color="red";
      console.log(`El nombre del usuario es: ${this.$props.msg.nombre}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
