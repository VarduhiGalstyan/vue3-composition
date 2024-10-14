<template>
    <div>Single Post Components</div>
    <Category :message="message"/>
</template>

<script setup>
import Category from './Category.vue';
defineProps(['message']);
</script>