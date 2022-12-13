const Todo = {
  data() {
    return {
      myPl: "Ваш текст",
      noteArr: [],
      inputValue: "",
      warning: null,
    };
  },
  methods: {
    inputHandler(event) {
      this.inputValue = event.target.value;
      if (this.inputValue.length) {
        this.warning = null;
      }
    },
    addNote() {
      if (this.inputValue.length) {
        this.noteArr.push(this.inputValue);
        this.inputValue = "";
      } else this.warning = "Строка должна быть заполнена";
    },
    deleteNote(index) {
      this.noteArr.splice(index, 1);
    },
  },
};

Vue.createApp(Todo).mount("#todoWrapper");
