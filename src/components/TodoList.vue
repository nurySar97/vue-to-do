<template>
  <div>
    <b-list-group>
      <TodoItem v-for="todo in todos" v-bind:todo="todo" v-bind:key="todo" />
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
};
</script>

<style></style>
