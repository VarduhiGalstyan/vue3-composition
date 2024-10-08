<template>
    <h3>Style Bindings</h3>

    <!-- <div :style="{color: activeColor, 'font-size': fontSize + 'px'}"> -->
    <!-- <div :style="styleObjebasct"> -->
        <div :style="[baseStyles, styles2]">
        Applying Styles
    </div>

    <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">
      Flex property
    </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';

const activeColor = ref('red');
const fontSize = ref(30);

const baseStyles = reactive({
    color: 'red',
    fontSize: '10px'
});

const styles2 = reactive({
    color: 'blue',
    border: '1px solid blue'
})

const styleObject = computed(() => {
    return{
    // color: 'red',
       color: activeColor.value,
    // fontSize: '13px'
       fontSize: fontSize.value + 'px'
    };
})
setTimeout(() => {
    console.log('fired')
    activeColor.value = 'blue';
}, 5000)
</script>