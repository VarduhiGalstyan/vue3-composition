<template>
    <div>
        <button @click="show = !show" >Toggle</button>

        <!-- <Transition > -->
        <Transition name="fade">
            <div v-if="show">Leela Web Dev</div>
        </Transition>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(true);
</script>
<style scoped>
/* .v-enter-from, .v-leave-to
{
opacity: 0;
}
.v-enter-active, .v-leave-to{
    transition: opacity 2s ease;
} */

 /* .v-enter-from, .v-leave-to{
    opacity: 0;
 }
 .v-enter-to, .v-leave-from{
    opacity: 1;
 }
 .v-enter-active, .v-leave-active {
    transition: opacity 2s ease;
 } */

 .fade-enter-from, .fade-leave-to{
    opacity: 0;
 }
 .fade-enter-to, .fade-leave-from{
    opacity: 1;
 }
 .fade-enter-active, .fade-leave-active {
    transition: opacity 2s ease;
 }

</style>