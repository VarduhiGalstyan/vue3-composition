<template>
  <div>Hello World</div>
  <div>
    <!-- <counter-component v-if="showCounter" ref="counterRef"></counter-component> -->
    <!-- <TemplateSyntax/>
    <ComputedComponent/>
    <ClassComponent class="foo bar"/>
    <StyleComponent class="foo bar"/>
    <ConditionalComponent/>
    <ListRendering class="foo bar"/>
    <EventHandling/>
    <Forminput/>
    <WatchComponent/>
    <WatchEffctComponent/> -->
    <SinglePost 
      :name="'Leela Web Dev'"
      :postDetails="postDetails" 
      message="success" 
      :updateTitle="updateTitle"
      :person="person"/>
    <SinglePost  message="warning" :person="person"/>

    <div>Parent: {{ postDetails.title }}</div>

    <button @click.prevent="$event => showCounter =!showCounter">Toggle Counter</button>
    <div style="margin-top:15rem"></div>
  </div>
</template>

<script setup>
import SinglePost from './components/SinglePost.vue';
import CounterComponent from './components/Counter.vue'; //եթե main.js-ից ջնջում ենք
import { onMounted, onBeforeUpdate, onUpdated, ref } from 'vue';
import Person from './Person';

const showCounter = ref(true);
// const postTitile = ref('leela web dev');
// const postId = ref(42);
const  postDetails =  ref({
  title: 'Leela Web Dev',
  id: 42
});

const updetails = () => {
  postDetails.value.title = 'changed fro'
}

const persone = new Person('Leela', 30)

const counterRef = ref(null);

onMounted(() => {

});

onBeforeUpdate(() => {
  console.log("on Before Updated");
  
});

onUpdated(() => {
  console.log('on Updated');
});
</script>