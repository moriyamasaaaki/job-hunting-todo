import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

require("@/assets/sass/main.scss");

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyAIEummOZhMW1a-QcD6jyRfsPXT99WS5r4",
  authDomain: "job-hunting-todo.firebaseapp.com",
  databaseURL: "https://job-hunting-todo.firebaseio.com",
  projectId: "job-hunting-todo",
  storageBucket: "job-hunting-todo.appspot.com",
  messagingSenderId: "558367718241",
  appId: "1:558367718241:web:a9720f46a2ed4bb196e320",
  measurementId: "G-0XYSTWCHKT"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
