<template>
    <div>
        <h3>Event Handling</h3>

        <div>
            <!-- <button v-on:click="$event => count++">Counter</button> -->
            <!-- <button v-on:click="incrementCounter">Counter</button> -->
            <button @click="$event => incrementCounter('leela', $event)">Counter</button>

            <div>Counter: {{ count }}</div>
        </div>

        <div @click.capture="onParentClik">
            <a href="http://www.google.com" @click.stop.prevent="onLinkClik">Click here</a>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);


const incrementCounter = (name, event) => {
    count.value++;
    console.log(name);
    console.log(event.target.tagName);
};

const onLinkClik = (event) =>  {
    event.preventDefault();
    console.log("link Clicked");
};
const onParentClik = () =>{
    console.log("parent Cliked");
    
}
</script>