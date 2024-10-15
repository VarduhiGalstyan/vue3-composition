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

    <!-- <CostomInput v-model:title.no-hyphens="searchText"/> -->

    <!-- <CostomInput :modelValue="searchText" @update:modelValue="(newValue) => (searchText = newValue)" /> -->

    <!-- <UserName v-model:firstName="firstName" v-model:lastName="lastName"/> -->
    <!-- <div>Parent: {{ firstName }} {{ lastName }}</div> -->

    <!-- <div>Parent: {{ searchText }}</div> -->

    <!-- <BaseButton class="large" style="color: red" @click="onParentClick"></BaseButton> -->
    
    
    <!-- <SlotComponent>Click Me slot</SlotComponent> -->
    <!-- <SlotComponent>
      <span style="color: red">Click</span>
      <span>Here - {{ searchText }}</span>
    </SlotComponent>
    <SlotComponent /> -->
<!-- ------------------------------------------------------------------------------- -->
    <!-- <SlotComponent>
      <template #header="headerProps">
        <h1>Header Content</h1>
        <div>{{ headerProps }}</div>
      </template>
      <template #default="defaultProps">
        <div>Main Content</div>
        <div>Main second part</div>
        <div>{{ defaultProps }}</div>
      </template>
      <template #footer="footerProps">
        <div>Footer Content</div>
        <div>{{ footerProps }}</div>
      </template>
    </SlotComponent> -->
<!-- -------------------------------------------------------------- -->
    <PostsComponent v-if="showPosts"/>

    <div>
      <button @click.prevent="showPosts = !showPosts">Click Here</button>
    </div>

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
import { onMounted, onBeforeUpdate, onUpdated, ref , provide, defineAsyncComponent } from 'vue';
import Person from './Person';
import MyButton from './components/MyButton.vue';
import BaseButton from './components/BaseButton.vue';
import SlotComponent from './components/SlotComponent.vue';
// import PostsComponent from './components/Posts/Posts.vue'
// const PostsComponent = defineAsyncComponent(() => import('./components/Posts/Posts.vue'))
import LoadingComponent from './components/LoadingComponent.vue';

const PostsComponent = defineAsyncComponent({
  loader: () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve (import('./components/Posts/Posts.vue'));
        },2000);
    });
  },
  loadingComponent: LoadingComponent,
});

const x = ref(true);

const showCounter = ref(true);
// const postTitile = ref('leela web dev');
// const postId = ref(42);
const  postDetails =  ref({
  title: 'Leela Web Dev',
  id: 42
});

const showPosts = ref(false);

const  searchText = ref('Hello Lella Web Dev');
// provide('message', message);

function updateSearchText() {
  searchText.value = 'Update Valu from parent';
}

provide('message', {searchText, updateSearchText});

const firstName = ref('Leela');
const lastName = ref('Web Dev')

const yellowref =() => {
  x.value = !x.value;
}

const updetails = () => {
  postDetails.value.title = 'changed fro'
}

const  onParentClick = () => {
  console.log('on parent click');
  
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