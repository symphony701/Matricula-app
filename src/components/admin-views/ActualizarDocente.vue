<template>
  <div class="content-principal">
    <v-container>
      <v-row justify="center">
        <h2>Actualizar Docente</h2>
      </v-row>
      <v-row justify="center">
        <v-col cols="4">
          <v-text-field
            class="input-login"
            label="Nombres"
            hide-details="auto"
            v-model="nombreDocente"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="4">
          <v-text-field
            class="input-login"
            label="Apellidos"
            hide-details="auto"
            v-model="apellidoDocente"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-btn
          class="button-register"
          color="#2BA600"
          elevation="5"
          rounded
          large
          @click="actualizar()"
          >Actualizar</v-btn
        ></v-row
      >
    </v-container>
  </div>
</template>

<script>
import LinkService from "./../../services/principalService";
import Swal from "sweetalert2";
export default {
  name: "ActualizarDocente",

  components: {},
  data: () => ({
    nombreDocente: "",
    apellidoDocente: "",
  }),
  props: ["id"],
  methods: {
    async actualizar() {
      if (this.nombreDocente == "" || this.apellidoDocente == "") {
        Swal.fire({
          icon: "error",
          title: "No ha escrito ninguna modificación",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        const res = await LinkService.editDocente(
          this.id,
          this.nombreDocente,
          this.apellidoDocente
        );
        console.log(res);
        Swal.fire({
          title: "Docente editado correctamente",
          icon: "success",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Volver",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$router.push("/admin/actualizar-eliminar-docente");
          }
        });
      }
    },
  },
};
</script>
<style scoped>
.content-principal {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>