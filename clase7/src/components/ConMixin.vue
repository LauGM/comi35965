<template>
    <div>
        <p>{{fecha}}</p>
        <p>{{fechar}}</p>
    </div>
</template>

<script>
import { misMixins } from '@/mixins/mixinglobal';
export default {
    name: 'ConMixin',
    mixins: [misMixins]
};
</script>
