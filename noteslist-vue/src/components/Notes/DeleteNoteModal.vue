<template>
<div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Delet Note?</p>
      <button class="delete" aria-label="close" @click="closeModal"></button>
    </header>
    <section class="modal-card-body">
      Are you sure you want to Delete?
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" >Delete</button>
      <button class="button" @click="closeModal">Cancel</button>  
    </footer>
  </div>
</div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
});

const emits = defineEmits(['update:modalValue']);

const closeModal = () => {
  emits('update:modalValue', false);
};

</script>