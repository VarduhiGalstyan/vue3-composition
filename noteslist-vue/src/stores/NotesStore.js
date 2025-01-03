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

  const totalNotesCount = computed(() => {
    return notes.value.length;
  });

  const totalCharacterCount = computed(() => {
    let count = 0;
    for(let note of notes.value){
      count += note.content.length;
    }
    return count;
  })

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

  const  updateNote = (id, content) => {
    const index = notes.value.findIndex((note) => note.id == id);
    // console.log(index);
    notes.value[index].content = content;
  };

  return {
    notes,
    updateNote,
    getNoteContentById,
    addNote,
    deleteNote,
    totalCharacterCount,
    totalNotesCount
  };
});