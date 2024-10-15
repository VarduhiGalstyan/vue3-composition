<template>
    <div>Categry Components</div>
    <div>{{ searchText }}</div>
    <div>
        <button @click="updateSearchText">Update Search Text</button>
    </div>
</template>

<script setup>
import { inject, onMounted } from 'vue';


const { searchText, updateSearchText } = inject('message');

onMounted(() => {
    console.log(searchText.value);
});

</script>