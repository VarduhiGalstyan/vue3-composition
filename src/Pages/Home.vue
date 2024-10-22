<template>
    <div>Home Page</div>
    <div>Counter: {{ count }}</div>
    <div>doubleCount: {{ doubleCount}}</div>
    <!-- <div>doubleValue: {{ doubleValue}}</div> -->

    <div>
        <button @click="add()">Increment</button>
    </div>
</template>

<script >
import { useCounterStore } from '@/stores/counter';
import { mapActions, mapState, mapWritableState } from 'pinia';

// import { storeToRefs } from 'pinia';
// import {useCounterStore} from '../stores/counter';
// import { computed } from 'vue';

//     const props = defineProps(['name']);
//     const counter = useCounterStore();


    // const count = computed (() => counter.count);
    // const doubleCount = computed (() => counter.doubleCount);

    // const {increment} = counter;

    // console.log(props);

    export default {
        computed: {
            ...mapState(useCounterStore, ['count', 'doubleCount'])
            // ...mapState(useCounterStore, {
                // counter: 'count',
                // doubleCount: 'doubleCount',
                // doubleValue: (state) => state.count+1
            // })
        },
        methods: {
            ...mapWritableState(useCounterStore, ['increment']),
            add() {
                // console.log(this.count);
                this.count++;
                
            }
        }
    };
 </script>