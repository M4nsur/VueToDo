<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="mainWrapper">
    <FormComp @sendValue="addNote" />
    <Notes
      @sendindexForChange="handleChange"
      @sendIndexForDelete="deleteNote"
      :items="notes"
    />
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

  // mounted() {
  //   this.getNotes(); // при монтировании запускаем метод getNotes
  //   this.$nextTick(function () {
  //     this.changeKeysToFalse();
  //   });
  // },

  watch: {
    // мы следим за массивом notes, если в нем произошли какие-то изменения, то мы запускаем handler функцию
    notes: {
      handler: function (uptList) {
        localStorage.setItem("notes", JSON.stringify(uptList)); //добавляем элементы массива "notes" в localStorage
      },
      deep: true, //глубокая проверка, следим за элементами массива
    },
  },

  data() {
    return {
      notes: [],
    };
  },

  methods: {
    addNote(note) {
      this.notes.push(note);
    },
    deleteNote(i) {
      this.notes.splice(i, 1);
    },
    handleChange(this.notes, i) {
      this.notes.forEach(notes)
    },
  },
};
</script>
