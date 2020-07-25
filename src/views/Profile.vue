<template>
  <div class="profile">
    <h1>プロフィールページ</h1>
    <h2>{{ userName }}</h2>
    <p>投稿数：{{ todos.length }}</p>
    <img :src="photoURL" alt="" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  created() {
    this.todos = this.$store.state.todos;
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
  h1 {
    font-size: 24px;
    text-align: center;
    margin: 40px 0;
  }
  h2 {
    font-size: 20px;
  }
  p {
    margin-bottom: 40px;
  }
  img {
    width: 100%;
    border-radius: 50%;
  }
}
</style>
