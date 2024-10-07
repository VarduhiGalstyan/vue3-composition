<template>
    <div class="text-center">
        <!-- <div>{{ counterData.title }}</div> -->
        <div>{{ counterTitle }}</div>
        <div>
            <button @click.prevent="decreaseCounter()">-</button>
            <span>{{ counterData.count }}</span>
            <button @click.prevent="increaseCounter()">+</button>
            <div>
                <input type="text" v-model="counterTitle" />
            </div>
        </div>
    </div>
</template>

<script setup>
    import {reactive, ref} from 'vue';

    const counterTitle = 'Counter Title'
    const counterData = reactive({
        count: 0,
        // title: 'Counter Title from reactive'
    });

    
    const increaseCounter = () => {
        counterData.count++;
    }
    const decreaseCounter = () => {
        counterData.count--;
    }
</script>


<style scoped>
 .text-center{
    text-align: center;

 }
</style>