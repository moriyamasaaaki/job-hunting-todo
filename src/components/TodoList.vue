<template>
  <v-container>
    <h1>ToDo一覧</h1>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="3"
        xl="3"
        v-for="todo in todos"
        :key="todo"
      >
        <v-card class="mx-auto">
          <v-card-text>
            <div>{{ todo.status }}</div>
            <p class="display-1 text--primary">{{ todo.name }}</p>
            <p>{{ todo.time }}</p>
            <p>{{ todo.tool }}</p>
            <div class="text--primary">
              {{ todo.text }}
            </div>
          </v-card-text>
          <v-card-actions class="justify-space-between">
            <v-btn text color="primary">詳細を見る</v-btn>
            <div>
              <v-btn class="card-button" color="accent" fab outlined small dark>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn class="card-button" color="error" fab outlined small dark>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  created() {
    this.todos = this.$store.state.todos;
  },

  data() {
    return {
      todos: []
    }
  }
};
</script>

<style lang="scss" scoped>
.card-button {
  margin: 4px;
}
</style>
