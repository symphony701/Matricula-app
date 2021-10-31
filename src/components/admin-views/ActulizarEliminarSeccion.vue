<template>
  <div class="content-principal">
    <v-container>
      <v-row justify="center">
        <h2>Actualizar/Eliminar seccion</h2>
      </v-row>
      <v-row justify="center">
        <v-col cols="8">
          <v-data-table
            dense
            :headers="headers"
            :items="secciones"
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
export default {
  name: "ActualizarEliminarSeccion",

  components: {},
  data: () => ({
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
    secciones: [],
    seccionSeleccionado: null,
  }),
  mounted: async function () {
    const data = await LinkService.getSecciones();
    this.secciones = data;
  },
  methods: {
    handleRowClick(item) {
      Swal.fire({
        position: "top-end",
        title: `Seleccionaste ${item.name} - ${item.cursoname}`,
        showConfirmButton: false,
        timer: 1000,
      });
      this.seccionSeleccionado = item.id;
    },
    goToActualizar() {
      if (this.seccionSeleccionado == null) {
        Swal.fire({
          icon: "error",
          title: "No ha seleccionado seccion",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        this.$router.push({
          name: "actualizarSeccion",
          params: {
            id: this.seccionSeleccionado,
          },
        });
      }
    },
    async eliminar() {
      if (this.seccionSeleccionado == null) {
        Swal.fire({
          icon: "error",
          title: "No ha seleccionado ninguna sección",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        const result = await Swal.fire({
          title: "¿Está seguro de eliminar la sección?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí,eliminar",
          cancelButtonText: "Cancelar",
        });
        if (result.isConfirmed) {
          await this.delete(this.seccionSeleccionado);
        }
      }
    },
    async delete(id) {
      const data = await LinkService.deleteSeccion(id);
      this.secciones = data;
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