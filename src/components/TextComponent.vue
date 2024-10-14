<template>
    <div><button :class="className" >yeloow-red</button></div>
</template>

<script setup>
const props = defineProps({
    className: {
        type: String,
        required: true
    }
});
</script>
<style scoped>
.bgyellow{
    background-color: yellow;
}
.bgred{
background-color: red;
}
</style>