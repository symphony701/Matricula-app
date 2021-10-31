<template>
  <div class="content-principal">
    <v-container>
      <v-row justify="center">
        <h2>Actualizar/Eliminar curso</h2>
      </v-row>
      <v-row justify="center">
        <v-col cols="8">
          <v-data-table
            dense
            :headers="headers"
            :items="courses"
            item-key="id"
            class="elevation-1"
            @click:row="handleRowClick"
          >
          </v-data-table>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="3"
          ><v-btn
            class="button-register"
            color="#2BA600"
            elevation="5"
            rounded
            large
            @click="goToActualizar()"
            >Actualizar</v-btn
          ></v-col
        >
        <v-col cols="3"
          ><v-btn
            class="button-register"
            color="#2BA600"
            elevation="5"
            rounded
            large
            @click="eliminar()"
            >Eliminar</v-btn
          ></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LinkService from "./../../services/principalService";
import Swal from "sweetalert2";
import axios from "axios";
export default {
  name: "ActualizarEliminarCurso",

  components: {},
  data: () => ({
    courses: [],
    headers: [
      {
        text: "ID:",
        align: "start",
        sortable: true,
        value: "id",
      },
      { text: "Curso:", value: "name" },
    ],
    cursoSeleccionado: null,
  }),
  methods: {
    handleRowClick(item) {
      Swal.fire({
        position: "top-end",
        title: `Seleccionaste ${item.name}`,
        showConfirmButton: false,
        timer: 1000,
      });
      this.cursoSeleccionado = item.id;
    },
    goToActualizar() {
      if (this.cursoSeleccionado == null) {
        Swal.fire({
          icon: "error",
          title: "No ha seleccionado ningun curso",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        this.$router.push({
          name: "actualizarCurso",
          params: {
            id: this.cursoSeleccionado,
          },
        });
      }
    },
    async eliminar() {
      if (this.cursoSeleccionado == null) {
        Swal.fire({
          icon: "error",
          title: "No ha seleccionado ningun curso",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        const result = await Swal.fire({
          title: "¿Está seguro de eliminar el curso?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí,eliminar",
          cancelButtonText: "Cancelar",
        });
        if (result.isConfirmed) {
          await this.delete(this.cursoSeleccionado);
        }
      }
    },
    async delete(id) {
      const data = await LinkService.deleteCourse(id);
      this.courses = data;
    },
  },
  mounted: async function () {
    const data = await LinkService.getCourses();
    this.courses = data;
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