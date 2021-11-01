<template>
  <div class="content-principal">
    <v-container>
      <v-row justify="center">
        <h2>Aprobación/Rechazo matrícula</h2>
      </v-row>
      <v-row justify="center">
        <v-col cols="8">
          <v-data-table
            dense
            :headers="headers"
            :items="matriculas"
            item-key="name"
            class="elevation-1"
            @click:row="handleRowClick"
          ></v-data-table>
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
            @click="procesar(2)"
            >Aprobar</v-btn
          ></v-col
        >
        <v-col cols="3"
          ><v-btn
            class="button-register"
            color="#2BA600"
            elevation="5"
            rounded
            large
            @click="procesar(3)"
            >Rechazar</v-btn
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
  name: "AprobarRechazar",

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
  mounted: async function () {
    const data = await LinkService.getAllMatriculasAprobarRechazar();
    this.matriculas = data;
  },
  methods: {
    handleRowClick(item) {
      Swal.fire({
        position: "top-end",
        title: `Selecciono la solicitud de ${item.nameAlumno} en la sección ${item.seccion} - ${item.curso} en el semestre ${item.semestre}`,
        showConfirmButton: false,
        timer: 4000,
      });
      this.matriculaSeleccionada = item.id;
    },
    procesar: async function (action) {
      if (this.matriculaSeleccionada == null) {
        Swal.fire({
          icon: "error",
          title: "No ha seleccionado ninguna solicitud",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        if (action === 2) {
          const aprobacion = await LinkService.procesarSolicitud(
            this.matriculaSeleccionada,
            action
          );
          Swal.fire({
            icon: "succes",
            title: "Matricula aprobada exitosamente",
            showConfirmButton: false,
            timer: 1000,
          });
          const data = await LinkService.getAllMatriculasAprobarRechazar();
          this.matriculas = data;
        } else if (action === 3) {
          const rechazo = await LinkService.procesarSolicitud(
            this.matriculaSeleccionada,
            action
          );
          Swal.fire({
            icon: "success",
            title: "Matricula rechazada exitosamente",
            showConfirmButton: false,
            timer: 1000,
          });
          const data = await LinkService.getAllMatriculasAprobarRechazar();
          this.matriculas = data;
        }
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