<template>
  <section class="playlists row">
    <PlaylistItem v-for="playlist in data"
           v-bind:key="playlist.id"
           v-bind:data="playlist"
    />
  </section>
</template>

<script>
import PlaylistItem from "./PlaylistItem";
export default {
  name: "Playlists",
  components: {PlaylistItem},
  props: ['data'],
}
</script>

<style scoped>

</style>
