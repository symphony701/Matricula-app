<template>
  <div class="content-principal">
    <v-container>
      <v-row justify="center">
        <h2>Actualizar Seccion</h2>
      </v-row>
      <v-row justify="center">
        <v-col cols="4">
          <v-text-field
            class="input-login"
            label="Nombre de sección:"
            hide-details="auto"
            v-model="nombreSeccion"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-select
            class="input-login"
            menu-props="auto"
            hide-details
            label="Curso:"
            single-line
            :items="cursos"
            item-value="value"
            item-text="text"
            v-model="curso"
          ></v-select>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="4">
          <v-select
            class="input-login"
            menu-props="auto"
            hide-details
            label="Docente:"
            :items="docentes"
            item-value="value"
            item-text="text"
            single-line
            v-model="docente"
          ></v-select>
        </v-col>
        <v-col cols="4">
          <v-text-field
            class="input-login"
            label="Horario:"
            hide-details="auto"
            v-model="horario"
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
          @click="updateSeccion()"
          >Actualizar</v-btn
        ></v-row
      >
    </v-container>
  </div>
</template>

<script>
import LinkService from "./../../services/principalService";
import Swal from "sweetalert2";
export default {
  name: "ActualizarSeccion",

  components: {},
  data: () => ({
    cursos: [],
    docentes: [],
    nombreSeccion: "",
    docente: null,
    curso: null,
    horario: "",
  }),
  props: ["id"],
  mounted: async function () {
    const data1 = await LinkService.getsecciondocente();
    const data2 = await LinkService.getseccioncurso();

    this.docentes = data1;
    this.cursos = data2;
  },
  methods: {
    updateSeccion: async function () {
      if (
        this.nombreSeccion != "" &&
        this.docente != null &&
        this.curso != null &&
        this.horario != ""
      ) {
        const add = await LinkService.editSeccion(
          this.id,
          this.nombreSeccion,
          this.docente,
          this.curso,
          this.horario
        );
        Swal.fire({
          title: "Seccion actualizada correctamente",
          icon: "success",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Volver",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$router.push("/admin/actualizar-eliminar-seccion");
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "No ha escrito ninguna modificación",
          showConfirmButton: false,
          timer: 1500,
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