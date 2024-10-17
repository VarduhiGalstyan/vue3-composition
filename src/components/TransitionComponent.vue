<template>
    <div>
        <button @click="show = !show" >Toggle</button>

        <!-- <Transition > -->
        <Transition name="bounce" enter-active-class="bounce-active" leave-active-class="leave-active">
            <div v-if="show" style="text-align: center">Leela Web Dev</div>
        </Transition>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(true);
</script>

<style scoped>
/* .bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active{
    animation: bounce-in 0.5s reverse; 
} */
.bounce-active {
    animation: bounce-in 0.5s;
}

.leave-active{
    animation: bounce-in 0.5s reverse; 
}
@keyframes bounce-in{
    0%{
        transform: scale(0);
    }
    50%{
        transform: scale(1.25);
    }
    100%{
        transform: scale(1);
    }
}
</style>