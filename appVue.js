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

  watch: {
    notes: {
      handler: function (val) {
        console.log("тест");
      },
      deep: true,
    },
  },
  methods: {
    checkSubmit() {
      console.log("есть контакт");
      this.notes.push(this.formValue.value);
      this.formValue.value = "";
    },

    deleteNote(index) {
      this.notes.splice(index, 1);
    },
  },
};

Vue.createApp(App).mount("#mainWrapper");
