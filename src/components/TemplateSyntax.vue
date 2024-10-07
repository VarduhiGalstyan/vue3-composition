<template>
    <div v-bind="objectOfAttrs" :[titleAttr]="titleValue">Template Code</div>
    <div v-html="message"></div>
    <div>{{ 1 + 1 }}</div>
    <div @[eventName]="changeTitle()">{{ message ? 'Yes' : 'No'}}</div>
    <!-- <div>{{ Math.random()}}</div> -->
</template>
<script setup>
 const message = '<h1> Hello world </h1>';
 const dynamicId = 'my-id';

 const titleAttr = 'title';
 const titleValue = 'This is title';
//  const eventName = 'click';
 const eventName = 'mouseover' 

 const objectOfAttrs = {
    id: dynamicId,
    class: 'container'
 }

 function changeTitle(){
    alert("hello world");
 }
</script>