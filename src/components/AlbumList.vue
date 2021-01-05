<template>
    <section class="album-list row">
        <Album v-for="album in data"
                v-bind:key="album.id"
                v-bind:data="album"
        />
    </section>
</template>

<script>
  import Album from "../components/Album";
  export default {
    name: "AlbumList",
    components: {Album},
    props: ['data'],
  }
</script>

<style scoped>

</style>
