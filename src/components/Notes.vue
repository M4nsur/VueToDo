<template>
  <div sendIndexForDelete="index" v-for="(note, index) in items" :key="index">
    <div>
      {{ note }}
    </div>
    <button @click="$emit('sendIndex', index)">🗑️</button>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
