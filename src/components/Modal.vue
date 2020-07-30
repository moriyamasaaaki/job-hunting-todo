<template>
  <v-row class="modal" justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="modal__btn mx-2"
          fab
          dark
          color="indigo"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">就活ToDo作成</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="企業名"
                  v-model="todos.name"
                  required
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="4">
                <v-select
                  :items="months"
                  label="月"
                  v-model="todos.months"
                  required
                  :rules="[rules.required]"
                ></v-select>
              </v-col>

              <v-col cols="12" sm="4">
                <v-select
                  :items="days"
                  label="日にち"
                  v-model="todos.days"
                  required
                  :rules="[rules.required]"
                ></v-select>
              </v-col>

              <v-col cols="12" sm="4">
                <v-select
                  :items="week"
                  label="曜日"
                  v-model="todos.week"
                  required
                  :rules="[rules.required]"
                ></v-select>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  label="時間帯"
                  v-model="todos.time"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="場所"
                  v-model="todos.place"
                  required
                  :rules="[rules.required]"
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
                  v-model="todos.tool"
                  required
                  :rules="[rules.required]"
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
                  v-model="todos.status"
                  :rules="[rules.required]"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  name="input-7-1"
                  label="自由記述覧"
                  v-model="todos.text"
                ></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  name="input-7-1"
                  label="志望動機"
                  v-model="todos.resume"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >キャンセル</v-btn
          >
          <v-btn
            color="blue darken-1"
            text
            :disabled="
              !todos.name ||
                !todos.status ||
                !todos.time ||
                !todos.tool ||
                !todos.place
            "
            @click="submit"
            >作成</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Modal",
  components: {},

  data: () => ({
    dialog: false,
    todos: {},
    createdAt: new Date(),
    updatedAt: new Date(),
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    days: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    week: ["月", "火", "水", "木", "金", "土", "日"],
    rules: {
      required: value => !!value || "*この項目は必須です。"
    }
  }),

  methods: {
    submit() {
      this.todos.createdAt = this.createdAt;
      this.todos.updatedAt = this.updatedAt;
      this.addTodo(this.todos);
      this.dialog = false;
      this.todos = {};
    },
    ...mapActions(["addTodo"])
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: relative;
  &__btn {
    position: fixed;
    right: 3%;
    bottom: 3%;
  }
}
</style>
