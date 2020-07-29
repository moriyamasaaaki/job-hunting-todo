<template>
  <div class="edit-form">
    <v-card>
      <v-card-title>
        <span class="headline">就活ToDo編集</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="企業名"
                v-model="todo.name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="時間帯" v-model="todo.time"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="場所"
                v-model="todo.place"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                :items="[
                  '対面',
                  'Zoom',
                  'Skype',
                  'Googleハングアウト',
                  'Whereby',
                  'Microsoft Teams'
                ]"
                label="面接方法"
                v-model="todo.tool"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete
                :items="[
                  '説明会',
                  '一次選考',
                  '二次選考',
                  '三次選考',
                  '四次選考',
                  '最終面接',
                  '面談',
                  'インターン'
                ]"
                label="選考状態"
                v-model="todo.status"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12">
              <v-textarea
                name="input-7-1"
                label="自由記述覧"
                v-model="todo.text"
              ></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-textarea
                name="input-7-1"
                label="志望動機"
                v-model="todo.resume"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="back">キャンセル</v-btn>
        <v-btn color="blue darken-1" text @click="submit">作成</v-btn>
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
      this.todo.updatedAt = this.updatedAt;
    } else {
      this.$router.push("/todos");
    }
  },
  data() {
    return {
      todo: {},
      updatedAt: new Date()
    };
  },
  methods: {
    submit() {
      if (this.$route.params.todo_id) {
        this.updateTodo({ id: this.$route.params.todo_id, todo: this.todo });
      }
      this.$router.push("/todos");
    },
    back() {
      this.$router.push("/todos");
    },
    ...mapActions(["updateTodo"])
  }
};
</script>

<style lang="scss" scoped>
.edit-form {
  max-width: 600px;
  margin: 40px auto;
}
</style>
