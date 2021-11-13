<template>
  <b-list-group-item>
    <div class="d-flex">
      <div
        class="p-1 flex-grow-1 d-flex align-items-center"
        v-bind:class="{ del: todo.completed }"
      >
        {{ index + 1 }})
        <span class="ps-1 text-capitalize">{{ todo.title }}</span>
      </div>
      <div class="p-1 d-flex align-items-center">
        <b-form-checkbox
          size="lg"
          v-on:change="todo.completed = !todo.completed"
          v-model="completed"
        />
      </div>
      <div class="p-1">
        <b-button
          class="fw-bold fs-4"
          size="sm"
          variant="danger"
          v-on:click="$emit('remove-todo', todo.id)"
          >&times;</b-button
        >
      </div>
    </div>
  </b-list-group-item>
</template>

<script>
export default {
  data() {
    return {
      completed: this.todo.completed,
    };
  },
  watch: {
    todo(value) {
      this.completed = value.completed;
    },
  },
  props: {
    index: Number,
    todo: {
      type: Object,
      required: true,
    },
  },
  name: "TodoItem",
};
</script>

<style scoped>
.del {
  text-decoration: line-through;
}
</style>
