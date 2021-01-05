<template>
    <tr class="track">
        <td class="track-cover">
            <img :src="data.album.cover_small" :alt="data.title">
        </td>
        <td class="track-title">
            {{ data.title }}
        </td>
        <td class="track-artist">
            {{ data.artist.name }}
        </td>
        <td class="track-album">
            {{ data.album.title }}
        </td>
        <td class="track-duration">
            {{ data.duration | songDuration }}
        </td>
    </tr>
</template>

<script>
  export default {
    name: "Track",
    props: ['data'],
  }
</script>

<style scoped>

</style>
