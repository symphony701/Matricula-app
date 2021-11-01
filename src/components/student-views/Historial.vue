<template>
  <div class="content-principal">
    <v-container>
      <v-row justify="center">
        <h2>Historial de matrículas</h2>
      </v-row>
      <v-row justify="space-around">
        <v-col cols="12">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            class="buscador"
          ></v-text-field>
          <v-data-table
            dense
            :headers="headers"
            :items="matriculas"
            :search="search"
            item-key="name"
            class="elevation-1"
          ></v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LinkService from "./../../services/principalService";
import Swal from "sweetalert2";
export default {
  name: "Historial",

  components: {},
  data: () => ({
    search: "",
    matriculas: [],
    headers: [
      { text: "Alumno:", value: "nameAlumno" },
      { text: "Sección:", value: "seccion" },
      { text: "Curso:", value: "curso" },
      { text: "Docente:", value: "docente" },
      { text: "Semestre:", value: "semestre" },
      { text: "Estado:", value: "estado" },
    ],
    states: [],
  }),
  mounted: async function () {
    const data = await LinkService.getHistorialMatricula(
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
.buscador {
  margin-bottom: 20px;
}
</style>