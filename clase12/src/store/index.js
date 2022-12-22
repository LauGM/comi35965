import Vue from 'vue'
import Vuex from 'vuex'
import moduloUsuario from '@/modules/usuario'
import moduloLibros from '@/modules/libros'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    moduloUsuario,
    moduloLibros
  }
})
