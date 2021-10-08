<template>
  <v-app>
    <b-navbar class="navbar" type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item>
          <router-link :to="{ path: '/student/principal' }">INICIO</router-link>
        </b-nav-item>
        <b-nav-item-dropdown text="MATRICULA" left>
          <b-dropdown-item>
            <router-link class="route-link" :to="{ path: '/student/solicitud' }"
              >Solicitud de matrícula</router-link
            >
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link class="route-link" :to="{ path: '/student/actualizar-eliminar' }"
              >Actualizar/Eliminar Matrícula</router-link
            >
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item>
          <router-link class="route-link" :to="{ path: '/student/historial' }"
            >HISTORIAL</router-link
          >
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item>
          <v-btn to="/" depressed color="error"> Cerrar Sesión </v-btn>
        </b-nav-item>
        <b-nav-item style="margin-top:5px" >Alumno 1</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <div class="contain-dashboard">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "DashboardStudent",

  components: {},
};
</script>
<style >
.navbar {
  width: 100vw;
  justify-content: space-between;
  background: white !important;
  height: 7vh;
}
a {
  color: black !important;
}
.contain-dashboard {
  width: 100vw;
  height: 93vh;
  background-image: url("./../assets/FondoDisenoExp.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  overflow-x: hidden;
}
</style>