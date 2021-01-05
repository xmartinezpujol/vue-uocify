<template>
  <main class="page-login">

    <section class="box-auth">
      <img class="logo" alt="logo" src="@/assets/icon.svg">
      <h1 class="main-title">Iniciar sesión</h1>
      <p class="auth-intro">Inicia sesión en uocify para disfrutar de miles de canciones.</p>

      <form>
          <div class="form-group">
            <label class="form-label" for="username">Email</label>
            <input v-model="email" placeholder="Correo electrónico" type="email" id="email" class="form-control">
          </div>
          <div class="form-group">
            <label class="form-label" for="password">Contraseña</label>
            <input v-model="password" placeholder="Contraseña" type="password" id="password" class="form-control">
          </div>
          <button class="btn btn-primary btn-lg" @click.stop.prevent="login()">Iniciar sesión</button>
      </form>
      <p class="auth-error" v-if="error">Error: {{ error }}</p>

      <p class="auth-bottom">¿No tienes cuenta?   <router-link class="alink" to="/register">Regístrate</router-link></p>
    </section>

  </main>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'login',
  data() {
    return {
        email: null,
        password: null,
        error: null,
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(`Sessió iniciada correctament amb el correu: ${user.user.email}`);
          this.$router.push({ path: '/' });
        })
        .catch((error) => {
          console.log("No s'ha pogut iniciar la sessió");
          this.error = error.message;
        });
    }
  }
};
</script>


<style lang="scss" >

    .page-login{

    }

</style>
