<template>
    <button @click="loadCompA()">Comp A</button>
    <button @click="loadCompB()">Comp B</button>
    <Transition mode="out-in">
        <component :is="activeComponentName"/>
    </Transition>
</template>

<script setup>
import CompA from './CompA.vue';
import CompB from './CompB.vue';
import { ref } from 'vue';

const show = ref(true);

const docState = ref('edit');
const activeComponentName = ref(CompA);

const loadCompA = () => {
    activeComponentName.value = CompA;
};
const loadCompB = () => {
    activeComponentName.value = CompB;
};


</script>

<style scoped>
.v-enter-from{
    /* transform: translateY(-30px); */
    opacity: 0;
}
.v-leave-to{
    opacity: 0;
}
.v-enter-active, .v-leave-active{
    transform: all 1s;
}
</style>