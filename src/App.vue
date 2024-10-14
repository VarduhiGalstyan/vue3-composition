<template>
  <!-- <div>Hello World</div> -->
  <div><button @click="yellowref">Change color</button>
    <TextComponent className="bgyellow" v-if="x" />
    <TextComponent className="bgred" v-else/>

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
    <!-- <SinglePost 
      :name="'Leela Web Dev'"
      :postDetails="postDetails" 
      message="success" 
      :updateTitle="updateTitle"
      :person="person"/>
    <SinglePost  message="warning" :person="person"/>

    <div>Parent: {{ postDetails.title }}</div>

    <button @click.prevent="$event => showCounter =!showCounter">Toggle Counter</button> -->
    
    <!-- <Posts></Posts> -->

    <!-- <CostomInput :searchText="searchText" @updateText = "$event => searchText =$event"/> -->

    <CostomInput v-model:title.no-hyphens="searchText"/>

    <!-- <CostomInput :modelValue="searchText" @update:modelValue="(newValue) => (searchText = newValue)" /> -->

    <!-- <UserName v-model:firstName="firstName" v-model:lastName="lastName"/> -->
    <div>Parent: {{ firstName }} {{ lastName }}</div>

    <!-- <div>Parent: {{ searchText }}</div> -->

    <div style="margin-top: 15rem"></div>
  </div>
</template>

<script setup>
import TextComponent from './components/TextComponent.vue';
import UserName from './components/UserName.vue';
import CostomInput from './components/CostomInput.vue';
import SinglePost from './components/SinglePost.vue';
import CounterComponent from './components/Counter.vue'; //եթե main.js-ից ջնջում ենք
import Posts from './components/Posts.vue';
import { onMounted, onBeforeUpdate, onUpdated, ref } from 'vue';
import Person from './Person';

const x = ref(true);

const showCounter = ref(true);
// const postTitile = ref('leela web dev');
// const postId = ref(42);
const  postDetails =  ref({
  title: 'Leela Web Dev',
  id: 42
});

const  searchText = ref('Hello Lella Web Dev');
const firstName = ref('Leela');
const lastName = ref('Web Dev')

const yellowref =() => {
  x.value = !x.value;
}

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