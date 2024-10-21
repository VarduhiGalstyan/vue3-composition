<template>
<div class="row">
  <div class="col-md-8">
    <div>  Posts page </div>

    <table class="table table-striped" v-if="posts.length">
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for = "post in posts" :key="post.id">
                <td>{{ post.id }}</td>
                <td>{{ post.title }}</td>
                <td>{{ post.body }}</td>
                <!-- <td><router-link to ="/">View Post</router-link></td> -->
                <!-- <td><router-link :to="{path: `/post/${post.id}`}">View Post</router-link></td> -->
                <!-- <td><router-link :to="{name: 'singlePost', params: {id: post.id}}">View Post</router-link></td> -->
                <!-- <td><router-link :to="{path: `/articles/${post.id}`}">View Post</router-link></td> -->
                <td>
                    <button @click="onPostClick(post.id)">View Post</button>
                </td>

            </tr>
        </tbody>
    </table>
  </div>

  <div class="col-md-4">
    <router-view></router-view>
  </div>
</div>
</template>

<script setup>
import { inject, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const posts = ref([]);

onMounted(() => {
    posts.value = inject('postsData');
});


const fetchPosts =  async() => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    posts.value = await response.json();
};

const onPostClick =(postId) => {
    // router.push({name: 'posts', params: {id:postId}})
    // router.push({name: 'singlePost', params: {id:postId}})
    // router.push({path: `/articles/${postId}`})
    router.push({path: `/articles/${postId}`})

}

</script>
<style scoped>
.col-md-4{
background-color: red;
}</style>