const App = {
  data() {
    return {
      objValue: {
        value: "",
        placeholder: "Введите текст",
      },
      notes: [],
      newValue: "",
    };
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
      let note = {
        value: this.objValue.value,
        change: false,
      };
      this.notes.push(note);
      this.objValue.value = "";
    },
    deleteNote(index) {
      this.notes.splice(index, 1);
    },
    onDoubleClick(note) {
      for (let i = 0; i < this.notes.length; i++) {
        this.notes[i].change = false;
      }
      note.change = true;
      this.wayStationOfOldValue(note);
    },
    acceptChange(note) {
      if (this.newValue) {
        note.value = this.newValue;
        this.newValue = "";
        note.change = false;
      } else note.change = false;
    },
    canselChange(note) {
      note.change = false;
      this.changeValue = "";
    },
    changeKeysToFalse() {
      for (let i = 0; i < this.notes.length; i++) {
        this.notes[i].change = false;
      }
    },

    wayStationOfOldValue(note) {
      return (this.newValue = note.value);
    },
  },
};

Vue.createApp(App).mount("#mainWrapper");
