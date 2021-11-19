<template>
  <div class="main-container">
    <v-container>
      <v-row>
        <v-col> <h2>Registro como alumno</h2> </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Código de alumno:"
            v-model="CAlumno"
            hide-details="auto"
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            label="Nombres:"
            v-model="Nombre"
            hide-details="auto"
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            label="Apellidos:"
            v-model="Apellido"
            hide-details="auto"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="DNI:"
            v-model="DNI"
            hide-details="auto"
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            label="Contraseña:"
            type="password"
            hide-details="auto"
            v-model="Contrasenia"
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            label="Repita su contraseña:"
            type="password"
            hide-details="auto"
            v-model="RepeatContrasenia"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Correo académico:"
            type="email"
            v-model="Correo"
            hide-details="auto"
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            label="Celular:"
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
          >Registrarse</v-btn>

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
    testPassword:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{4,50}$/,
    testDni: /^(?:\D*\d){8}\D*$/,
    testCel: /^(?:\D*\d){9}\D*$/,
    testNombres: /^(?=[A-Za-z])[A-Za-z]{1,40}$/,
  }),
  methods: {
    addAlumno: async function () {
      if (
        this.CAlumno == "" ||
        this.DNI == null ||
        this.Correo == "" ||
        this.Nombre == "" ||
        this.Apellido == "" ||
        this.Contrasenia == "" ||
        this.Celular == null ||
        this.RepeatContrasenia == ""
      ) {
        Swal.fire({
          icon: "error",
          title: "Datos incompletos",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (this.testNombres.test(this.Nombre) == false) {
        Swal.fire({
          icon: "error",
          title: "Nombre con números y/o mayor a 40 caracteres",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (this.testNombres.test(this.Apellido) == false) {
        Swal.fire({
          icon: "error",
          title: "Apellido con números y/o mayor a 40 caracteres",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (this.testPassword.test(this.Contrasenia) == false) {
        Swal.fire({
          icon: "error",
          title:
            "Contraseña inválida. Mínimo 4 dígitos contando un número, una letra mayúscula y un carácter especial",
          showConfirmButton: true,
          timer: 4000,
        });
      } else if (this.Contrasenia != this.RepeatContrasenia) {
        Swal.fire({
          icon: "error",
          title: "Contraseñas diferentes",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (this.testDni.test(parseInt(this.DNI)) == false) {
        Swal.fire({
          icon: "error",
          title: "El DNI debe tener 8 dígitos",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (this.testCel.test(parseInt(this.Celular)) == false) {
        Swal.fire({
          icon: "error",
          title: "El número de celular debe tener 9 dígitos",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (this.CAlumno.length > 9) {
        Swal.fire({
          icon: "error",
          title: "El código debe ser de máximo 9 dígitos",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        const user = await LinkService.usuarioRepetido(this.CAlumno);
        if (user[0] != undefined) {
          Swal.fire({
            icon: "error",
            title: "Este alumno ya se encuentra registrado",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
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
        }
      }
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
.button-volver {
  margin-top: 20px;
  margin-left: 20px;
}
</style>