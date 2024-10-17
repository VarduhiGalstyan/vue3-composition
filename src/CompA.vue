<template>
    <div>Count: {{ count }} <button @click="count++">+</button></div>
</template>
<script setup>
import { onActivated, onMounted, onDeactivated, onUnmounted, ref } from 'vue';

const count = ref(0) ;

onMounted(() => {
    console.log('on Mounted Comp A');
});

onUnmounted(()=> {
    console.log("unmounted comp a");
    
})
onActivated(()=> {
    console.log('Activated Comp A');
    
})
onDeactivated(()=> {
    console.log('Deactivated Com B');
    
})
</script>
