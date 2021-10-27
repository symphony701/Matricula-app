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
            v-model="NombreCurso"
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
          @click="addCourse()"
          >Registrar curso</v-btn
        ></v-row
      >
    </v-container>
  </div>
</template>

<script>
  import LinkService from "./../../services/principalService";
  import Swal from "sweetalert2";
export default {
  name: "CrearCurso",
  components: {},
  data: () => ({
   NombreCurso:""
  }),
  methods:{
    addCourse: async function(){
      if(this.NombreCurso!=""){
        const res= await LinkService.addCourse(this.NombreCurso);
        Swal.fire({
          title: "Curso agregado correctamente",
          icon: "success",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Volver",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$router.push("/admin/actualizar-eliminar-curso");
          }
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