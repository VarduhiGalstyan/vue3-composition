<template>
    <div>
        <h3>Watch Effct Component</h3>

        <div>
            TodoId: <input type="text" v-model="todoId">
        </div>

        <div>
            Count: <input type="text" v-model="count">
        </div>

        <div id="channel">Channel Subscriber Count: {{ count }}</div>
    </div>
</template>

<script setup>
import { ref, watch, watchEffect, watchPostEffect} from 'vue';

const todoId = ref(1);
const count = ref(0);

const data = ref(null);

// watch(todoId, async () => {
//     let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`);
//     data.value = await response.json();
// }, {immediate: true}
// );

// const unwatch = '';

// setTimeout(() => {
//     unwatch = watchEffect(() => {});
// });

// unwatch();

watchPostEffect(async() => {
    console.log(count.value);
    // let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`);    
    // data.value = await response.json();
    document.getElementById('channel') && console.log(document.getElementById('channel').innerText);
}, 
// {flush: 'post'}
);
</script>