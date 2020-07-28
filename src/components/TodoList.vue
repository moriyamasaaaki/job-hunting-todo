<template>
  <v-container class="todo-list">
    <h1>ToDoリスト</h1>
    <p v-if="userName">ようこそ{{ userName }}さん✋</p>
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
        />
      </v-col>
    </v-row>
    <div class="no-text" v-else>
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
  created() {
    this.getTodos();
  },

  data() {
    return {
      todos: "",
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
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
.no-text {
  margin: 80px 0;
  text-align: center;
  p {
    font-size: 24px;
    font-weight: 700;
  }
}
</style>
