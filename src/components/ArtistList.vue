<template>
    <section class="artist-list row">
        <Artist v-for="artist in data"
               v-bind:key="artist.id"
               v-bind:data="artist"
        />
    </section>
</template>

<script>
  import Artist from "../components/Artist";
  export default {
    name: "ArtistList",
    components: {Artist},
    props: ['data'],
  }
</script>

<style scoped>

</style>
