<template>
    <div class="text-center">
        <div id="countertitle" :ref="(el) => updateRef(el) ">{{ counterTitle }}</div>
        <div>
            <button @click.prevent="decreaseCounter()">-</button>
            <span>{{ counterData.count }}</span>
            <button @click.prevent="increaseCounter()">+</button>
            <div>
                <div>The Counter Value is {{ oddOrEven}}</div>
                <input type="text" v-model="counterTitle" />
            </div>
        </div>
        <div v-for="item in items" :key="item" ref="itemsRef" >{{ item }}</div>
    </div>
</template>

<script setup>
    import { computed, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, reactive, ref, watchEffect} from 'vue';

    const counterTitle = 'Counter Title';
    const counterData = reactive({
        count: 0,
    });

    const items = ref([1,2,3,4]);
    const itemsRef = ref([]);
    const counterRef = ref(null);


    onBeforeMount(() => {

        console.log("before mouted");
        
    });
    // watchEffect(() => {
        // console.log("watch effect");
        // console.log(counterRef.value);

        // if (counterRef.value){

        // } else{

        // }
    // });

    const updateRef = (el) => {
        console.log('updet Ref Called');
        
    };
    onMounted(() => {
        // console.log(counterRef.value.style.color = 'red');
        console.log('mounted');
        console.log(itemsRef.value);
        
    });
    onBeforeUnmount(() => {

        console.log('On Before unmount');
    });
    onUnmounted(() => {

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

    defineExpose({
        counterTitle,
        increaseCounter
    });
</script>


<style scoped>
 .text-center{
    text-align: center;

 }
</style>