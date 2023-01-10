<script setup>
import { reactive } from 'vue';
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'
//variables del estado de vuelidate
    const state = reactive({
        name:'',
        mail:''
    })
//reglas de vuelidate
    const rules = {
        name:{required:helpers.withMessage('Este campo no puede estar vacío',required), minLength: minLength(3)},
        mail:{required, email}
    }
//objeto del validador
    const v$ = useVuelidate(rules, state);
    console.log(v$.value);
</script>

<template>
    <h3>Validando con Vuelidate</h3>
    <input v-model="v$.name.$model" type="text" placeholder="Nombre">
    <div>
        <p v-for="(error,index) of v$.name.$errors" :key="index">{{ error.$message }}</p>
    </div>
    <input v-model="v$.mail.$model" type="email" placeholder="Mail">
    <div>
        <p v-for="(error,index) of v$.mail.$errors" :key="index">{{ error.$message }}</p>
    </div>
</template>

<style scoped>
    p{
        margin-top: 1px;
        font-size: 10px;
        color:red;
    }
</style>