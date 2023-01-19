<template>
  <form @submit.prevent="onSubmit">
    <input
      class="inputForNotes"
      required
      @click.prevent
      type="text"
      v-model="value"
      placeholder="введите текст"
    />
    <button class="addNote allBtn" :disabled="handleDisabled">✎</button>
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
      if (this.value.trim()) {
        this.$emit("sendValue", { title: this.value, isChange: false });
        this.value = "";
      }
    },
  },

  computed: {
    handleDisabled() {
      if (this.value.trim()) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>
