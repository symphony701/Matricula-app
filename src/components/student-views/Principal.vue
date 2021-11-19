<template>
  <!-- En template se realiza toda la maquetación con html -->
  <div class="content-principal">
    <v-container>
      <v-row justify="center">
        <h1>Bienvenido a MatriFast</h1>
      </v-row>
      <v-row justify="center">
        <h3>Matricúlate fácil, matricúlate rápido</h3>
      </v-row>
    </v-container>
  </div>
</template>

<script>
//En script se realiza toda la funcionalidad de la página
export default {
  name: "Principal",

  components: {},
};
</script>
<style scoped>
    .content-principal{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
</style>