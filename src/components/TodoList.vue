<template lang="en">
  <div>
    <b-list-group>
      <TodoItem />
    </b-list-group>
  </div>
</template>
<script>
import TodoItem from "./TodoItem.vue";
export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
};
</script>

<style></style>
