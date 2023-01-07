<template>
  <div sendIndex="index" v-for="(note, index) in items" :key="index">
    <div v-if="note.isChange === false" @dblclick="$emit('sendindexForChange', index)">
      {{ note.title }}
      <button @click="$emit('sendIndexForDelete', index)">🗑️</button>
    </div>
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
