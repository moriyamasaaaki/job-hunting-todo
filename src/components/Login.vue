<template>
  <div class="top">
    <img src="/img/top.png" alt />
    <div class="top__text">
      <h1 class="top__title text-center">就活の管理を効率的に</h1>
      <div class="my-2 text-center">
        <v-btn large @click="login" color="primary" dark>はじめる</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  methods: {
    login() {
      const google_auth = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(google_auth)
        .then(() => {
          this.$router.push("/todos");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  max-width: 650px;
  margin: 0 auto;
  padding: 0 8px;
  img {
    width: 100%;
    height: 45vh;
    display: block;
    margin-bottom: 64px;
    @include tab {
      height: auto;
    }
  }
  &__title {
    font-family: sans-serif;
    font-weight: 500;
    font-size: 24px;
    @include tab {
      font-size: 32px;
    }
    @include pc {
      font-size: 40px;
    }
  }
}
</style>
