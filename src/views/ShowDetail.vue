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
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  data() {
    return {
      show: {}
    }
  },
  created() {
    // get the show
    this.fetchShow();
  },
  methods: {
    async fetchShow() {
      const query = await firebase
        .firestore()
        .collection("shows")
        .doc(this.$route.params.id)
        .get();

      this.show = query.data();
    }
  }
}
</script>
