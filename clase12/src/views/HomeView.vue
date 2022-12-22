<template>
  <div class="home">
    <usuario-componente />
    <libros-componente />
  </div>
</template>

<script>
import UsuarioComponente from '@/components/UsuarioComponente.vue'
import LibrosComponente from '@/components/LibrosComponente.vue'

export default {
  name: 'HomeView',
  components: {
    UsuarioComponente,
    LibrosComponente
  }
}
</script>
