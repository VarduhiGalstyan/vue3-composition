<template>
  <div class="mt-3">
    <table class="table is-fullwidth">
      <thead>
        <th>Stat</th>
        <th>Value</th>
      </thead>

      <tbody>
        <tr>
          <td>Total Notes Count</td>
          <td>{{ notesCount }}</td>
        </tr>
        <tr>
          <td>Total Characters Count</td>
          <td>{{ totalCharacterCount }}</td>        
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useNotesStore } from '@/stores/NotesStore';


const notesStore = useNotesStore();

const notesCount = notesStore.totalNotesCount;
// const totalNotesCount = notesStore.totalNotesCount;
const totalCharacterCount = notesStore.totalCharacterCount;
</script>