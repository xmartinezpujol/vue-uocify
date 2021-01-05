<template>
    <main class="page-search">
        <h1 class="main-title">Resultados de {{ query }}</h1>
        <div class="loader-full" v-if="!(albums && artists && tracks)">
          <b-spinner variant="info" label="Loading..."></b-spinner>
        </div>
        <section v-if="albums && artists && tracks" class="tabs">
            <b-tabs>

                <!-- ************************************** ALL ************************************************************* -->

                <b-tab title="Todo" active id="tabAll" role="tabpanel" aria-labelledby="all-tab">
                    <h2 class="title">Canciones <i class="fa fa-chevron-right icon" aria-hidden="true"></i></h2>
                    <TrackList v-bind:data="tracks.slice(0, 6)" />

                    <h2 class="title">Álbumes <i class="fa fa-chevron-right icon" aria-hidden="true"></i></h2>
                    <AlbumList v-bind:data="albums.slice(0, 6)" />

                    <h2 class="title">Artistas <i class="fa fa-chevron-right icon" aria-hidden="true"></i></h2>
                    <ArtistList v-bind:data="artists.slice(0, 6)" />
                </b-tab>

                <!-- ************************************** SONGS ************************************************************* -->

                <b-tab title="Canciones" class="tab-pane fade" id="tabTracks" role="tabpanel" aria-labelledby="track-tab">
                    <h2 class="title">{{ tracks.total }} canciones</h2>
                    <TrackList v-bind:data="tracks" />
                </b-tab>

                <!-- ************************************** ALBUMS ************************************************************* -->

                <b-tab title="Álbumes" class="tab-pane fade" id="tabAlbums" role="tabpanel" aria-labelledby="album-tab">
                    <h2 class="title">{{ albums.total }} álbumes</h2>
                    <AlbumList v-bind:data="albums" />
                </b-tab>

                <!-- ************************************** ARTISTS ************************************************************* -->

                <b-tab title="Artistas" class="tab-pane fade" id="tabArtists" role="tabpanel" aria-labelledby="artist-tab">
                    <h2 class="title">{{ artists.total }} artistas</h2>
                    <ArtistList v-bind:data="artists" />
                </b-tab>

            </b-tabs>
        </section>
    </main>
</template>

<script>
import TrackList from "../components/TrackList";
import ArtistList from "../components/ArtistList";
import AlbumList from "../components/AlbumList";
import {getTracks, getArtists, getAlbums} from "@/api";

export default {
    name:'SearchResults',
    components: {TrackList, ArtistList, AlbumList},
    created() {
      this.updateTracks();
      this.updateAlbums();
      this.updateArtists();
    },
    watch: {
      query: function (newQuery, oldQuery) {
        if (newQuery !== oldQuery) {
          this.tracks = null;
          this.albums = null;
          this.artists = null;
          this.updateTracks();
          this.updateAlbums();
          this.updateArtists();
        }
      }
    },
    data () {
        return {
            tracks: null,
            albums: null,
            artists: null,
        }
    },
    props: ['query'],
    methods: {
      updateTracks() {
        getTracks(this.query).then(response => {
          this.tracks = response.data;
        });
      },
      updateAlbums () {
        getAlbums(this.query).then(response => {
          this.albums = response.data;
        });
      },
      updateArtists() {
        getArtists(this.query).then(response => {
          this.artists = response.data;
        });
      }
    }
}
</script>


<style lang="scss" >

    .page-search{
        display: flex;
        flex-direction: column;
        height: 100%;

        .main-title {
            margin-bottom: 20px;

            span{
                color: $grey-label;
            }
        }
    }

</style>
