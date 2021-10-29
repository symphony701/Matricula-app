<template>
  <div class="content-principal">
    <v-container>
      <v-row justify="center">
        <h2>Solicitud de matricula</h2>
      </v-row>
      <v-row justify="space-around">
        <v-col
          cols="3"
          d-flex
          align-center
          style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: flex-end;
            align-items: center;
            margin-bottom: 20px;
          "
        >
          <v-row justify="center" align="end">
            <v-select
              :items="secciones"
              class="input-login"
              menu-props="auto"
              hide-details
              label="Sección y cursos:"
              single-line
            ></v-select>
          </v-row>
          <v-row justify="center">
            <v-select
              :items="semestres"
              class="input-login"
              menu-props="auto"
              hide-details
              label="Semestre:"
              single-line
            ></v-select>
          </v-row>
          <v-row>
            <v-col>
              <v-btn
                class="button-register"
                color="#2BA600"
                elevation="5"
                rounded
                large
                >Realizar Solicitud</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="8">
          <v-data-table
            dense
            :headers="headers"
            :items="solicitudes"
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
  name: "Solicitud",

  components: {},
  data: () => ({
    solicitudes: [],
    headers: [
      {
        text: "Alumno:",
        align: "start",
        sortable: false,
        value: "nameAlumno",
      },
      { text: "Curso:", value: "curso" },
      { text: "Sección:", value: "seccion" },
      { text: "Docente:", value: "docente" },
      { text: "Semestre:", value: "semestre" },
      { text: "Estado:", value: "estado" },
    ],
    secciones: [],
    semestres: [
      "2023-2",
      "2023-1",
      "2023-0",
      "2022-2",
      "2022-1",
      "2022-0",
      "2021-2",
      "2021-1",
    ],
  }),
  mounted: async function () {
    const data1 = await LinkService.getSolicitudesEspera(
      this.$store.state.user.IdUsuario
    );
    const data2 = await LinkService.getSolicitudesSecciones();
    this.solicitudes = data1;
    this.secciones = data2;
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
.input-login {
  margin-top: 50px;
  color: black;
}
</style>