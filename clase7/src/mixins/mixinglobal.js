export const misMixins={
    data(){
        return{
            fechaLocal:''
        }
    },
    props:{
        fecha:Date
    },
    computed:{
        fechar(){
            this.fechaLocal=this.fecha.toLocaleString();
            return this.fechaLocal;
        }
    }
}