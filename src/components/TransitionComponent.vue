<template>
    <Transition mode="in-out">
        <button v-if="docState == 'edit'" @click="docState = 'save'">Edit</button>
        <button v-else-if="docState == 'save'"  @click="docState = 'cancel'">Save</button>
        <button v-else="docState == 'cancel'"  @click="docState = 'edit'">Cancel</button>
    </Transition>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(true);
const docState = ref('edit')

</script>

<style scoped>
.v-enter-from{
    transform: translateY(-30px);
}
.v-leave-to{
    transform: translateY(30px);
}
.v-enter-active, .v-leave-active{
    transform: all 1s;
}
</style>