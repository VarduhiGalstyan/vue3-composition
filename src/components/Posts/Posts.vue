<template>
    <div>Posts Components</div>
    <SinglePost :message="message"/>
</template>

<script setup>
import SinglePost from './SinglePosts.vue';

defineProps(['message']);
</script>