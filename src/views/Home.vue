<template>
  <div class="home">
    <h1>On Broadway...</h1>

    <div class="shows">
      <div v-for="show in shows" :key="show.id" class="show">
        <img :src="show.poster" :alt="show.title">
        <h2>{{ show.title }}</h2>
      </div>
      <div class="show">
        <img src="https://d2npu017ljjude.cloudfront.net/images/poster-178275/w230/222222/86046-3.jpeg" alt="Phantom of the Opera">
        <h2>Phantom of the Opera</h2>
      </div>
      <div class="show">
        <img src="https://d2npu017ljjude.cloudfront.net/images/poster-178275/w230/222222/13792-3.jpg" alt="Aladdin">
        <h2>Aladdin</h2>
      </div>
      <div class="show">
        <img src="https://d2npu017ljjude.cloudfront.net/images/poster-178275/w230/222222/93471-9.jpg" alt="Spongebob Squarepants">
        <h2>Spongebob Squarepants</h2>
      </div>
      <div class="show">
        <img src="https://d2npu017ljjude.cloudfront.net/images/poster-178275/w230/222222/98366-15.jpg" alt="Waitress">
        <h2>Waitress</h2>
      </div>
      <div class="show">
        <img src="https://d2npu017ljjude.cloudfront.net/images/poster-178275/w230/222222/98037-15.jpg" alt="Dear Evan Hansen">
        <h2>Dear Evan Hansen</h2>
      </div>
      <div class="show">
        <img src="https://d2npu017ljjude.cloudfront.net/images/poster-178275/w230/222222/82858-2.jpg" alt="A Bronx Tale">
        <h2>A Bronx Tale</h2>
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
