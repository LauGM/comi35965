<script setup>
</script>

<template>
  <div>
    <p>
      <router-link to="/">Ir a Home</router-link> | 
      <router-link to="/about">Ir a About</router-link>
    </p>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <router-view></router-view>
  </div>
  <teleport to="#teletransporte">
      <p>Este es un texto teletransportado</p>
  </teleport>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
