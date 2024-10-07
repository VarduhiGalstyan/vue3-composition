<template>
  <!-- <div class="baz boo"> -->
    <h3 :class="$attrs.class">Class Binding</h3>

    <div class="static" :class="[{ [activeClass]: isActive}, erroClass]">
        Apply Active Class
    </div>
  <!-- </div> -->
</template>

<script setup> 
    import {computed, reactive, ref} from 'vue';

    // const classObjects = reactive({
    //     active: true,
    //     'text-danger': true
    // }); 

    const classObject = computed(() => {
        return {
            activ: isActive.value && !hasError.value,
            'text-danger': hasError.value
        };
    });

    const activeClass = ref('activedsds');
    const erroClass = ref('text-danger');

    const isActive = ref(true);
    const hasError = ref(true);
</script>