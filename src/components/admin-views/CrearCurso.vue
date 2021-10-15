<template>
  <div class="content-principal">
    <v-container>
      <v-row justify="center">
        <h2>Crear Curso</h2>
      </v-row>
      <v-row justify="center">
        <v-col cols="4">
          <v-text-field
            class="input-login"
            label="Nombre del curso"
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>
     
      <v-row justify="center">
        <v-btn
          to="/student/principal"
          class="button-register"
          color="#2BA600"
          elevation="5"
          rounded
          large
          >Registrar curso</v-btn
        ></v-row
      >
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CrearCurso",

  components: {},
  data: () => ({
   
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