<template>
  <v-app>
    <b-navbar class="navbar" type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item>
          <router-link :to="{ path: '/admin/principal' }">INICIO</router-link>
        </b-nav-item>
        <b-nav-item-dropdown text="MATRÍCULA" left>
          <b-dropdown-item>
            <router-link
              class="route-link"
              :to="{ path: '/admin/aceptar-eliminar' }"
              >Aprobación/Rechazo de matrículas</router-link
            >
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link
              class="route-link"
              :to="{ path: '/admin/lista-matricula' }"
              >Lista de matrículas</router-link
            >
          </b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown
          id="dropdown-1"
          text="MANTENIMIENTO DE TABLAS"
          left
        >
          <b-dropdown-item class="different-drop">
            <b-nav-item-dropdown
              id="dropdown-2"
              text="Gestión de Docentes"
              left
            >
              <b-dropdown-item>
                <router-link
                  class="route-link"
                  :to="{ path: '/admin/crear-docente' }"
                  >Crear docente</router-link
                >
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link
                  class="route-link"
                  :to="{ path: '/admin/actualizar-eliminar-docente' }"
                  >Actualizar/Eliminar docente</router-link
                >
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link
                  class="route-link"
                  :to="{ path: '/admin/lista-docente' }"
                  >Listar docentes</router-link
                >
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-dropdown-item>

          <!---->

          <b-dropdown-item class="different-drop">
            <b-nav-item-dropdown id="dropdown-2" text="Gestión de Cursos" left>
              <b-dropdown-item>
                <router-link
                  class="route-link"
                  :to="{ path: '/admin/crear-curso' }"
                  >Crear curso
                </router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link
                  class="route-link"
                  :to="{ path: '/admin/actualizar-eliminar-curso' }"
                  >Actualizar/Eliminar curso
                </router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link
                  class="route-link"
                  :to="{ path: '/admin/lista-curso' }"
                  >Listar cursos
                </router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-dropdown-item>

          <!---->

          <b-dropdown-item class="different-drop">
            <b-nav-item-dropdown
              id="dropdown-2"
              text="Gestión de Secciones"
              left
            >
              <b-dropdown-item>
                <router-link
                  class="route-link"
                  :to="{ path: '/admin/crear-seccion' }"
                  >Crear sección</router-link
                >
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link
                  class="route-link"
                  :to="{ path: '/admin/actualizar-eliminar-seccion' }"
                  >Actualizar/Eliminar sección</router-link
                >
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link
                  class="route-link"
                  :to="{ path: '/admin/lista-secciones' }"
                  >Listar secciones</router-link
                >
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item>
          <v-btn to="/" depressed color="error"> Cerrar Sesión </v-btn>
        </b-nav-item>
        <b-nav-item style="margin-top: 5px"
          >{{ this.$store.state.user.NNombre }}
          {{ this.$store.state.user.NApellido }}</b-nav-item
        >
      </b-navbar-nav>
    </b-navbar>
    <div class="contain-dashboard">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Dashboardadmin",

  components: {},
  data() {
    return {
      name: "BootstrapVue",
      isDropdown2Visible: false,
    };
  },
  mounted: function () {
    this.$root.$on("bv::dropdown::show", (bvEvent) => {
      if (bvEvent.componentId === "dropdown-2") {
        this.isDropdown2Visible = true;
      }
    });
    this.$root.$on("bv::dropdown::hide", (bvEvent) => {
      if (bvEvent.componentId === "dropdown-2") {
        this.isDropdown2Visible = false;
      }
      if (this.isDropdown2Visible) {
        bvEvent.preventDefault();
      }
    });
  },
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