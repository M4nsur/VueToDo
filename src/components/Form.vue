<template>
  <form @submit.prevent="onSubmit">
    <textarea
      required
      @click.prevent
      type="text"
      v-model="value"
      placeholder="введите текст"
    />
    <button :disabled="isBtnDisabled" class="btnStn">Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      isBtnDisabled: true,
    };
  },

  methods: {
    onSubmit() {
      if (this.value.trim()) {
        this.$emit("sendValue", { title: this.value, isChange: false });
        this.value = "";
      }
    },
  },

  computed: {
    checkValueForBtn(){
      return this.value
        ? // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          (this.isBtnDisabled = false)
        : // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          (this.isBtnDisabled = true);
    },

    // eslint-disable-next-line vue/return-in-computed-property
    test1() {
      console.log(this.isBtnDisabled);
    },
  },
};
</script>
