<template>
  <div class="content-principal">
    <v-container>
      <v-row justify="center">
        <h2>Actualizar Matricula</h2>
      </v-row>
      <v-row justify="center">
        <v-col cols="4">
          <v-select
            :items="states"
            class="input-login"
            menu-props="auto"
            hide-details
            label="Sección y curso:"
            single-line
          ></v-select>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="4">
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
      <v-row justify="center">
        <v-col>
          <v-btn
            to="/student"
            class="button-register"
            color="#2BA600"
            elevation="5"
            rounded
            large
            >Actualizar solicitud</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Actualizar",

  components: {},
  props: ["id"],
  data: () => ({
    states: [
      "Prueba1",
      "Prueba2",
      "Prueba3",
      "Prueba4",
      "Prueba5",
    ],
  }),
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