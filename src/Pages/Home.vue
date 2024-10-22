<template>
    <div>Home Page</div>
    <div>Counter: {{ count }}</div>
    <div>doubleCount: {{ doubleCount}}</div>
    <!-- <div>doubleValue: {{ doubleValue}}</div> -->
    <div>Name: {{ name }}</div>
    <div>
        <button @click="add()">Increment</button>
        <button @click="$reset()">Reset</button>
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
            ...mapWritableState(useCounterStore, ['count', 'doubleCount', 'name'])
            // ...mapState(useCounterStore, {
                // counter: 'count',
                // doubleCount: 'doubleCount',
                // doubleValue: (state) => state.count+1
            // })
        },
        mounted() {
            this.$subscibe((mutation, state) => {
                console.log(mutation),
                consle.log(state);
                
            })
        },
        methods: {
            ...mapActions(useCounterStore, ['increment', '$reset', '$patch', '$subscibe']),
            add() {
                // console.log(this.count);

                this.$patch({
                    count: this.count + 1,
                    name: Math.random() + 'dsds'
                })
                // this.count++;
                // this.name = Math.random() + 'dsds';
            }
        }
    };
 </script>