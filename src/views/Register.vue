<template>
    <main class="page-register">

      <section class="box-auth">
        <img class="logo" alt="logo" src="@/assets/icon.svg">
        <h1 class="main-title">Registro</h1>
        <p class="auth-intro">Regístrate en uocify para disfrutar de miles de canciones.</p>

        <form>
            <div class="form-group">
              <label class="form-label" for="username">Email</label>
              <input v-model="email" placeholder="Correo electrónico" type="email" id="email" class="form-control">
            </div>
            <div class="form-group">
              <label class="form-label" for="password">Contraseña</label>
              <input v-model="password" placeholder="Contraseña" type="password" id="password" class="form-control">
            </div>
            <button class="btn btn-primary btn-lg" @click.stop.prevent="register()">Registrar</button>
        </form>
        <p class="auth-error" v-if="error">Error: {{ error }}</p>

        <p class="auth-bottom">¿Ya tienes cuenta?   <router-link class="alink" to="/login">Inicia sesión</router-link></p>
      </section>

    </main>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'register',
  data() {
    return {
      email: null,
      password: null,
      error: null,
    };
  },
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(`Nou usuari creat amb el correu: ${user.user.email}`);
          this.$router.push({ path: '/' });
        })
        .catch((error) => {
          console.log("No s'ha pogut iniciar el registre");
          this.error = error.message;
        });
    }
  }
};
</script>

<style lang="scss" >

    .page-register{
        display: flex;
        flex-direction: column;
        height: 100%;

        .main-title {
            margin-bottom: 20px;
        }
    }


</style>
