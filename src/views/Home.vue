<template>
  <div class="home">
    <h1>On Broadway...</h1>

    <p>
      <router-link to="/shows/new">Create Show</router-link>
    </p>

    <div class="shows">
      <div v-for="show in shows" :key="show.id" class="show">
        <img :src="show.poster" :alt="show.title">
        <h2>
          <router-link :to="`/shows/${show.id}`">
            {{ show.title }}
          </router-link>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "home",
  data() {
    return {
      shows: []
    };
  },
  created() {
    this.fetchShows();
  },
  methods: {
    async fetchShows() {
      const query = await firebase
        .firestore()
        .collection("shows")
        .get();
      this.shows = query.docs.map(snapshot => {
        return {
          id: snapshot.id,
          ...snapshot.data()
        };
      });
    }
  }
};
</script>
