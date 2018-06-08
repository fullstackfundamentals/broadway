<template>
  <div class="home">
    <h1>On Broadway...</h1>

    <p v-if="isLoggedIn">
      <router-link to="/shows/new">Create Show</router-link>
    </p>

    <div class="shows">
      <div v-for="show in shows" :key="show.id" class="show">
        <router-link :to="`/shows/${show.id}`">
          <img :src="show.poster" :alt="show.title">
          <h2>{{ show.title }}</h2>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { mapGetters } from "vuex";

export default {
  name: "home",
  data() {
    return {
      shows: []
    };
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
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
