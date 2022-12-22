export default{
    //namespaced me permite nombrar éste modulo en el store
    //y si hay otro modulo que tenga los mismo nombres, se diferencian entre si
    namespaced:true,
    state:{
        usuario:"Lau",
        ciudad:"Buenos Aires"
    },
    getters:{
        obtenerUsuario(state){
            return state.usuario;
        },
        obtenerCiudad(state){
            return state.ciudad
        }
    }
}