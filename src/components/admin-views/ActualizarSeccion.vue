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
            label="Nombres de sección"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-select
            class="input-login"
            menu-props="auto"
            hide-details
            label="Curso:"
            single-line
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
            single-line
          ></v-select>
        </v-col>
        <v-col cols="4">
          <v-select
            class="input-login"
            menu-props="auto"
            hide-details
            label="Horario:"
            single-line
          ></v-select>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-btn
          to="/student/principal"
          class="button-register"
          color="#2BA600"
          elevation="5"
          rounded
          x-large
          >Actualizar</v-btn
        ></v-row
      >
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ActualizarSeccion",

  components: {},
  data: () => ({}),
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