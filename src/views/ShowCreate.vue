<template>
  <div>
    <h1>Create Show</h1>
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
        <button type="submit">Create</button>
      </p>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  data() {
    return {
      title: '',
      poster: ''
    }
  },
  methods: {
    async save() {
      const doc = await firebase
        .firestore()
        .collection('shows').add({
          title: this.title,
          poster: this.poster
        });

      this.$router.push(`/shows/${doc.id}`);
    }
  }
}
</script>

