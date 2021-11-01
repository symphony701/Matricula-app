<template>
  <div class="content-principal">
    <v-container>
      <v-row justify="center">
        <h2>Actualizar/Eliminar docente</h2>
      </v-row>
      <v-row justify="center">
        <v-col cols="8">
          <v-data-table
            dense
            :headers="headers"
            :items="docentes"
            item-key="id"
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
  name: "ActualizarEliminarDocente",

  components: {},
  data: () => ({
    headers: [
      {
        text: "ID:",
        align: "start",
        sortable: true,
        value: "id",
      },
      { text: "Nombres:", value: "nombre" },
      { text: "Apellidos:", value: "apellido" },
    ],
    docentes: [],
    docenteSeleccionado: null,
  }),
  methods: {
    handleRowClick(item) {
      Swal.fire({
        position: "top-end",
        title: `Seleccionaste ${item.nombre} ${item.apellido}`,
        showConfirmButton: false,
        timer: 1000,
      });
      this.docenteSeleccionado = item.id;
    },
    goToActualizar() {
      if (this.docenteSeleccionado == null) {
        Swal.fire({
          icon: "error",
          title: "No ha seleccionado ningun docente",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        this.$router.push({
          name: "actualizarDocente",
          params: {
            id: this.docenteSeleccionado,
          },
        });
      }
    },
    async eliminar() {
      if (this.docenteSeleccionado == null) {
        Swal.fire({
          icon: "error",
          title: "No ha seleccionado ningun docente",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        const result = await Swal.fire({
          title: "¿Está seguro de eliminar el docente?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí,eliminar",
          cancelButtonText: "Cancelar",
        });
        if (result.isConfirmed) {
          const borrado = await this.delete(this.docenteSeleccionado);
          this.$router.push("/admin/lista-docente");
        }
      }
    },
    async delete(id) {
      const data = await LinkService.deleteDocente(id);
      this.docentes = data;
    },
  },
  mounted: async function () {
    const data = await LinkService.getDocente();
    this.docentes = data;
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