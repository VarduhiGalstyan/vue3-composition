<template>
  

  <SingleNotes v-for="note in notes" :key="note.id" :note="note" />
</template>

<script setup>
import SingleNotes from '@/components/Notes/SingleNotes.vue';
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import { ref } from 'vue';
import { useNotesStore } from '../stores/NotesStore' ;
import { storeToRefs } from 'pinia';

const notesStore = useNotesStore();

const addEditNoteRef = ref(null);

const {notes} = storeToRefs(notesStore);

const newNote = ref('');

const addNote = () => {
  notesStore.addNote(newNote.value);
  newNote.value ='',  
  addEditNoteRef.value.focusTextArea();
};

const deleteNote = (idToDelete) => {
}
</script>