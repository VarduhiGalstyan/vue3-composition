<template>
    <div>
        <input type="text" :value="modelValue" @input = "$event => $emit('update:modelValue', $event.target.value)"/>
    </div>
</template>

<script setup>
const props = defineProps({
    modelValue: {
        type: String,
        required: true
    }
});

const emit = defineEmits(['update:modelValue'])
</script>