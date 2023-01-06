<template>
  <div sendIndex="index" v-for="(note, index) in items" :key="index">
    <div>
      {{ note.title }}
    </div>
    <button @click="$emit('sendIndex', index)">🗑️</button>
  </div>
</template>

<script>
export default {
  emits: ["sendIndex"],
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
