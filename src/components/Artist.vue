<template>
    <article class="artist col-sm-6 col-md-4 col-lg-2">
        <img class="artist-picture" :src="data.picture_medium" :alt="data.name">
        <span class="artist-name">{{ data.name }}</span>
        <span class="artist-fans">{{ data.nb_fan | numberDots }} fans</span>
    </article>
</template>

<script>
  export default {
    name: "Artist",
    props: ['data'],
  }
</script>

<style scoped>

</style>
