<template>
    <div><h3>Posts Defails</h3></div>

    <div>
        Load Post Id: <button v-for="n in 5" :key="n" @click.prevent="postId = n">{{n}}</button>
    </div>
    <div v-if="error">Error Encountered: {{ error.message }}</div>
    <div v-else-if="post">
        <SinglePost  :post="post" :key="post.id" @edit-post="updatePost"></SinglePost>
    </div>
    <div v-else>
        Loading...
    </div>
</template>
<script setup>
import { useFetch } from '@/useFatch';
import SinglePost from './SinglePost.vue';
import { compile, computed, ref } from 'vue';
// const posts =ref([
//     {id: 1, title: 'Post 1'},
//     {id: 2, title: 'Post 2'},
//     {id: 3, title: 'Post 3'}
// ]);

const postId = ref('1');

const url = computed(() => {
    return `https://jsonplaceholder.typicode.com/posts/${postId.value}`;
});
const { post, error } = useFetch(url);

const updatePost =(postId) => {
    // console.log(message);
    posts.value = posts.value.map((post) => {
        if(post.id == postId) return{...post,title: 'Post Is updated'};
        return post;
    });
};
</script>