<template>
  <div class="content-principal">
    <v-container>
      <v-row justify="center">
        <h2>Actualizar Curso</h2>
      </v-row>
      <v-row justify="center">
        <v-col cols="4">
          <v-text-field
            class="input-login"
            label="Nombre del curso"
            hide-details="auto"
            v-model="nombreCurso"
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
          >Actualizar curso</v-btn
        ></v-row
      >
    </v-container>
  </div>
</template>

<script>
import LinkService from "./../../services/principalService";
import Swal from "sweetalert2";
export default {
  name: "ActualizarCurso",

  components: {},
  data: () => ({
    nombreCurso: "",
  }),
  props: ["id"],
  methods: {
    async actualizar() {
      if (this.nombreCurso == "") {
        Swal.fire({
          icon: "error",
          title: "No ha escrito ninguna modificación",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        const res= await LinkService.editCourses(this.id, this.nombreCurso);
        Swal.fire({
          title: "Curso editado correctamente",
          icon: "success",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Volver",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$router.push("/admin/actualizar-eliminar-curso");
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