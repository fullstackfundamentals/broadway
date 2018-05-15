<template>
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
    if (this.editing) {
      this.fetchShow();
    }
  },
  computed: {
    editing() {
      return !!this.$route.params.id;
    }
  },
  methods: {
    async save() {
      const collection = firebase
        .firestore()
        .collection("shows")

      if (this.editing) {
        return this.update();
      }

      const doc = await collection
        .add({
          title: this.title,
          poster: this.poster
        });

      this.$router.push(`/shows/${doc.id}`);
    },
    async update() {
      await firebase
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
