<template>
  <v-card class="mx-auto">
    <v-card-text>
      <div>{{ status }}</div>
      <p class="display-1 text--primary">{{ name }}</p>
      <p>{{ time }}</p>
      <p>{{ tool }}</p>
      <div class="text--primary">{{ text }}</div>
    </v-card-text>
    <v-card-actions class="justify-space-between">
      <router-link :to="{ name: 'todo_detail', params: { todo_id: id } }">
        <v-btn text color="primary">詳細を見る</v-btn>
      </router-link>
      <div>
        <router-link :to="{ name: 'todo_edit', params: { todo_id: id } }">
          <v-btn class="card-button" color="accent" fab outlined small dark>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </router-link>
        <v-btn
          class="card-button"
          @click="deleteConfirm(id, name)"
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
</template>

<script>
import { mapActions } from "vuex";

export default {
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
    }
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
.card-button {
  margin: 4px;
}
</style>
