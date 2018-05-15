<template>
  <div>
    <h1>Edit Show</h1>
    <form @submit.prevent="save">
      <p>
        <label for="title">Title</label>
        <input type="text" id="title" v-model="title">
      </p>
      <p>
        <label for="poster">Poster</label>
        <input type="text" id="poster" v-model="poster">
      </p>
      <p>
        <button type="submit">Edit</button>
      </p>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      title: "",
      poster: ""
    };
  },
  created() {
    this.fetchShow();
  },
  methods: {
    async save() {
      const doc = await firebase
        .firestore()
        .collection("shows")
        .doc(this.$route.params.id)
        .set({
          title: this.title,
          poster: this.poster
        });

      this.$router.push(`/shows/${this.$route.params.id}`);
    },
    async fetchShow() {
      const query = await firebase
        .firestore()
        .collection("shows")
        .doc(this.$route.params.id)
        .get();

      const data = query.data();
      this.title = data.title;
      this.poster = data.poster;
    }
  }
}
</script>
