<template>
  <div class="show">
    <figure>
      <img :src="show.poster" :alt="show.title" />
    </figure>
    <div>
      <h1>{{ show.title }}</h1>
      <p>
        <router-link to="/">
          All Shows
        </router-link>
      </p>
      <p>
        <router-link :to="`/shows/${this.id}/edit`">Edit</router-link>
        <button @click="deleteShow">Delete</button>
      </p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      show: {}
    };
  },
  created() {
    // get the show
    this.fetchShow();
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  methods: {
    async deleteShow() {
      if (confirm("Are you sure you want to delete this show?")) {
        await firebase
          .firestore()
          .collection("shows")
          .doc(this.id)
          .delete();

        this.$router.push("/");
      }
    },

    async fetchShow() {
      const query = await firebase
        .firestore()
        .collection("shows")
        .doc(this.id)
        .get();

      this.show = query.data();
    }
  }
};
</script>
