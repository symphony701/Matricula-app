<template>
  <v-app>
    <v-main>
      <router-view/> <!-- Redirige las rutas hijas -->
    </v-main>
  </v-app>
</template>

<script> //DECLARANDO EL COMPONENTE
  export default {
    name: 'App',

    data: () => ({
      //
    }),
  };
</script>

<style>
  .dropdown-menu{
    padding-left:0px !important;
  }
  .different-drop a li ul{
    position: relative !important;
    padding:0px !important;
    border:none !important;
  }
  .route-link{
    width: 100%;
  }
</style>
