<template> 
  <div class="container">
    <div v-if="errores.length!=0" class="alert alert-danger">
        {{mostrarErrores}}
    </div>
    <!-- formulario -->
    <form id="formulario" action="" @submit.prevent="validarFormulario">
      <div class="row">
        <div class="col col-12">
          <br><br>
          <!-- nombre -->
          <label for="inputNombre" class="text-start">Tu nombre</label>
          <input v-model="nombre" @keyup.space="contar" type="text" class="form-control" id="inputNombre" placeholder="Nombre completo">
          <p>Validar nombre: <span class="text-success fw-bold">{{ nombre }}</span></p>
          <br>
          <!-- edad -->
          <label for="inputEdad" class="form-label text-start">Edad</label>
          <input v-model.number="edad" type="number" class="form-control" id="inputEdad" placeholder="Edad">
          <p>Validar edad: <span class="text-success fw-bold">{{ edad }}</span></p>
          <br>
          <!-- email -->
          <label for="inputEmail" class="form-label text-start">Email</label>
          <input v-model="email" type="email" class="form-control" id="inputEmail" placeholder="tu@email.com">
          <p>Validar email:<span class="text-success fw-bold">{{ email }}</span></p>
          <br>
          <!-- Cursos checkboxes  -->
          <div class="row">
            <h4>Selecciona tu curso</h4>
            <div class="col col-2">
              <div class="form-check">
                <input v-model="cursos" class="form-check-input" type="checkbox" value="javascript" id="checkJS">
                <label class="form-check-label" for="checkJS">
                  JavaScript
                </label>
              </div>
              <div class="form-check">
                <input v-model="cursos" class="form-check-input" type="checkbox" value="react" id="checkReact">
                <label class="form-check-label" for="checkReact">
                  React
                </label>
              </div>
              <div class="form-check">
                <input v-model="cursos" class="form-check-input" type="checkbox" value="angular" id="checkNg">
                <label class="form-check-label text-start" for="checkNg">
                  Angular
                </label>
              </div>
              <div class="form-check">
                <input v-model="cursos" class="form-check-input" type="checkbox" value="vue" id="checkVue">
                <label class="form-check-label" for="checkVue">
                  Vue
                </label>
              </div>
            </div>
            <p>Validar cursos seleccionados:<span class="text-success fw-bold">{{ cursos }}</span></p>
          </div>
          <br>
          <!-- selector de pais -->
          <label  for="selector">Elige tu país</label>
          <select v-model="pais" name="selector" class="form-select" aria-label="Default select example">
            <option selected></option>
            <option value="colombia">Colombia</option>
            <option value="chile">Chile</option>
            <option value="argentina">Argentina</option>
          </select>
          <p>Validar pais:<span class="text-success fw-bold">{{ pais }}</span></p>
          <!-- comentarios -->
          <label for="areaComentarios" class="form-label text-start">Comentarios</label>
          <textarea v-model.trim="comentarios" class="form-control" id="areaComentarios" rows="3"></textarea>
          <p>Validar comentario:<span class="text-success fw-bold">{{ comentarios }}</span></p>
          <br>
          <!-- Documentos radio -->
          <div class="row">
            <h4>Tipo de documento</h4>
            <div class="col">
              <input v-model="documento" type="radio" name="checkDNI" class="form-check-input" value="DNI">
              <label for="checkDNI">DNI</label>
            </div>
            <div class="col">
              <input v-model="documento" type="radio" name="checkPass" class="form-check-input" value="Pasaporte">
              <label for="checkPass">Pasaporte</label>
            </div>
            <div class="col">
              <input v-model="documento" type="radio" name="checkVisa" class="form-check-input" value="Visa">
              <label for="checkVisa">VISA</label>
            </div>
            <p>Validar documento:<span class="text-success fw-bold">{{ documento }}</span></p>
          </div>
          <hr>
          <div class="row">
            <br>
            <div class="col-10"></div>
            <br>
            <!-- submit -->
            <div class="col-2">
              <input type="submit" class="btn btn-primary" value="ENVIAR">
            </div>
            <br>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormularioWeb',
  data() {
    return {
        nombre: '',
        edad: null,
        email:'',
        cursos:[],
        pais:'',
        comentarios:'',
        documento:'',
        errores:[],
        contador:1
    };
  },
  methods: {
    validarFormulario() {
        //event.preventDefault();
        if(this.nombre && this.contador>1 && this.edad && this.email){
            alert("Campos obligatorios están ok, enviando formulario!");
            setTimeout(() => {
                //reset del formulario
                document.getElementById("formulario").reset();
                //vuelvo todas las variables a estado inicial
                Object.assign(this.$data, this.$options.data());
            }, 3000);
            return true;
        }
        if(!this.nombre){
            this.errores.push("El nombre es obligatorio. ");
        }
        if(this.contador < 2){
            this.errores.push("El nombre debe estar compuesto por nombre y apellido! ")
        }
        if(!this.edad){
            this.errores.push("La edad es campo obligatorio. ");
        }
        if(!this.email){
            this.errores.push("El email es obligatorio. ");
        }
        setTimeout(() => {
            this.errores=[];
        }, 3000);
    },
    contar(){
        console.log("Agregando otro nombre");
        this.contador++;
    }
  },
  computed: {
    mostrarErrores() {
        let misErrores=this.errores.join(" ");
        return misErrores;
    }
  
  },

}
</script>

<style scoped>
a {
  color: #42b983;
}
label {
  margin-left: 0.5em !important;
}
</style>
