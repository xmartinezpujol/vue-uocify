<template>
  <div v-if="playlist">
    <article class="playlist-detail col-sm-6 col-md-4 col-lg-2">
      <img class="playlist-cover" :src="playlist.picture_medium" :alt="playlist.title">
      <span class="playlist-title">{{ playlist.title }}</span>
    </article>
    <p class="playlist-description">{{ playlist.description }}</p>
    <h2 class="title">{{ playlist.nb_tracks }} canciones</h2>
    <TrackList v-bind:data="playlist.tracks.data" />
  </div>
</template>

<script>
import { getPlaylist } from "@/api";
import TrackList from "@/components/TrackList";

export default {
  name: "Playlist",
  components: {TrackList},
  created() {
    this.loadPlaylist();
  },
  data () {
    return {
      playlist: null,
    }
  },
  methods: {
    loadPlaylist() {
      getPlaylist(this.$route.params.id).then(response => {
        this.playlist = response;
      });
    }
  }
}
</script>

<style scoped>

</style>
