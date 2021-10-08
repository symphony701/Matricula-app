<template>
  <div class="main-container">
    <v-container class="content-login">
      <v-row>
        <v-col> <h2>Inicio de sesión</h2> </v-col>
      </v-row>
      <v-row>
        <v-text-field
          class="input-login"
          label="Código"
          hide-details="auto"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
        class="input-login"
          label="Contraseña"
          hide-details="auto"
        ></v-text-field>
      </v-row>
      <v-row justify="center">
        
        <v-btn to="/student/principal" class="button-register"  color="#2BA600" elevation="5" rounded x-large
            >Iniciar Sesión</v-btn
          ></v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Login",

  components: {},
};
</script>
<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url("./../assets/FondoDisenoExp.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  overflow: hidden;
}
h2 {
  text-align: center;
  font-size: 2.7em;
}
.v-label{
    color:black !important;
}
.content-login{
    width: 40vw;
}
.input-login{
    margin-top: 40px;
    color:black !important;
}
.button-register{
  margin-top: 40px;
}
</style>