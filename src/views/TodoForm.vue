<template>
  <div class="todo-edit">
    <v-card>
      <v-card-title>
        <span class="headline">就活ToDo編集</span>
      </v-card-title>
      <v-card-text>
        <v-container class="todo-edit__form">
          <v-row class="todo-edit__form-left">
            <v-col cols="12">
              <v-text-field
                label="企業名"
                v-model="todo.name"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="場所"
                v-model="todo.place"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                :items="months"
                label="月"
                v-model="todo.months"
                required
                outlined
              ></v-select>
            </v-col>

            <v-col cols="12" md="6">
              <v-select
                :items="days"
                label="日にち"
                v-model="todo.days"
                required
                outlined
              ></v-select>
            </v-col>

            <v-col cols="12" md="6">
              <v-select
                :items="week"
                label="曜日"
                v-model="todo.week"
                required
                outlined
              ></v-select>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="時間帯"
                v-model="todo.time"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
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
                outlined
              ></v-select>
            </v-col>
            <v-col cols="12" md="6">
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
                outlined
              ></v-autocomplete>
            </v-col>
          </v-row>
          <v-row class="todo-edit__form-right">
            <v-col cols="12">
              <v-textarea
                name="input-7-1"
                label="自由記述覧"
                v-model="todo.text"
                outlined
                rows="7"
              ></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-textarea
                name="input-7-1"
                label="志望動機"
                v-model="todo.resume"
                outlined
                rows="7"
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
      updatedAt: new Date(),
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      days: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31
      ],
      week: ["月", "火", "水", "木", "金", "土", "日"]
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
.todo-edit {
  max-width: 1000px;
  margin: 40px auto;
  &__form {
    @include pc {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
    }
  }
  &__form-left {
    @include pc {
      width: 50%;
      padding: 8px;
    }
  }
  &__form-right {
    @include pc {
      width: 50%;
      padding: 8px;
    }
  }
}
</style>
