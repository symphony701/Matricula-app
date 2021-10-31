<template>
  <div class="content-principal">
    <v-container>
      <v-row justify="center">
        <h2>Eliminar matrícula</h2>
      </v-row>
      <v-row justify="center">
        <v-col cols="8">
          <v-data-table
            dense
            :headers="headers"
            :items="matriculas"
            item-key="id"
            class="elevation-1"
            @click:row="handleRowClick"
          ></v-data-table>
        </v-col>
      </v-row>
      <v-row justify="center">
        <!--
        <v-col cols="3"
          ><v-btn
            class="button-register"
            color="#2BA600"
            elevation="5"
            rounded
            large
            @click="goToActualizar()"
            >Actualizar solicitud</v-btn
          ></v-col
        >
        -->
        <v-col cols="3"
          ><v-btn
            class="button-register"
            color="#2BA600"
            elevation="5"
            rounded
            large
            @click="eliminar()"
            >Eliminar matricula</v-btn
          ></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LinkService from "./../../services/principalService";
import Swal from "sweetalert2";
export default {
  name: "ActualizarEliminar",

  components: {},
  data: () => ({
    matriculas: [],
    headers: [
      {
        text: "ID:",
        align: "start",
        sortable: true,
        value: "id",
      },
      { text: "Alumno:", value: "nameAlumno" },
      { text: "Sección:", value: "seccion" },
      { text: "Curso:", value: "curso" },
      { text: "Docente:", value: "docente" },
      { text: "Semestre:", value: "semestre" },
      { text: "Estado:", value: "estado" },
    ],
    matriculaSeleccionada: null,
  }),
  methods: {
    handleRowClick(item) {
      Swal.fire({
        position: "top-end",
        title: `Seleccionaste ${item.seccion} - ${item.curso} ${item.semestre}`,
        showConfirmButton: false,
        timer: 1000,
      });
      this.matriculaSeleccionada = item.id;
    },
    /*
    goToActualizar() {
      if (this.matriculaSeleccionada == null) {
        Swal.fire({
          icon: "error",
          title: "No ha seleccionado ninguna matricula",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        this.$router.push({
          name: "actualizarMatricula",
          params: {
            id: this.matriculaSeleccionada,
          },
        });
      }
    },*/
    async eliminar() {
      if (this.matriculaSeleccionada == null) {
        Swal.fire({
          icon: "error",
          title: "No ha seleccionado ningun curso",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        const result = await Swal.fire({
          title: "¿Está seguro de eliminar la matricula?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí,eliminar",
          cancelButtonText: "Cancelar",
        });
        if (result.isConfirmed) {
          await this.delete(this.matriculaSeleccionada);
        }
      }
    },
    async delete(id) {
      const deleteMatricula = await LinkService.eliminarMatricula(id);
      const data = await LinkService.getAllMatriculas(
        this.$store.state.user.IdUsuario
      );
      this.matriculas = data;
      this.$router.push("/student/historial");
    },
  },
  mounted: async function () {
    const data = await LinkService.getAllMatriculas(
      this.$store.state.user.IdUsuario
    );
    this.matriculas = data;
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