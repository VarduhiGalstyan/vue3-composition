<template>
    <!-- <div>Id: {{ post.id }}</div>
    <div>Title: {{ post.title }}</div>
    <div><button @click.prevent="updatePost">Edit Post</button></div>
    
    <div><input type="text" v-focus:foo.foo.bar="value" ></div>
    <hr> -->

    <input type="text" >
</template>

<script setup>

// const vFocus = {
//     mounted: (el) => {
//         el.style.borderColor = 'red';
//     }
// };
const props = defineProps({
    post: {
        type: Object,
        required: true
    }
});
const value ='leela web dev'

const emit = defineEmits ({
    editPost(postId){
        if (postId && typeof postId == 'number') {
            return true;
        }
        return false;
    }
});

const updatePost = () => {
    emit('editPost', props.post.id);
};
</script>
