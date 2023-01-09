<template>
  <div class="main">
    <HeaderComp />
    <div class="bodyWraper">
      <router-view
        @sendIndex="deleteNote"
        @sendValue="addNote"
        :items="notes"
      />
    </div>
    <FooterComp />
  </div>
</template>

<script>
import HeaderComp from "@/components/Header.vue";
import FooterComp from "@/components/Footer.vue";

export default {
  components: {
    HeaderComp,
    FooterComp,
  },
  mounted() {
    this.getNotes(); // при монтировании запускаем метод getNotes
    this.$nextTick(function () {
      this.changeKeysToFalse();
    });
  },

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
    getNotes() {
      //метод getNotes присваиет данные из localStorage к массиву notes
      const localDate = localStorage.getItem("notes");
      if (localDate) {
        this.notes = JSON.parse(localDate);
      }
    },
    addNote(note) {
      this.notes.push(note);
    },
    deleteNote(i) {
      this.notes.splice(i, 1);
    },
    changeKeysToFalse() {
      this.notes.forEach((el) => (el.isChange = false));
    },
  },
};
</script>
