<template>
    <table class="track-list table">
        <thead>
        <tr>
            <th></th>
            <th>Canción</th>
            <th>Artista</th>
            <th>Álbum</th>
            <th class="aright">D.</th>
        </tr>
        </thead>
        <tbody>
        <Track v-for="track in data"
               v-bind:key="track.id"
               v-bind:data="track"
        />
        </tbody>
    </table>
</template>

<script>
  import Track from "../components/Track";
  export default {
    name: "TrackList",
    components: {Track},
    props: ['data'],
  }
</script>

<style scoped>

</style>
