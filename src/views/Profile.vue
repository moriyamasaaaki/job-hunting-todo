<template>
  <div class="profile">
    <h1 class="profile__title">プロフィールページ</h1>
    <div class="profile__user-info">
      <h2 class="profile__userName">{{ userName }}</h2>
      <p class="profile__todo-length">投稿数：{{ todos.length }}</p>
      <img :src="photoURL" alt />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  created() {
    this.todos = this.$store.state.todo.todos;
  },
  data() {
    return {
      todos: []
    };
  },

  computed: {
    ...mapGetters(["userName", "photoURL"])
  }
};
</script>

<style lang="scss" scoped>
.profile {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 16px;

  &__title {
    font-size: 24px;
    text-align: center;
    margin: 40px 0;
  }
  &__userName {
    font-size: 20px;
  }
  &__todo-length {
    margin-bottom: 40px;
  }
  img {
    width: 80%;
    margin: 0 auto;
    display: block;
    border-radius: 50%;
    @include tab {
      width: 100%;
    }
  }
}
</style>
