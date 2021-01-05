<template>
    <form class="search-bar">
        <input type="text" placeholder="Buscar" class="form-control search-control" v-model="search" />
        <button type="submit" class="btn-icon search-button" @click.stop.prevent="submit()">
            <font-awesome-icon icon="search" />
        </button>
    </form>
</template>

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  export default {
    name: "SearchBar",
    components: {FontAwesomeIcon},
    data() {
      return {
        search : null,
      }
    },
    methods: {
      submit() {
        this.$router.push({ path: '/search', query: { q: this.search } });
      }
    }
  }
</script>

<style scoped>
    @import "../styles/_search_bar.scss";
</style>
