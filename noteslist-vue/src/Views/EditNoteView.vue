<template>
  <AddEditNote v-model="newNote" ref="addEditNoteRef" bgColor="link" label="Edit Note" placeholder="Edit Note">
    <template #button>
      <button class = "button" @click.prevent="$router.back()">
        Cancel
      </button>  
      <button :disabled="!noteContent" class="button is-link">
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

const notesStore = useNotesStore();

const noteContent = notesStore.getNoteContentById(route.params.id);
</script>