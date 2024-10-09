<template>
  <div>Hello World</div>
  <div>
    <counter v-if="showCounter" ref="counterRef"></counter>
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
    <div style="margin-top:15rem"></div>
  </div>
</template>

<script setup>
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