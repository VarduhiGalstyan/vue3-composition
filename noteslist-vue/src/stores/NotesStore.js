import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useNotesStore = defineStore('notesStore', () => {
  const notes = ref([
    {id: 'id1', content: 'First Note'},
    {id: 'id2', content: 'Second Note'}
  ]);

  const getNoteContentById = computed(() => {
    // return notes.value[0].content;
    return (id) => {
      // console.log('getter id', id);
      return notes.value.find((note) => note.id ==id).content;
    };
  });

  const addNote = (noteContent) => {
    const currentDate = new Date().getTime().toString();
  const note = {
    id: currentDate,
    content: noteContent
  };

  notes.value.unshift(note);
  };

  const deleteNote = (noteId) => {
    notes.value = notes.value.filter((note) => note.id !== noteId)

  };

  return {
    notes,
    getNoteContentById,
    addNote,
    deleteNote
  };
});