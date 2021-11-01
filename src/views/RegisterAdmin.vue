<template>
  <div class="main-container">
    <v-container>
      <v-row>
        <v-col> <h2>Registro como administrador</h2> </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Código de administrador"
            v-model="CAdmin"
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
            v-model="Contrasenia"
            hide-details="auto"
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            label="Repita su contraseña"
            v-model="RepeatContrasenia"
            hide-details="auto"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Correo Académico"
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
          @click="addAdmin()"
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
  name: "RegisterAdmin",

  components: {},
  data: () => ({
    CAdmin: "",
    DNI: null,
    Correo: "",
    Nombre: "",
    Apellido: "",
    Contrasenia: "",
    Celular: null,
    RepeatContrasenia: "",
    testPassword:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{4,8}$/,
    testDni: /^(?:\D*\d){8}\D*$/,
  }),
  methods: {
    addAdmin: async function () {
      if (
        this.CAdmin == "" ||
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
      } else if (this.testPassword.test(this.Contrasenia) == false) {
        Swal.fire({
          icon: "error",
          title:
            "Contraseña no permitida, mínimo 4 y máximo 8 caracteres. Caracteres especiales y numero obligatorio",
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
          title: "DNI solo permite numeros de 8 digitos",
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
        const user = await LinkService.usuarioRepetido(this.CAdmin);
        if (user[0] != undefined) {
          Swal.fire({
            icon: "error",
            title: "Este usuario ya se encuentra registrado",
            showConfirmButton: false,
            timer: 2000,
          });
        } else {
          const res = await LinkService.addAdmin(
            this.CAdmin,
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
</style>