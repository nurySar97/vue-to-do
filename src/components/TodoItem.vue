<template>
  <b-list-group-item>
    <div class="d-flex">
      <div
        class="p-2 flex-grow-1 d-flex align-items-center"
        v-bind:class="{ del: todo.completed }"
      >
        {{ todo.title }}
      </div>
      <div class="p-2 d-flex align-items-center">
        <b-form-checkbox
          size="lg"
          v-on:change="todo.completed = !todo.completed"
        />
      </div>
      <div class="p-2">
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
  props: {
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
