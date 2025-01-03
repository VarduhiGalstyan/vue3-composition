
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useUserStore } from './UseStore';

// export const useCounterStore = defineStore ('counterStore', {
//     state: () => {
//         return{
//             count: 0,
//             name: 'Leela web dev',
//         };
//     },
//     getters: {
//         doubleCount: (state) => state.count * 2,
//         doubleCountPlusOne() {
//             return this.doubleCount +1;
//         }
//     },
//     actions: {
//         increment() {
//             this.count ++;
//         }
//     }
// });

export const useCounterStore = defineStore('counterStore', () => {
    const count = ref(0);
    const name = ref('Leela web dev');

    const userStore = useUserStore();

    const doubleCount = computed(() => count.value *3);

    const doubleCountPlusOne = computed(() => {
        // return doubleCount.value + 1;
        return (value) => {
            return value * doubleCount.value;
        };
    });

    const getUserById = computed(() => {
        return (id) => userStore.users.find((user )=> user.id == id);
    })

    function increment() {
        count.value ++;
    }

    function $reset() {
        count.value = 0;
        name.value = 'leela web dev';
    }

    return{
        count, 
        name,
        doubleCount, 
        getUserById,
        increment,
        doubleCountPlusOne,
        $reset
    };
});