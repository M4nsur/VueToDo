<template>
  <form @submit.prevent="onSubmit">
    <textarea
      required
      @click.prevent
      type="text"
      v-model="value"
      placeholder="введите текст"
    />
    <button class="btnStn">Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("sendValue", this.value);
      this.value = "";
    },
  },
};
</script>
