<template>
    <div>
        <!-- <input type="text" :value="modelValue" @input = "$event => $emit('update:title', $event.target.value)"/> -->
        <input type="text" :value="modelValue" @input="update">
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    titlemodelModifiers: {
        default: () => ({})
    }
});

// const  value = computed({
    // get() {
    //     return props.modelValue;
    // },
    // set(newValue) {
    //     emit('update:modelValue', newValue )
    // }
// });

const emit = defineEmits(['update:title']);

const update = (event) => {
    let value = event.target.value;

    if (props.titlemodelModifiers['on-hyphens']){
        value = value.split('-').join('');
    }
    emit('update:title', value);
    // console.log(props.modelModifiers);
    
};

</script>
