import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCNsUqMS5rYpGdZEdSzddUYzN3gnmQ_0_k",
  authDomain: "broadway-9207f.firebaseapp.com",
  databaseURL: "https://broadway-9207f.firebaseio.com",
  projectId: "broadway-9207f",
  storageBucket: "broadway-9207f.appspot.com",
  messagingSenderId: "805923264014"
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
