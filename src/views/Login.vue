<template>
  <div class="main-container">
    <v-container class="content-login">
      <v-row>
        <v-col> <h2>Inicio de sesión</h2> </v-col>
      </v-row>
      <v-row>
        <v-text-field
          class="input-login"
          label="Código:"
          hide-details="auto"
          v-model="CUser"
        ></v-text-field> <!-- V-Model: Sirve para conectar la variable (CUser) creada en el script con una caja de texto -->
      </v-row>
      <v-row>
        <v-text-field
          class="input-login"
          label="Contraseña:"
          hide-details="auto"
          v-model="Password"
          type="password"
        ></v-text-field>
      </v-row>
      <v-row justify="center">
        <v-btn
          class="button-register"
          color="#2BA600"
          elevation="5"
          rounded
          x-large
          @click="logeo()"
          >Iniciar Sesión</v-btn> <!-- Con el método de vue @click menciono que método se ejecutará al cliquear el botón-->

        <v-btn
            class="button-volver"
            color="primary"
            elevation="5"
            rounded
            x-large
            to="/"
        >Volver</v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LinkService from "./../services/principalService";
import Swal from "sweetalert2";
export default {
  name: "Login",

  //En data creo todas las variables que utiliza esta vista
  components: {},
  data: () => ({
    CUser: "",
    Password: "",
  }),
  methods: {
    logeo: async function () {
      //Función asíncrona (se detiene cuando procesa algo, en este caso await). Await trae los datos del servidor
      const data = await LinkService.login(this.CUser, this.Password);
      if (data.at(0) == null) {
        Swal.fire({
          icon: "error",
          title: "El usuario no existe",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        //Se guarda el usuario logeado en la variable global en store
        this.$store.state.user = data.at(0);
        if (data.at(0).IdOcupacion == 1) {
          //Si se logeó un admin, lo dirigimos a la página de admin
          this.$router.push("admin/principal");
        } else if (data.at(0).IdOcupacion == 2) {
          //Si se logeó un alumno, lo dirigimos a la página de alumno
          this.$router.push("student/principal");
        }
      }
    },
  },
};
</script>
<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url("./../assets/FondoDisenoExp.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}
h2 {
  text-align: center;
  font-size: 2.7em;
}
.v-label {
  color: black !important;
}
.content-login {
  width: 40vw;
}
.input-login {
  margin-top: 40px;
  color: black !important;
}
.button-register {
  margin-top: 40px;
}
.button-volver {
  margin-top: 40px;
  margin-left: 20px;
}
</style>