<template>
    <div class="text-center">
        <div>Counter component</div>

        <div>
            <button @click.prevent="decreaseCounter()">-</button>
            <span>{{ counter }}</span>
            <button @click.prevent="increaseCounter()">+</button>
        </div>
    </div>
</template>

<script >
import {ref} from 'vue';
export default{
    setup() {
        const counter = ref(0);

        function increaseCounter() {
            counter.value++;
        }
        function decreaseCounter() {
            counter.value--;
        }

        return{
            counter,
            increaseCounter,
            decreaseCounter
        };
    }
};
</script>


<style scoped>
 .text-center{
    text-align: center;

 }
</style>