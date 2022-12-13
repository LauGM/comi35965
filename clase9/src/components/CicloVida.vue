<template>
    <div>
        <h1>Ciclo de vida de un componente</h1>
        <p>{{dato}}</p>
        <button @click="cambiarDato()">Cambiar dato</button>
        <button @click="destruir()">Destruir componente</button>
    </div>
</template>

<script>
export default {
    name: 'CicloVida',

    data() {
        return {
            dato:"Soy un dato que se renderiza !"
        };
    },
    //los ciclos deben ir antes que los metodos
    beforeCreate(){
        console.log("Before create");
        console.log("Dato: "+this.dato);
    },
    created(){
        //accede a los datos pero aun no puede renderizar el DOM
        console.log("Created");
        console.log("Dato: "+this.dato);
    },
    beforeMount(){
        //momento previo a insertar cosas en el DOM
        console.log("Before Mount!")
    },
    mounted() {
        //inserta en el DOM
        console.log("Mounted");
        //podemos invocar algun metodo
    },
    beforeUpdate(){
        console.log("Before update!")
    },
    updated(){
        console.log("Updated")
    },
    beforeDestroy(){
        //antes de destruir la instancia debo guardar los que necesito que persista
        console.log("Before Destroy");
    },
    destroyed(){
        //se destruye la instancia
        console.log("Destroyed!!!");
    },

    methods: {
        cambiarDato(){
            this.dato="Dato cambiado!!!!!!!!!"
        },
        destruir(){
            this.$destroy();
        }
    },
};
</script>

<style lang="scss" scoped>

</style>