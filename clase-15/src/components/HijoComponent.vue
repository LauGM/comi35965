<script setup>
const props = defineProps({
    titulo: String
})
</script>

<template>
    <h3>{{ props.titulo }}</h3>
    <header>
        <slot name="encabezado"></slot>
    </header>
    <main>
        <slot name="principal"></slot>
    </main>
</template>

<style scoped>

</style>