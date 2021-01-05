<template>
    <article class="album col-sm-6 col-md-4 col-lg-2">
        <img class="album-cover" :src="data.cover_medium" :alt="data.title">
        <span class="album-title">{{ data.title }}</span>
        <span class="album-artist">{{ data.artist.name }}</span>
    </article>
</template>

<script>
  export default {
    name: "Album",
    props: ['data'],
  }
</script>

<style scoped>

</style>
