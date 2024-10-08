<script setup lang="ts">
import Counter from './components/Counter.vue';
import ListRendering from './components/ListRendering.vue';
import TemplateSyntax from './components/TemplateSyntax.vue';
</script>

<template>
  <div>Hello World</div>
  <div>
    <counter></counter>
    <TemplateSyntax/>
    <ComputedComponent/>
    <ClassComponent class="foo bar"/>
    <StyleComponent class="foo bar"/>
    <ConditionalComponent/>
    <ListRendering class="foo bar"/>
    <EventHandling/>
    <Forminput/>
    <div style="margin-top:15rem"></div>
  </div>
</template>