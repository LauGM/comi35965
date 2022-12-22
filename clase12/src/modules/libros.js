export default{
    namespaced:true,
    state:{
        listaLibros:[]
    },
    getters:{
        obtenerLibros(state){
            return state.listaLibros;
        }
    },
    mutations:{
        cargarLibros(state, librosApi){
            state.listaLibros=librosApi;
        }
    },
    actions:{
        getApi: async function({commit}){
            const data = await fetch("https://api.itbook.store/1.0/new");
            const librosRecibidos = await data.json();
            console.log(librosRecibidos.books)
            commit('cargarLibros',librosRecibidos.books);
        }
    }
}