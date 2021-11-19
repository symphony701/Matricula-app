<template>
  <div class="main-container"> <!-- PANTALLA PRINCIPAL -->
    <v-container>
      <v-row align="center" justify="center">
        <v-col class="col-main"><h1>Bienvenido a MatriFast</h1></v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col class="col-main"
          ><h3>Matricúlate fácil, matricúlate rápido</h3></v-col
        >
      </v-row>
      <v-row align="center" justify="center">
        <v-col class="col-main"
          ><v-btn to="/register-student" class="button-main" color="primary" elevation="5" rounded x-large>
            Registrarse como <br />
            alumno
          </v-btn></v-col
        >
      </v-row>
      <v-row align="center" justify="center">
        <v-col class="col-main"
          ><v-btn to="/register-admin" class="button-main" color="primary" elevation="5" rounded x-large
            >Registrarse como <br />
            administrador</v-btn
          ></v-col
        >
      </v-row>
      <v-row align="center" justify="center">
        <v-col class="col-main"
          ><v-btn to="/login" class="button-main" color="#2BA600" elevation="5" rounded x-large
            >Iniciar sesión</v-btn
          ></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script> //DECLARANDO EL COMPONENTE
export default {
  name: "Main",

  components: {},
};
</script>

<style>
.v-btn {
  color: white !important;
}
h1 {
  text-align: center;
  font-size:4rem !important;
}
h3{
  font-size:2rem !important;
}
.col-main {
  display: flex;
  justify-content: center;
}
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
.button-main{
  font-size:20px !important;
  width: 17rem;
  height: 4rem !important;
  text-align: center;
}
</style>
