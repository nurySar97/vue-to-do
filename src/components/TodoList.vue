<template>
  <div>
    <b-list-group>
      <TodoItem
        v-on:remove-todo="removeTodo"
        v-for="todo in todos" :key="todo.id"
        v-bind:todo="todo"
      />
    </b-list-group>
  </div>
</template>
<script>
import TodoItem from "./TodoItem.vue";
export default {
  name: "TodoList",
  props: ["todos"],
  components: {
    TodoItem,
  },
  methods: {
    removeTodo(id) {
      this.$emit('remove-todo', id)
    },
  },
};
</script>

<style></style>
