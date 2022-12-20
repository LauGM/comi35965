import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarioActivo:null,
    listaUsuarios:[{nombre:"Titi123", password:"111111"}]
  },
  getters: {
    getUsuActivo(state){
      return state.usuarioActivo;
    }
  },
  mutations: {
    modificarUsuActivo(state, nuevoUsuario){
      state.usuarioActivo=nuevoUsuario;
    },
    desloguearUsuario(state){
      state.usuarioActivo=null;
    },
    cargarUsuarios(state, usuariosApi){
      state.listaUsuarios=usuariosApi;
    }
  },
  actions: {
    obtenerUsuariosApi: async function({commit}){
      const data = await fetch("https://my.api.mockaroo.com/users.json?key=140b4040");
      const usuarios = await data.json();
      const usuMapeados = usuarios.map((usu) => {
        return{
          nombre:usu.nombre,
          password:usu.password
        }
      });
      commit('cargarUsuarios',usuMapeados)
    }
  },
  modules: {
  }
})
