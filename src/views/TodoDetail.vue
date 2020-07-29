<template>
  <div class="todo-detail">
    <h1 class="todo-detail__title">{{ todo.name }}のToDo詳細</h1>
    <v-card class="mx-auto">
      <v-card-text>
        <div>{{ todo.status }}</div>
        <p class="display-1 text--primary">{{ todo.name }}</p>
        <p>{{ todo.time }}</p>
        <p>面接方法：{{ todo.tool }}</p>
        <p class="todo-detail__card-article text--primary">自由記述欄：<br />{{ todo.text }}</p>
        <div class="todo-detail__card-article text--primary">志望動機：<br />{{ todo.resume }}</div>
      </v-card-text>
      <v-card-actions class="justify-space-between">
        <div class="todo-detail__card-footer">
          <router-link
            :to="{ name: 'todo_edit', params: { todo_id: todo.id } }"
          >
            <v-btn
              class="todo-detail__card-button"
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
            class="todo-detail__card-button"
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
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  created() {
    if (!this.$route.params.todo_id) return;
    const todo = this.$store.getters.getTodoId(this.$route.params.todo_id);
    if (todo) {
      this.todo = todo;
    } else {
      this.$router.push("/");
    }
  },
  data() {
    return {
      todo: {}
    };
  },

  methods: {
    deleteConfirm(id, name) {
      if (confirm(`${name}のToDoを本当に削除してもよろしいですか？`)) {
        this.deleteTodo({ id });
      }
    },
    ...mapActions(["deleteTodo"])
  }
};
</script>

<style lang="scss" scoped>
.todo-detail {
  max-width: 500px;
  margin: 40px auto;
  &__title {
    margin-bottom: 40px;
  }
  &__card-article {
    line-height: 2;
  }
  &__card-button {
    margin: 4px;
  }
  &__card-footer {
    margin: 0 0 0 auto;
  }
}
</style>
