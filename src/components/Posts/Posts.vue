<template>
    <div>Posts Components</div>
    <SinglePost/>
</template>

<script setup>
import SinglePost from './SinglePosts.vue';

defineProps(['message']);
</script>