<template>
    <div>
        <button @click="show = !show" >Toggle</button>

        <Transition>
            <div v-if="show">Leela Web Dev</div>
        </Transition>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(true);
</script>
<style scoped>
.v-enter-from, .v-leave-to
{
opacity: 0;
}
.v-enter-active, .v-leave-to{
    transition: opacity 2s ease;
}
</style>