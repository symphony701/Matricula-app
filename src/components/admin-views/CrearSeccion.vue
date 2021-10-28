<template>
  <div class="content-principal">
    <v-container>
      <v-row justify="center">
        <h2>Crear Seccion</h2>
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
            :items="cursos"
            item-value='value'
            item-text='text'
          ></v-select>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="4">
          <v-select
            class="input-login"
            menu-props="auto"
            hide-details
            :items="docentes"
            item-value='value'
            item-text='text'
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
          
          class="button-register"
          color="#2BA600"
          elevation="5"
          rounded
          large
          >Registrar Sección</v-btn
        ></v-row
      >
    </v-container>
  </div>
</template>

<script>
import LinkService from './../../services/principalService'

export default {
  name: "CrearSeccion",

  components: {},
  data: () => ({
    cursos:[],
    docentes:[]
  }),
  mounted:async function(){
    const data1 = await LinkService.getsecciondocente();
    const data2 = await LinkService.getseccioncurso();
    
    this.docentes= data1;
    this.cursos = data2;
    console.log(this.docentes,this.cursos)
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