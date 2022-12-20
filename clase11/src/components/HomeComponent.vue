<template>
  <div class="container">
    <form id="formulario" v-if="!this.$store.getters.getUsuActivo" @submit.prevent="chequearUsuario()">
      <div class="form-group">
        <label for="user">
          Usuario:
          <input
            type="text"
            name="user"
            v-model="user"
            placeholder="Ingresa usuario"
          />
        </label>
      </div>
      <div class="form-group">
        <label for="password"
          >Contraseña:
          <input
            type="text"
            name="password"
            v-model="password"
            placeholder="Ingresa contraseña"
          />
        </label>
      </div>
      <button class="btn btn-primary my-3">Log-In</button>
    </form>
  </div>
</template>

<script>
import {mapMutations,mapActions} from 'vuex'
export default {
    name: 'HomeComponent',

    data() {
        return {
            user:'',
            password:''
        };
    },
    created(){
        this.obtenerUsuariosApi();
    },
    methods: {
        ...mapMutations(['modificarUsuActivo']),
        ...mapActions(['obtenerUsuariosApi']),
        chequearUsuario(){
            const encontrado = this.$store.state.listaUsuarios.find((usuario) => (usuario.nombre==this.user && usuario.password==this.password));
            console.log(encontrado)
            if(encontrado){
                //acceder al store y modificar usuarioActivo
                this.modificarUsuActivo(encontrado.nombre);
                Object.assign(this.$data, this.$options.data);
                document.getElementById("formulario").reset();
            }
        }
    },
};
</script>

<style scoped>
</style>