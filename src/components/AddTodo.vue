<template>
  <b-form class="mb-3" @submit.prevent="onSubmit">
    <b-input-group>
      <b-form-input
        class="rounded-0 rounded-start"
        type="text"
        placeholder="Enter todo..."
        v-model="title"
      />
      <b-input-group-append>
        <b-button class="rounded-0 rounded-end" variant="primary" type="submit"
          >Create</b-button
        >
      </b-input-group-append>
    </b-input-group>
    <b-form-select
      class="mt-3 form-select"
      :options="options"
      v-model="selected"
    />
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      selected: "all",
      options: [
        { value: "all", text: "All" },
        { value: "completed", text: "Completed" },
        { value: "not-completed", text: "Not completed" },
      ],
    };
  },
  watch: {
    selected(value) {
      this.$emit("filter-todos", value);
    },
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        this.$emit("add-todo", {
          id: this.$uuid.v4(),
          title: this.title,
          completed: false,
        });
      }
      this.title = "";
    },
  },
};
</script>
