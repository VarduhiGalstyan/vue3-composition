<template>
    <div>Home Page</div>
    <div>Counter: {{ count }}</div>
    <div>doubleCount: {{ doubleCount}}</div>
    <!-- <div>doubleValue: {{ doubleValue}}</div> -->
    <div>Name: {{ name }}</div>
    <div>
        <button @click="add()">Increment</button>
        <button @click="counter.$reset()">Reset</button>
    </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const counter = useCounterStore();

const {count, doubleCount, name} = storeToRefs(counter);

const {increment} = counter;

counter.$subscribe((mutation, state) => {
    console.log(mutation);
    console.log(state);
    
    
})
function add() {
    counter.$patch({
        count: counter.count + 1,
        name: Math.random() + 'dsds',
    })
}
</script>
