<template>
    <div><h3>Posts Defails</h3></div>

    <div v-if="error">Error Encountered: {{ error.message }}</div>
    <div v-else-if="posts">
        <SinglePost v-for="post in posts" :post="post" :key="post.id" @edit-post="updatePost"></SinglePost>
    </div>
    <div v-else>
        Loading...
    </div>
</template>
<script setup>
import { useFetch } from '@/useFatch';
import SinglePost from './SinglePost.vue';
// const posts =ref([
//     {id: 1, title: 'Post 1'},
//     {id: 2, title: 'Post 2'},
//     {id: 3, title: 'Post 3'}
// ]);

const url = `https://jsonplaceholder.typicode.com/posts`;
const { posts, error } = useFetch(url);

const updatePost =(postId) => {
    // console.log(message);
    posts.value = posts.value.map((post) => {
        if(post.id == postId) return{...post,title: 'Post Is updated'};
        return post;
    });
};
</script>