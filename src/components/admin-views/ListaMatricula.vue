<template>
  <div class="content-principal">
    <v-container>
      <v-row justify="center">
        <h2>Lista de matrículas</h2>
      </v-row>
      <v-row justify="space-around">
        <v-col cols="3">
          <v-row>
            <v-col>
              <v-select
                :items="states"
                class="input-login"
                menu-props="auto"
                hide-details
                label="Alumno:"
                single-line
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-select
                :items="states"
                class="input-login"
                menu-props="auto"
                hide-details
                label="Semestre:"
                single-line
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-select
                :items="states"
                class="input-login"
                menu-props="auto"
                hide-details
                label="Estado:"
                single-line
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-select
                :items="states"
                class="input-login"
                menu-props="auto"
                hide-details
                label="Docente:"
                single-line
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-select
                :items="states"
                class="input-login"
                menu-props="auto"
                hide-details
                label="Curso:"
                single-line
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn
                class="button-register"
                color="#2BA600"
                elevation="5"
                rounded
                large
                >Buscar</v-btn
              >
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="8">
          <v-data-table
            dense
            :headers="headers"
            :items="matriculas"
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
  name: "ListaMatricula",

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
  }),
  mounted: async function () {
    const data = await LinkService.getListarMatriculas();
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