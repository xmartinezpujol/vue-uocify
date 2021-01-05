<template>
    <header class="header">
        <div class="header-container container-fluid">
            <a class="btn-icon logo-btn" href="/">
                <img class="logo logo-normal" src="../assets/logo.svg" alt="Logo UOCify">
                <img class="logo logo-icon" src="../assets/icon.svg" alt="Logo UOCify">
            </a>
            <SearchBar />
            <div v-if="!isLoggedIn" class="auth">
                <router-link class="alink" to="/login">Iniciar sesión</router-link>
                <router-link class="alink" to="/register">Registrar</router-link>
            </div>
            <div v-if="isLoggedIn" class="user">
                <span class="user-name">{{ currentUser }}</span>
                <font-awesome-icon class="avatar" icon="user" />
                <button type="submit" class="btn-icon logout-button" @click.stop.prevent="logout()">
                    <font-awesome-icon icon="sign-out-alt" />
                </button>
            </div>
        </div>
    </header>
</template>


<script>
import firebase from 'firebase';
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name:'AppHeader',
  components: {SearchBar, FontAwesomeIcon},
  data() {
    return {
      isLoggedIn: null,
      currentUser: null,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.currentUser = user.email;
        this.isLoggedIn = user;
      }
    })
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Sessió tancada correctament");
          this.$router.push({ path: '/' }).catch(() => {});
          location.reload();
        })
        .catch(() => {
          console.log("No s'ha pogut tancar la sessió");
        });
    }
  }
}
</script>


<style lang="scss">
    @import "../styles/_header.scss";
</style>
