<template>
  <v-app>
    <v-app-bar
      app
      light
    >
      <v-tabs>
        <v-tab to="/">Home</v-tab>
        <v-tab to="/about">Libros</v-tab>
      </v-tabs>
      <v-btn @click="cambiarTema()">Cambiar Tema</v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods:{
    cambiarTema(){
      //de light a dark y viceversa
      this.$vuetify.theme.dark=!this.$vuetify.theme.dark;
    }
  }
};
</script>
