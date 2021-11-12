<template lang="en">
<div>
    <ul>
        <TodoItem />
    </ul>
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

<style>
</style>