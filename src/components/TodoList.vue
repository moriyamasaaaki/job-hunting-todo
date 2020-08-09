<template>
  <v-container class="todo-list">
    <div v-if="todos && todos.length > 0">
      <h1 class="todo-list__title">{{ userName }}さんの就活ToDo</h1>
      <p class="todo-list__length">
        現在
        <span class="todo-list__length-number">{{ todos.length }}</span>
        件あります
      </p>
    </div>
    <v-row v-if="todos && todos.length > 0">
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="3"
        xl="3"
        v-for="todo in todos"
        :key="todo.id"
      >
        <TodoItem
          :id="todo.id"
          :status="todo.status"
          :name="todo.name"
          :time="todo.time"
          :tool="todo.tool"
          :text="todo.text"
          :months="todo.months"
          :url="todo.url"
          :days="todo.days"
          :week="todo.week"
        />
      </v-col>
    </v-row>
    <div
      class="todo-list__default-text"
      v-else-if="todos.length === 0 && !loading"
    >
      <p>ToDoを作成してください。</p>
    </div>
    <div class="text-center">
      <v-progress-circular
        :size="50"
        v-show="loading"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from "@/components/TodoItem";

export default {
  components: {
    TodoItem
  },
  async created() {
    await this.getTodos();
  },

  data() {
    return {
      todos: [],
      loading: false
    };
  },

  computed: {
    ...mapGetters(["userName"])
  },
  methods: {
    getTodos() {
      this.loading = true;
      setTimeout(() => {
        this.todos = this.$store.state.todo.todos;
        this.loading = false;
      }, 2500);
    }
  }
};
</script>

<style lang="scss" scoped>
.todo-list {
  margin: 32px auto;
  &__title {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 24px;
  }
  &__default-text {
    margin: 80px 0;
    text-align: center;
    p {
      font-size: 24px;
      font-weight: 700;
    }
  }
  &__length-number {
    font-weight: 700;
    color: orangered;
    font-size: 20px;
  }
}
</style>
