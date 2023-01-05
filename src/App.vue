<template>
  <div class="mainWrapper">
    <FormComp @sendValue="addNote" />
    <Notes  @sendIndex="deleteNote" :items="notes" />
  </div>
</template>

<script>
import FormComp from "@/components/Form.vue";
import Notes from "@/components/Notes.vue";
export default {
  components: {
    FormComp,
    Notes,
  },
  data() {
    return {
      notes: ["привет", "здравствуй", "оптат"],
    };
  },
  methods: {
    addNote(payload) {
      this.notes.push(payload);
    },
    deleteNote(i) {
      this.notes.splice(i, 1);
    },
  },
};
</script>
