<template>
  <div sendIndex="index" v-for="(note, index) in items" :key="index">
    <div v-if="note.isChange === false" @dblclick="handleIsChange(note)">
      {{ note.title }}
      <button @click="$emit('sendIndex', index)">🗑️</button>
    </div>
    <p v-else-if="note.isChange === true">
      <input
        @keyup.enter="acceptChange(note)"
        class="changeInput"
        type="text"
        v-model="newValue"
      />
      <button class="btnStn" @click="cancelChange(note)">❌</button>
      <button class="btnStn" @click="acceptChange(note)">✅</button>
    </p>
  </div>
</template>

<script>
export default {
  emits: ["sendIndex", "sendNote"],
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      newValue: "",
    };
  },

  methods: {
    cancelChange(item) {
      item.isChange = false;
    },
    handleIsChange(note) {
      this.items.forEach((el) => (el.isChange = false));
      note.isChange = true;
      this.newValue = note.title;
    },
    acceptChange(note) {
      note.title = this.newValue;
      note.isChange = false;
    },
  },
};
</script>
