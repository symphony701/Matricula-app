<template>
  <div class="content-principal">
    <v-container>
      <v-row justify="center">
        <h2>Crear docente</h2>
      </v-row>
      <v-row justify="center">
        <v-col cols="4">
          <v-text-field
            class="input-login"
            label="Nombres"
            hide-details="auto"
            v-model="nombreProfe"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="4">
          <v-text-field
            class="input-login"
            label="Apellidos"
            hide-details="auto"
            v-model="apellidoProfe"
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
          @click="addDocente()"
          >Registrar docente</v-btn
        ></v-row
      >
    </v-container>
  </div>
</template>

<script>
import LinkService from "./../../services/principalService";
import Swal from "sweetalert2";
export default {
  name: "CrearDocente",

  components: {},
  data: () => ({
    nombreProfe:"",
    apellidoProfe:""
  }),
  methods:{
    addDocente: async function(){
      if(this.nombreProfe!="" &&this.apellidoProfe!=""){
        const res= await LinkService.addDocente(this.nombreProfe,this.apellidoProfe);
        Swal.fire({
          title: "Docente agregado correctamente",
          icon: "success",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Volver",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$router.push("/admin/actualizar-eliminar-docente");
          }
        });

      }
      else {
        Swal.fire({
          icon: "error",
          title: "Complete todos los campos",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  }
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