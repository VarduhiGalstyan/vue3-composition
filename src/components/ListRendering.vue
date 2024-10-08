<template>
    <div>
        <h3>List Rendering</h3>

        <ul>
            <li v-for="(book, index) of books">
                {{ parentMessage }} - {{ index }} - {{ book.title }}
            </li>
        </ul>

        <ul>
            <li v-for="(value, key, index) in myObject">
                {{ index }} - {{ key }} - {{ value }}
            </li>
        </ul>

        <template v-for="n in 10">
            <!-- <div v-for="n in 10">Leela Web dev - {{ n }}</div> -->
            <div >Leela Web dev - {{ n }}</div>
            <div>Channel</div>
        </template>
    </div>
</template>

<script setup>
import { reactive , ref, unref} from 'vue';

const parentMessage = ref('Parent');
const books = reactive([
    {title: 'Book 1'},
    {title: 'Book 2'},
    {title: 'Book 3'},
    {title: 'Book 4'}
]);


const myObject = reactive({
    title: 'my title',
    author: 'my author',
})
</script>