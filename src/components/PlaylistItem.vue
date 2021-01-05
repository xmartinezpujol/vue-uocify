<template>
    <article class="playlist col-sm-6 col-md-4 col-lg-2">
      <router-link class="alink" :to="`/playlist/${data.id}`">
        <img class="playlist-cover" :src="data.picture_medium" :alt="data.title">
      </router-link>
      <span class="playlist-title">{{ data.title }}</span>
    </article>
</template>

<script>
export default {
  name: "PlaylistItem",
  props: ['data'],
}
</script>

<style scoped>

</style>
