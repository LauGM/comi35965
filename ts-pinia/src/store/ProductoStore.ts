import {defineStore} from 'pinia';

export const useProductoStore = defineStore("ProductoStore",{
    //state
    state:()=>{
        return{
            prenda:'pantalon',
            talle:42
        }
    },
    //getters
    getters:{
        obtenerPrenda:(state)=>state.prenda,
        obtenerTalla:(state)=>state.talle
    },
    //actions
    actions:{
        modificarTalla(nuevaTalla:number){
            this.talle=nuevaTalla;
        }
    }
})