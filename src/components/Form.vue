<!-- eslint-disable no-dupe-keys -->
<!-- eslint-disable vue/no-dupe-keys -->
<!-- eslint-disable vue/no-dupe-keys -->
<template>
  <form @submit.prevent="onSubmit">
    <textarea
      required
      @click.prevent
      type="text"
      v-model="value"
      placeholder="введите текст"
    />
    <button :disabled="handleDisabled" class="btnStn">Add</button>
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
