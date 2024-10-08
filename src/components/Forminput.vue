<template>
    <div>
        <h3>Form Input Bindings</h3>
        
        <div>
            <!-- <input type="text" :value="text" @input="(event) => (text = event.target.value)"/> -->
            <input type="text"  v-model="text"/>
            <div>{{ text }}</div>
        </div>

        <div>
            <textarea v-model="messag"></textarea>
            <div style="white-space: pre-line;">{{ messag }}</div>
        </div>

        <div>
            <input type="checkbox" v-model="checked" true-value="yes" false-value="no"/>
            {{ checked }}
        </div>

        <div>
            <input type="checkbox" value="Leela" v-model="checkedNames"/>
            <input type="checkbox" value="Web" v-model="checkedNames"/>
            <input type="checkbox" value="Dev" v-model="checkedNames"/>
            {{ checkedNames }}
        </div>


        <div>
            <input type="radio" value="one" v-model="picked" />one
            <input type="radio" value="two" v-model="picked" />two

            <div>{{ picked }}</div>
        </div>

        <div>
            <div>SelectedValue: {{ selected }}</div>
            <select v-model="selected">
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const text = ref('Leela');
const messag = ref('Leela');
// const checked = ref(true);
const checked = ref('yes');
const checkedNames = ref([]);
// const picked = ref('');
const picked = ref('Two');
const selected = ref('A');
</script>