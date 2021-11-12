<template>
  <div id="app">
    <div class="container">
      <h1>Todo application</h1>
      <hr />
      <TodoList v-bind:todos="todos" />
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  name: "App",
  data() {
    return {
      todos: [
        { id: 1, title: "Buy bread", completed: true },
        { id: 2, title: "Clear room", completed: false },
        { id: 3, title: "Buy beer", completed: false },
      ],
    };
  },
  components: {
    TodoList,
  },
};
</script>
