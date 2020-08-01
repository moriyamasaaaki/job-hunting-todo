<template>
  <div class="todos">
    <TodoList />

    <router-link :to="{ name: 'todo_edit' }">
      <v-btn class="todos__btn mx-2" fab dark color="indigo">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </router-link>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
export default {
  name: "Todos",
  components: {
    TodoList
  }
};
</script>

<style lang="scss" scoped>
.todos {
  position: relative;
    &__btn {
    position: fixed;
    right: 3%;
    bottom: 3%;
  }
}
</style>
