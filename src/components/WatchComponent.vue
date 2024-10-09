<template>
  <div>
        <h3>Watch Proparty</h3>

    <div>
        <p>Ask a Yes/No Question?</p>
        <input type="text" v-model="question">
        
        <div>Answer: {{ answer }}</div>
        <img :src="responseData.imge" style="width: 200px" />
    </div>

    <div>
       x: <input type="text" v-model = "x"/>
    </div>
    <div>
       y: <input type="text" v-model = "y"/>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const question = ref('');
const answer = ref('Question genrally contain ?');
const responseData = ref('');

watch(question, async (newQuestion, oldQuestion) => {
    if (newQuestion.indexOf('?') > -1) {
        answer.value = 'Thinking...';
        responseData.value ='';

        try {
           const res = await fetch ('https://yesno.wtf/api');
           const resJson = await res.json();
           responseData.value = resJson;
           answer.value = resJson.answer;
        } catch(error){
            answer.value = 'Error!. Could not reach the API';
        }
    }
});

const x = ref(0);
const y = ref(0);

// watch(() => x.value + y.value,
// (sum) => {
//     console.log(`sum value is ${sum}`);
// }
// );

watch([x, () => y.value], ([newX, newY]) => {
    console.log(`values of x and y is ${newX} and ${newY}`)
})
// watch(x, (newX) => {
//     console.log(`value of x is ${newX}`);

// });
// watch(y, (newY) => {
//     console.log(`value of y is ${newY}`);

// });

// watch([x, y], ([newX, newY]) => {
//     console.log(`values of x and y is ${newX} and ${newY}`)
// })
</script>