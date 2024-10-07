<template>
    <div class="text-center">
        <div>{{ counterTitle }}</div>

        <div>
            <button @click.prevent="decreaseCounter()">-</button>
            <span>{{ counter }}</span>
            <button @click.prevent="increaseCounter()">+</button>
            <div>
                <input type="text" v-model="counterTitle"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue';

    

    const counter = ref(10);
    const counterTitle = ref('Counter Title');

    const increaseCounter = () => {
        counter.value++;
    }
    const decreaseCounter = () => {
        counter.value--;
    }
</script>


<style scoped>
 .text-center{
    text-align: center;

 }
</style>