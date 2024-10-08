<template>
    <div>
        <h3>Watch Proparty</h3>
    </div>

    <div>
        <p>Ask a Yes/No Question?</p>
        <input type="text" v-model="question">
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const question = ref('');
const answer = ref('Question genrally contain ?');

watch(question, async (newQuestion, oldQuestion) => {
    if (newQuestion.indexOf('?') > -1) {
        answer.value = 'Thiniking...';

        try {
           const res = await fetch ('https://api.cryptoinfo.me/api/get-posts?offset=0&limit=10');
           const resJson = await res.json();
           answer.value = resJson.answer;
        } catch(error){
            answer.value = 'Error!. Could not reach the API';
        }
    }
});
</script>