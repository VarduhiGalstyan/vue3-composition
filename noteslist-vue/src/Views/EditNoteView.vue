<template>
  <AddEditNote v-model="noteContent" ref="addEditNoteRef" bgColor="link" label="Edit Note" placeholder="Edit Note">
    <template #button>
      <button class = "button" @click.prevent="$router.back()">
        Cancel
      </button>  
      <button :disabled="!noteContent" class="button is-link" @click.prevent="onNoteSave">
        Save Note
      </button>    
    </template>
  </AddEditNote>

  <!-- {{ $route.params.id }} -->
</template>

<script setup>
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import { useNotesStore } from '@/stores/NotesStore';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const router = useRoute();

const notesStore = useNotesStore();

const noteContent = ref('');

noteContent.value = notesStore.getNoteContentById(route.params.id);

const onNoteSave = () => {
  // console.log(noteContent.value);
  
  notesStore.updateNote(route.params.id, noteContent.value);
  router.push({name: 'notes'});

};
</script>