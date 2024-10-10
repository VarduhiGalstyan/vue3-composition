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
    <!-- <SinglePost postTitle="Leela Web Dev"/> -->
    <!-- <SinglePost :postTitle="postTitle" :id="42"/> -->
    <!-- <SinglePost :title="postDetalis.title" :id="postDetalis.id"/> -->
     <SinglePost v-bind="postDetalis"/>
    <div style="margin-top:15rem"></div>
  </div>
</template>

<script setup>
import SinglePost from './components/SinglePost.vue';

import CounterComponent from './components/Counter.vue'; //եթե main.js-ից ջնջում ենք

import { onMounted, onBeforeUpdate, onUpdated, ref } from 'vue';

const showCounter = ref(true);
// const postTitile = ref('leela web dev');
// const postId = ref(42);
const  postDetalis = {
  title: 'Leela Web dev',
  id: 42
}

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