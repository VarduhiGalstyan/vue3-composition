<template>
    <div>Id: {{ post.id }}</div>
    <div>Title: {{ post.title }}</div>
    <div><button @click.prevent="updatePost">Edit Post</button></div>
    <hr>
</template>

<script setup>
const props = defineProps({
    post: {
        type: Object,
        required: true
    }
});

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
