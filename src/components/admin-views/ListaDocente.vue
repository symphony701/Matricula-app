<template>
  <div class="content-principal">
    <v-container>
      <v-row justify="center">
        <h2>Lista de docentes</h2>
      </v-row>
      <v-row justify="space-around">
        

        <v-col cols="8">
          <v-data-table
            dense
            :headers="headers"
            :items="docentes"
            item-key="id"
            class="elevation-1"
          ></v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LinkService from './../../services/principalService'
export default {
  name: "ListaDocente",

  components: {},
  data: () => ({
    docentes: [],
    headers: [
     {
       text:"ID:",
       align: "start",
       sortable: true,
       value: "id" 
     },
     {text:"Nombres:",value:"nombre"}, 
     {text:"Apellidos:",value:"apellido"}
    ],
    
  }),
  mounted:async function(){
    const data = await LinkService.getDocente();
    this.docentes= data;
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