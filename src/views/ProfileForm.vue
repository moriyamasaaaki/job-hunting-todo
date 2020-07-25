<template>
  <div class="edit-form">
    <v-card>
      <v-card-title>
        <span class="headline">就活基本情報登録</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="名前"
                v-model="profile.name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                name="input-7-1"
                label="学歴等"
                v-model="profile.background"
              ></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-textarea
                name="input-7-1"
                label="資格等"
                v-model="profile.qualification"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text>キャンセル</v-btn>
        <v-btn color="blue darken-1" text @click="submit">作成</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
// import { mapActions } from "vuex";
export default {
  data() {
    return {
      profile: {}
    };
  },
  methods: {
    submit() {
        this.addProfile(this.profile);
    },
    ...mapActions(["addProfile"])
  }
};
</script>

<style lang="scss" scoped>
.edit-form {
  max-width: 600px;
  margin: 40px auto;
}
</style>
