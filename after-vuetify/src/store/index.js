import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listaLibros: []
  },
  getters: {
    obtenerLibros(state) {
      return state.listaLibros;
    }
  },
  mutations: {
    cargarLibros(state, librosApi) {
      console.log(librosApi)
      state.listaLibros = librosApi;
    }
  },
  actions: {
    getApi: async function ({ commit }) {
      const data = await fetch("https://api.itbook.store/1.0/new");
      const librosRecibidos = await data.json();
      console.log(librosRecibidos)
      commit('cargarLibros', librosRecibidos.books)
    }
  }
})
