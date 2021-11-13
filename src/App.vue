<template>
  <div id="app">
    <div class="container">
      <h1>Todo application</h1>
      <hr />
      <AddTodo @add-todo="addTodo" />
      <TodoList v-bind:todos="todos" @remove-todo="removeTodo" />
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import AddTodo from "./components/AddTodo.vue";

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
    AddTodo,
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>
