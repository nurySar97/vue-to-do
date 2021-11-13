<template>
  <div>
    <h1>Todo application</h1>
    <hr />
    <AddTodo @add-todo="addTodo" />
    <TodoList v-if="loaded" v-bind:todos="todos" @remove-todo="removeTodo" />
    <div class="text-center" v-if="!loaded">
      <b-spinner variant="warning" />
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";

export default {
  name: "App",
  async mounted() {
    const sleep = (time) => new Promise((r) => setTimeout(r, time));
    const resp = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    const data = await resp.json();
    await sleep(1000);
    this.todos = data;
    this.loaded = true;
  },
  data() {
    return {
      todos: [],
      loaded: false,
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
