<template>
  <v-card class="todo-item mx-auto">
    <v-card-text>
      <div>{{ status }}</div>
      <p class="headline mb-5 text--primary">{{ name }}</p>
      <p>日付：{{ months }}月{{ days }}日{{ week }}曜日</p>
      <p>時間帯：{{ time }}</p>
      <p>方法：{{ tool }}</p>
      <div v-if="text" class="text--primary">
        {{ text.slice(0, 15) }}<span v-if="text.length > 15">...</span>
      </div>
      <div v-else-if="!text" class="text--primary">詳細はありません。</div>
    </v-card-text>
    <v-card-actions class="justify-space-between">
      <router-link :to="{ name: 'todo_detail', params: { todo_id: id } }">
        <v-btn text color="primary">詳細を見る</v-btn>
      </router-link>
      <div>
        <router-link :to="{ name: 'todo_edit', params: { todo_id: id } }">
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
              class="todo-item__button"
              @click="deleteConfirm(id, name)"
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
    <div class="text-center">
      <v-snackbar v-model="snackbar" :timeout="timeout">
        {{ snackbarText }}

        <template v-slot:action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    snackbar: false,
    snackbarText: "削除しました",
    timeout: 3000
  }),
  props: {
    id: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    tool: {
      type: String,
      required: true
    },
    text: {
      type: String
    },
    months: {
      type: Number
    },
    url: {
      type: String
    },
    days: {
      type: Number
    },
    week: {
      type: String
    }
  },
  methods: {
    deleteConfirm(id, name) {
      if (confirm(`${name}のToDoを本当に削除してもよろしいですか？`)) {
        this.deleteTodo({ id });
        this.snackbar = true;
      }
    },
    ...mapActions(["deleteTodo"])
  }
};
</script>

<style lang="scss" scoped>
.todo-item {
  cursor: pointer;
  @include pc {
    &:hover {
      background-color: #e4f1fa;
    }
  }
  &__button {
    margin: 4px;
  }
}
</style>
