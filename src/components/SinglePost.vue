<template>
    <div>Single Post Component</div>
    <h3>{{ postTitle }}</h3>
</template>

<script setup>
//  const props = defineProps(['title']); //title-n App.vue-i
 const props = defineProps({
    // postTitle: String,
    title: String,
    id: Number
 });

 console.log(props.title);
</script>