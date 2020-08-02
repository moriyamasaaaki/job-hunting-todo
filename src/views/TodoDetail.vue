<template>
  <div class="todo-detail">
    <h1 class="todo-detail__title">{{ todo.name }}の就活詳細</h1>
    <v-card class="mx-auto">
      <v-card-text>
        <div>{{ todo.status }}</div>
        <p class="display-1 text--primary">{{ todo.name }}</p>
        <p>{{ todo.months }}月{{ todo.days }}日{{ todo.week }}曜日</p>
        <p>{{ todo.time }}</p>
        <p>面接方法：{{ todo.tool }}</p>
        <p class="todo-detail__card-article text--primary" v-if="todo.text">
          自由記述欄：
          <br />
          {{ todo.text }}
        </p>
        <p
          class="todo-detail__card-article text--primary"
          v-else-if="!todo.text"
        >
          自由記述欄：
          <br />詳細はありません。
        </p>
        <div class="todo-detail__card-article text--primary" v-if="todo.resume">
          志望動機：
          <br />
          {{ todo.resume }}
        </div>
        <div
          class="todo-detail__card-article text--primary"
          v-else-if="!todo.resume"
        >
          志望動機：
          <br />志望動機はありません。
          {{ todo.resume }}
        </div>
      </v-card-text>
      <v-card-actions class="justify-space-between">
        <div class="todo-detail__card-footer">
          <router-link
            :to="{ name: 'todo_edit', params: { todo_id: todo.id } }"
          >
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="todo-item__button"
                  color="accent"
                  fab
                  outlined
                  small
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>
              <span>ToDoを編集する</span>
            </v-tooltip>
          </router-link>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="todo-detail__card-button"
                @click="deleteConfirm(todo.id, todo.name)"
                color="error"
                fab
                outlined
                small
                dark
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </template>
            <span>ToDoを削除する</span>
          </v-tooltip>
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
      this.$router.push("/todos");
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
        this.$router.push("/todos");
      }
    },
    ...mapActions(["deleteTodo"])
  }
};
</script>

<style lang="scss" scoped>
.todo-detail {
  padding: 16px;
  max-width: 550px;
  margin: 40px auto;
  &__title {
    margin-bottom: 40px;
  }
  &__card-article {
    line-height: 2;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  &__card-button {
    margin: 8px;
  }
  &__card-footer {
    margin: 0 0 0 auto;
  }
}
</style>
