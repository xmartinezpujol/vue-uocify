<template>
    <main class="page-home">
        <div class="container">
            <img class="logo" src="@/assets/icon.svg" alt="logo">
            <h1 class="main-title">¿En busca de música?</h1>
            <p class="lorem-textum">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus arcu, feugiat eu molestie in, finibus sit amet lorem. Phasellus consectetur ipsum in imperdiet ultrices. </p>
            <Playlists v-bind:data="playlists" />
        </div>
    </main>
</template>

<script>
  import Playlists from "@/components/Playlists";
  import { getPlaylists } from "@/api";

  export default {
    name:'Home',
    components: {Playlists},
    created() {
      this.loadPlaylists();
    },
    data () {
      return {
        playlists: [],
      }
    },
    methods: {
      loadPlaylists() {
        getPlaylists().then(response => {
          this.playlists = response.data;
        });
      }
    }
	}
</script>


<style lang="scss">
    .page-home{
        text-align: center;
        padding-left:30px;
        padding-right:30px;

        .logo{
            width: 200px;
            margin-top: 25px;
            margin-bottom: 25px;
        }

        .container-thin{
            max-width: 600px;
        }
    }
</style>
