<template>
    <div>
        <h3>List Rendering</h3>

        <ul>
            <li v-for="(book, index) of books" :key="book.id">
                <div>{{ book.title }}</div>
                <div><input type="text"></div>
            </li>
        </ul>

        <div>
            <button @click="shuffle">Shuffle</button>
        </div>

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
});

const shuffle = () => {
    books.sort(() => Math.random() -0.5);
}
</script>