<template>
  <div class="content-principal">
    <v-container>
      <v-row justify="center">
        <h2>Solicitud de matrícula</h2>
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
              item-value="id"
              item-text="text"
              v-model="seccionElegida"
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
              v-model="semestreElegido"
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
                @click="suscribirse()"
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
    seccionElegida: null,
    semestreElegido: "",
    aux: "",
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
  methods: {
    suscribirse: async function () {
      if (this.seccionElegida == null || this.semestreElegido == "") {
        Swal.fire({
          icon: "error",
          title: "Llene correctamente los campos",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        let capacidad = await LinkService.getCapacidad(this.seccionElegida);
        let norepeat = await LinkService.getNoRepeat(
          this.$store.state.user.IdUsuario,
          this.seccionElegida
        );
        capacidad = capacidad[0].cantidad;
        norepeat = norepeat[0].repeticiones;
        if (norepeat >= 1) {
          Swal.fire({
            icon: "error",
            title:
              "Ya se encuentra matriculado en esta sección o ya ha realizado una solicitud en esta sección",
            showConfirmButton: false,
            timer: 3000,
          });
        } else if (capacidad <= 10) {
          this.secciones.forEach((element) => {
            if (this.seccionElegida == element.id) {
              this.aux = element.text;
            }
          });
          const result = await Swal.fire({
            title: `Está por matricularse a ${this.aux}. ¿Desea continuar?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí",
            cancelButtonText: "No",
          });
          if (result.isConfirmed) {
            const sub = LinkService.addSolicitud(
              this.$store.state.user.IdUsuario,
              this.seccionElegida,
              this.semestreElegido
            );
            const data1 = await LinkService.getSolicitudesEspera(
              this.$store.state.user.IdUsuario
            );
            this.solicitudes = data1;
            Swal.fire({
              icon: "success",
              title: "Se realizó correctamente la solicitud",
              showConfirmButton: false,
              timer: 1000,
            });
            this.$router.push("/student/historial");
          } else {
            Swal.fire({
              icon: "error",
              title: "No se realizó ninguna operación",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        } else {
          Swal.fire({
            icon: "error",
            title:
              "La sección no cuenta con cupos disponibles, porfavor intente con otras secciones o espere a que un administrador libere cupos",
            showConfirmButton: false,
            timer: 3000,
          });
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
.input-login {
  margin-top: 50px;
  color: black;
}
</style>