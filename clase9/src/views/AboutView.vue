<template>
  <div class="about">
    <about-component />
  </div>
</template>

<script>
import AboutComponent from '@/components/AboutComponent.vue';
export default {
  components: { AboutComponent },
  name: 'AboutView'
};
</script>