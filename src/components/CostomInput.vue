<template>
    <div>
        <!-- <input type="text" :value="modelValue" @input = "$event => $emit('update:title', $event.target.value)"/> -->
        <input type="text" v-model="value">
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    }
});

const emit = defineEmits(['update:title']);

const  value = computed({
    get() {
        return props.title
    },
    set(newValue) {
        console.log('computed');
        emit('update:title', value )
    }
});

</script>
