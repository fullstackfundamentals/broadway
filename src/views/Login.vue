<template>
  <div>
    <h1>Login or Register</h1>
    <div id="firebase-ui"></div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import * as firebaseui from "firebaseui";

export default {
  mounted() {
    const uiConfig = {
      signInSuccessUrl: "/",
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebase-ui', uiConfig);
  }
}
</script>

<style>
@import url('~firebaseui/dist/firebaseui.css')
</style>
