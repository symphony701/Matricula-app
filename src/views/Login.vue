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
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          class="input-login"
          label="Contraseña:"
          hide-details="auto"
          v-model="Password"
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
          >Iniciar Sesión</v-btn
        ></v-row
      >
    </v-container>
  </div>
</template>

<script>
import LinkService from "./../services/principalService";
import Swal from "sweetalert2";
export default {
  name: "Login",

  components: {},
  data: () => ({
    CUser: "",
    Password: "",
  }),
  methods: {
    logeo: async function () {
      const data = await LinkService.login(this.CUser, this.Password);
      if (data.at(0) == null) {
        Swal.fire({  
          icon: "error",
          title: "El usuario no existe",
          showConfirmButton: false,
          timer: 1500,
        });
      }else{
        console.log(data.at(0));
        if(data.at(0).IdOcupacion==1){
          this.$router.push('admin/principal')
        }else if(data.at(0).IdOcupacion==2){
          this.$router.push('student/principal')
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
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
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
</style>