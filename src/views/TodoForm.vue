<template>
  <div class="todo-edit">
    <v-card>
      <v-card-title>
        <span class="headline">就活ToDo{{ title }}</span>
      </v-card-title>
      <v-card-text>
        <v-container class="todo-edit__form">
          <v-row class="todo-edit__form-left">
            <v-col cols="12">
              <v-text-field
                label="企業名(*必須)"
                v-model="todo.name"
                required
                outlined
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="場所(*必須)"
                v-model="todo.place"
                required
                outlined
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                :items="months"
                label="月(*必須)"
                v-model="todo.months"
                required
                outlined
                :rules="[rules.required]"
              ></v-select>
            </v-col>

            <v-col cols="12" md="6">
              <v-select
                :items="days"
                label="日にち(*必須)"
                v-model="todo.days"
                required
                outlined
                :rules="[rules.required]"
              ></v-select>
            </v-col>

            <v-col cols="12" md="6">
              <v-select
                :items="week"
                label="曜日(*必須)"
                v-model="todo.week"
                required
                outlined
                :rules="[rules.required]"
              ></v-select>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="時間帯(*必須)"
                v-model="todo.time"
                outlined
                :rules="[rules.required]"
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
                label="面接方法(*必須)"
                v-model="todo.tool"
                required
                outlined
                :rules="[rules.required]"
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
                label="選考状態(*必須)"
                v-model="todo.status"
                outlined
                :rules="[rules.required]"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="サイトURL(任意)"
                v-model="todo.url"
                required
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="todo-edit__form-right">
            <v-col cols="12">
              <v-textarea
                name="input-7-1"
                label="自由記述覧(任意)"
                v-model="todo.text"
                outlined
                rows="8"
              ></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-textarea
                name="input-7-1"
                label="志望動機(任意)"
                counter
                v-model="todo.resume"
                outlined
                rows="11"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="back">キャンセル</v-btn>
        <v-btn
          color="blue darken-1"
          text
          :disabled="
            !todo.name ||
              !todo.status ||
              !todo.time ||
              !todo.tool ||
              !todo.place ||
              !todo.months ||
              !todo.days ||
              !todo.week
          "
          @click="submit"
          >{{ btnText }}</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  created() {
    const todo = this.$store.getters.getTodoId(this.$route.params.todo_id);
    if (todo) {
      this.title = "編集";
      this.btnText = "更新";
      this.todo = todo;
      this.todo.updatedAt = this.updatedAt;
    } else {
      this.title = "作成";
      this.btnText = "作成";
    }
  },
  data() {
    return {
      title: "",
      btnText: "",
      todo: {},
      createdAt: new Date(),
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
      week: ["月", "火", "水", "木", "金", "土", "日"],
      rules: {
        required: value => !!value || "*この項目は必須です。"
      }
    };
  },
  methods: {
    submit() {
      if (this.$route.params.todo_id) {
        this.updateTodo({ id: this.$route.params.todo_id, todo: this.todo });
        this.$router.push("/todos");
      } else {
        this.todo.createdAt = this.createdAt;
        this.todo.updatedAt = this.updatedAt;
        this.addTodo(this.todo);
        this.todo = {};
        this.$router.push("/todos");
      }
    },
    back() {
      this.$router.push("/todos");
    },
    ...mapActions(["addTodo", "updateTodo"])
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
