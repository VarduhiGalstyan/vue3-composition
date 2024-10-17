<template>
    <div><input type="text" v-model="message"></div>
</template>
<script setup>
import { ref, onMounted, onUnmounted , onActivated, onDeactivated } from 'vue';
const message =ref('');

onMounted(() => {
    console.log('on Mounted Comp B');
});

onUnmounted(()=> {
    console.log("unmounted comp b");
    
})
onActivated(()=> {
    console.log('Activated Comp B');
    
})
onDeactivated(()=> {
    console.log('Deactivated Com A');
    
})
</script>
