<template>
    <div>
        <!-- slot sin nombre -->
        <slot></slot>
        <!-- slot con nombre -->
        <slot name="precio">$</slot>
    </div>
</template>

<script>
export default {
    name: 'SlotPrueba'
};
</script>

<style scoped>

</style>