<template>
    <div>Single Post Component</div>
    <h3 >{{ name }}</h3>

    <div>Post Details: {{ postDetails.title }}</div>

    <div>
        <button @click="updateTitle">Change post Title</button>
    </div>
</template>

<script setup>
import Person from '@/Person';
//  import {stringifExpression} from '@vue/compiler-core';
 const props = defineProps({
    // id: [String, Number]
    name: {
        type: String,
        // required: true
        default:  'Leela Default Value'
    },
    postDetails:{
        type: Object,
        default(rowProps){
            return {title: 'Default', id: 100}
        }
    },
    message: {
        validator(value){
            return ['success', 'warning']
        }
    },
    updateTitle: {
        type: Function,
        default(){
            return 'Welcome';
        }
    },
    person: {
        type: Person
    }
});
</script>
