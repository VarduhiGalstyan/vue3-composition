<template>
    <div>Single Post Component</div>
    <h3>Child: {{ postDetails.title }}</h3>

</template>

<script setup>
import { computed, ref } from 'vue';

 const props = defineProps({
    postDetails: Object
 });

 setTimeout(() => {
    console.log('time out fired');
    props.postDetails.title = 'Hi Leela';
 }, 4000);

</script>