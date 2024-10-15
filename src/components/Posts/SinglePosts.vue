<template>
    <div>Single Post Components</div>
    <Category />


</template>

<script setup>
import { inject } from 'vue';
import Category from './Category.vue';

const main= inject('main', 'defualt value');
</script>