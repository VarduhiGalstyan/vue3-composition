<template>
    <div>
        <button @click="show = !show" >Toggle</button>

        <!-- <Transition > -->
        <Transition
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        @after-enter="onAfterEnter"

        @before-leave="onBeforeLeave"
        @leave="onLeave"
        @after-leave="onAfterLeave"
        >
            <div v-if="show" style="text-align: center">Leela Web Dev</div>
        </Transition>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(true);

const onBeforeEnter =(el) => {
    console.log("On Before enter", el);
}
const onEnter = (el, done) => {
    console.log("On enter", el);
    const animate = el.animate([{transform: 'scale(0)' }, {}], {duration: 1000});
    animate.onfinish = () => {
        done();
    };
}
const onAfterEnter = (el) => {
    console.log("On After enter", el);
}

const onBeforeLeave =(el) => {
    console.log("On Before Leave", el);
}
const onLeave = (el, done) => {
    console.log('On Leave', el);
    const animate = el.animate([{}, {transform: 'scale(0)' }], {duration: 1000});
    animate.onfinish = () => {
        done();
    };
}
const onAfterLeave = (el) => {
    console.log("On After Leave", el);
}
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