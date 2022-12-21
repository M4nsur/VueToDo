const App = {
  data() {
    return {
      formValue: {
        value: "",
        placeholder: "Введите текст",
      },
      notes: [],
    };
  },

  mounted() {
    this.getNotes(); // при монтировании запускаем метод getNotes
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
  methods: {
    getNotes() {
      //метод getNotes присваиет данные из localStorage к массиву notes
      const localDate = localStorage.getItem("notes");
      if (localDate) {
        this.notes = JSON.parse(localDate);
      }
    },

    addSubmit() {
      //метод пушит данные из inputa в массив notes
      this.notes.push(this.formValue.value);
      this.formValue.value = "";
    },

    deleteNote(index) {
      this.notes.splice(index, 1);
    },
  },
};

Vue.createApp(App).mount("#mainWrapper");
