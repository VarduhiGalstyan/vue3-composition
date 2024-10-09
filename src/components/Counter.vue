<template>
    <div class="text-center">
        <!-- <div>{{ counterData.title }}</div> -->
        <div>{{ counterTitle }}</div>
        <div>
            <button @click.prevent="decreaseCounter()">-</button>
            <span>{{ counterData.count }}</span>
            <button @click.prevent="increaseCounter()">+</button>
            <div>
                <div>The Counter Value is {{ oddOrEven}}</div>
                <input type="text" v-model="counterTitle" />
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, reactive, ref} from 'vue';

    const counterTitle = 'Counter Title';
    const counterData = reactive({
        count: 0,
        // title: 'Counter Title from reactive'
    });

    onBeforeMount(() => {
        console.log(document.getElementById('countertitle'));
        console.log("before mouted");
        
    });
    onMounted(() => {
        console.log(document.getElementById('countertitle'));
        console.log('mounted');
    });
    onBeforeUnmount(() => {
        console.log(document.getElementById('countertitle'));
        console.log('On Before unmount');
    });
    onUnmounted(() => {
        console.log(document.getElementById('countertitle'));
        console.log('On Unmounted');
        
    });
    onBeforeUpdate(() => {
        console.log('child Before Updated');
    });
    onUpdated(() => {
        console.log('on Updated'); 
    });

    const oddOrEven = computed(() => {
        return counterData.count%2 == 0 ? 'Even' : 'Odd';
    });

    const increaseCounter = () => {
        counterData.count++;
    };

    const decreaseCounter = () => {
        counterData.count--;
    };
</script>


<style scoped>
 .text-center{
    text-align: center;

 }
</style>