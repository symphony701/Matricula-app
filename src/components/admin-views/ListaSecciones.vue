<template>
  <div class="content-principal">
    <v-container>
      <v-row justify="center">
        <h2>Lista de secciones</h2>
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
            :items="secciones"
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
export default {
  name: "ListaSecciones",

  components: {},
  data: () => ({
    search: "",
    secciones: [],
    headers: [
      {
        text: "ID:",
        align: "start",
        sortable: true,
        value: "id",
      },
      { text: "Seccion:", value: "name" },
      { text: "Curso:", value: "cursoname" },
      { text: "Horario:", value: "horario" },
      { text: "Docente:", value: "docente" },
    ],
  }),
  mounted: async function () {
    const data = await LinkService.getSecciones();
    this.secciones = data;
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