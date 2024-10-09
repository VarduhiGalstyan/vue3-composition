<template>
    <div>Single Post Component</div>
    <h3>{{ title }}</h3>
</template>

<script setup>
 const props = defineProps(['title']); //title-n App.vue-i
</script>