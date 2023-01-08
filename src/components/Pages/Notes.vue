<template>
  <FormComp @sendValue="wayStationForEmit" />
  <div
    class="notesWrapper"
    sendIndex="index"
    v-for="(note, index) in items"
    :key="index"
  >
    <div
      class="note"
      v-if="note.isChange === false"
      @dblclick="handleIsChange(note)"
    >
      {{ note.title }}
      <button class="allBtn" @click="$emit('sendIndex', index)">🗑️</button>
    </div>
    <div class="note" v-else-if="note.isChange === true">
      <input
        @keyup.enter="acceptChange(note)"
        class="changeInput"
        type="text"
        v-model="newValue"
      />
      <button class="allBtn" @click="cancelChange(note)">🗙</button>
      <button
        :disabled="handleDisabled"
        class="allBtn"
        @click="acceptChange(note)"
      >
        ☑️
      </button>
    </div>
  </div>
  <div class="descr">
    Чтобы редактировать заметку совершите DoubleClick по ней
  </div>
</template>

<script>
import FormComp from "@/components/Pages/Form.vue";
export default {
  components: {
    FormComp,
  },

  emits: ["sendValue", "sendIndex"],
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

  computed: {
    handleDisabled() {
      if (this.newValue.trim()) {
        return false;
      } else {
        return true;
      }
    },
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
    wayStationForEmit(payload) {
      this.$emit("sendValue", payload);
    },
  },
};
</script>
