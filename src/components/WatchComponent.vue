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

  <div>Count: <input type="text" v-model="obj.count"</div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';

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

watch([x, () => y.value], ([newX, newY]) => {
    console.log(`values of x and y is ${newX} and ${newY}`)
}, {immediate:true});

// const obj = reactive({count: 0, name: 'Leela Web dev' });
const obj = reactive({ count: { value: 0, name: 'Leela' }});

// watch(() => obj.count, (newCount) => {
//     console.log(`new Count Value is ${newCount}`);
// });

// watch(obj, (newCount) => {
//     console.log(`new Count Value is ${newCount.count}`);
// });

// watch(obj, (newObj, oldObj) => {
//     console.log(`new Count Value is ${newObj.count} ${oldObj.console}`);
// });

watch(() => obj.count, (newCount, oldCount) => {
    console.log(`new Count Value is ${newCount} ${oldCount}`);
}, {deep: true});

// setInterval(() => {
//     obj.count = {value: Math.random()};
// }, 
// );
</script>