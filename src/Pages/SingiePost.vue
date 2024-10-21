<template>
    <div>Singel Post {{ $route.params.id }}</div>
    <div v-if="post">
        <div>{{ post.id }}</div>
        <h2>{{ post.title }}</h2>
        <div>{{ post.body }}</div>
    </div>
    <div>
        <!-- <router-link to="/post">Back</router-link> -->
        <!-- <router-link :to="{name: 'posts'}">Back</router-link> -->
        <button @click="onBackClick">Back To Posts</button>
    </div>
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// console.log(route.params);

const post = ref(null);

const getPost = async() => {
    const reponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);
    post.value = await reponse.json();
};

const onBackClick = () => {
    // router.push('/articles');
    // router.push({path: '/articles'});
    router.go(-1);


};

// watch(() => route.params, getPost);
watchEffect(getPost);
// watch(() => route.params, getPost, {immediate: true});
// watchEffect(getPost, {immediate: true});


// getPost();

</script>
