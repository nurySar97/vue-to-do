<template>
  <div id="app">
    <div class="container">
      <h1>Todo application</h1>
      <hr />
      <TodoList />
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoList,
  },
};
</script>
