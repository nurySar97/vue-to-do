<template>
  <b-list-group-item>
    <b-row>
      <b-col class="pl-3" cols="10">
        {{ todo.title }}
      </b-col>
      <b-col class="p-0 text-end" cols="1">
        <b-form-checkbox
          id="checkbox-1"
          v-model="todo.completed"
          name="checkbox-1"
          value="todo.completed"
          unchecked-value="completed"
        />
      </b-col>
      <b-col class="p-0 text-center" cols="1">
        <b-button size="sm" variant="danger">&times;</b-button>
      </b-col>
    </b-row>
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

<style></style>
