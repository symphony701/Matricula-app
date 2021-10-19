<template>
  <div class="main-container">
    <v-container>
      <v-row>
        <v-col> <h2>Registro como alumno</h2> </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Código de alumno"
            v-model="CAlumno"
            hide-details="auto"
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            label="Nombres"
            v-model="Nombre"
            hide-details="auto"
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            label="Apellidos"
            v-model="Apellido"
            hide-details="auto"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="DNI"
            v-model="DNI"
            hide-details="auto"
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            label="Contraseña"
            type="password"
            hide-details="auto"
            v-model="Contrasenia"
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            label="Repita su contraseña"
            type="password"
            hide-details="auto"
            v-model="RepeatContrasenia"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Correo Académico"
            type="email"
            v-model="Correo"
            hide-details="auto"
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            label="Celular"
            v-model="Celular"
            hide-details="auto"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row justify="center">
        <v-btn
          class="button-register"
          color="#2BA600"
          elevation="5"
          rounded
          x-large
          @click="addAlumno()"
          >Registrarse</v-btn
        ></v-row
      >
    </v-container>
  </div>
</template>

<script>
import LinkService from "./../services/principalService";

import Swal from "sweetalert2";
export default {
  name: "RegisterStudent",

  components: {},
  data: () => ({
    CAlumno: "",
    DNI: null,
    Correo: "",
    Nombre: "",
    Apellido: "",
    Contrasenia: "",
    Celular: null,
    RepeatContrasenia: "",
  }),
  methods: {
    addAlumno: async function () {
      console.log(
        this.CAlumno,
        this.DNI,
        this.Correo,
        this.Nombre,
        this.Apellido,
        this.Contrasenia,
        this.Celular,
        this.RepeatContrasenia
      );
      const res = await LinkService.addUser(
        this.CAlumno,
        parseInt(this.DNI),
        this.Nombre,
        this.Apellido,
        this.Contrasenia,
        this.Correo,
        parseInt(this.Celular)
      );
      Swal.fire({  
          icon: "success",
          title: "Registro exitoso",
          showConfirmButton: false,
          timer: 1500,
        });
      this.$router.push("/");
    },
  },
};
</script>

<style>
.v-label {
  color: black !important;
}
h2 {
  text-align: center;
  font-size: 2.7em;
}
.button-register {
  margin-top: 20px;
}
</style>