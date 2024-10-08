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
            <input type="checkbox" v-model="checked" />
            {{ checked }}
        </div>

        <div>
            <input type="checkbox" value="Leela" v-model="checkedNames"/>
            <input type="checkbox" value="Web" v-model="checkedNames"/>
            <input type="checkbox" value="Dev" v-model="checkedNames"/>
            {{ checkedNames }}
        </div>


        <div>
            
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const text = ref('Leela');
const messag = ref('Leela');
const checked = ref(true);
const checkedNames = ref([]);
</script>