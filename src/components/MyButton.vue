<template>
    <button class="btn" style="color: yellow; font-size: 20px" @click="onChildClick">Sample Button</button>
</template>

<script setup>
const onChildClick =() => {
    console.log('child clicked');
};
</script>