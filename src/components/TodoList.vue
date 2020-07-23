<template>
  <v-container>
    <h1>ToDoリスト</h1>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="3"
        xl="3"
        v-for="todo in todos"
        :key="todo.id"
      >
        <v-card class="mx-auto" v-if="todos">
          <v-card-text>
            <div>{{ todo.status }}</div>
            <p class="display-1 text--primary">{{ todo.name }}</p>
            <p>{{ todo.time }}</p>
            <p>{{ todo.tool }}</p>
            <div class="text--primary">{{ todo.text }}</div>
          </v-card-text>
          <v-card-actions class="justify-space-between">
            <v-btn text color="primary">詳細を見る</v-btn>
            <div>
              <router-link
                :to="{ name: 'todo_edit', params: { todo_id: todo.id } }"
              >
                <v-btn
                  class="card-button"
                  color="accent"
                  fab
                  outlined
                  small
                  dark
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </router-link>
              <v-btn
                class="card-button"
                @click="deleteConfirm(todo.id, todo.name)"
                color="error"
                fab
                outlined
                small
                dark
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
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
import { mapActions } from "vuex";
export default {
  created() {
    this.getTodos();
  },

  data() {
    return {
      todos: [],
      loading: false
    };
  },

  methods: {
    deleteConfirm(id, name) {
      if (confirm(`${name}のToDoを本当に削除してもよろしいですか？`)) {
        this.deleteTodo({ id });
      }
    },
    getTodos() {
      this.loading = true;
      setTimeout(() => {
        this.todos = this.$store.state.todos;
        this.loading = false;
      }, 2000);
    },
    ...mapActions(["deleteTodo"])
  }
};
</script>

<style lang="scss" scoped>
.card-button {
  margin: 4px;
}

a {
  text-decoration: none;
}
</style>
