<template>
    <div><h3>Posts Defails</h3></div>

    <SinglePost v-for="post in posts" :post="post" :key="post.id" @edit-post="updatePost"></SinglePost>
</template>
<script setup>
import { ref } from 'vue';
import SinglePost from './SinglePost.vue';
const posts =ref([
    {id: 1, title: 'Post 1'},
    {id: 2, title: 'Post 2'},
    {id: 3, title: 'Post 3'}
]);
const updatePost =(postId) => {
    posts.value = posts.value.map(post => {
        if(post.id == postId) return{...post,title: 'Post Is updated'};
        return post;
    });
};
</script>