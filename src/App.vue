<template>
  <div>Hello World</div>
  <div>
    <counter-component v-if="showCounter" ref="counterRef"></counter-component>
    <button @click.prevent="$event => showCounter =!showCounter">Toggle Counter</button>
    <TemplateSyntax/>
    <ComputedComponent/>
    <ClassComponent class="foo bar"/>
    <StyleComponent class="foo bar"/>
    <ConditionalComponent/>
    <ListRendering class="foo bar"/>
    <EventHandling/>
    <Forminput/>
    <WatchComponent/>
    <WatchEffctComponent/>
    <SinglePost title="Leela Web Dev"/>
    <div style="margin-top:15rem"></div>
  </div>
</template>

<script setup>
import SinglePost from './components/SinglePost.vue';

import CounterComponent from './components/Counter.vue'; //եթե main.js-ից ջնջում ենք

import { onMounted, onBeforeUpdate, onUpdated, ref } from 'vue';

const showCounter = ref(true);
const counterRef = ref(null);

onMounted(() => {
  console.log(counterRef.value.increaseCounter());
});

onBeforeUpdate(() => {
  console.log("on Before Updated");
  
});

onUpdated(() => {
  console.log('on Updated');
});
</script>