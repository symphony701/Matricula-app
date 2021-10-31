<template>
  <div class="content-principal">
    <v-container>
      <v-row justify="center">
        <h2>Lista de secciones</h2>
      </v-row>
      <v-row justify="space-around">
        <v-col cols="3">
          <v-row>
            <v-col>
              <v-select
                :items="states"
                class="input-login"
                menu-props="auto"
                hide-details
                label="Alumno:"
                single-line
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
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
          <v-row>
            <v-col>
              <v-select
                :items="states"
                class="input-login"
                menu-props="auto"
                hide-details
                label="Estado:"
                single-line
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-select
                :items="states"
                class="input-login"
                menu-props="auto"
                hide-details
                label="Docente:"
                single-line
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-select
                :items="states"
                class="input-login"
                menu-props="auto"
                hide-details
                label="Curso:"
                single-line
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn
                
                class="button-register"
                color="#2BA600"
                elevation="5"
                rounded
                large
                >Buscar</v-btn
              >
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="8">
          <v-data-table
            dense
            :headers="headers"
            :items="secciones"
            item-key="name"
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
  name: "ListaSecciones",

  components: {},
  data: () => ({
    secciones: [
      
    ],
    headers: [
      {
        text: "ID:",
        align: "start",
        sortable: true,
        value: "id",
      },
      {text:"Seccion:",value:"name"},
      {text:"Curso:",value:"cursoname"},  
      {text:"Horario:",value:"horario"}, 
      {text:"Docente:",value:"docente"}, 
    ],
    states: [
      "Alabama",
      "Alaska",
      "American Samoa",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "District of Columbia",
      "Federated States of Micronesia",
      "Florida",
      "Georgia",
      "Guam",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Marshall Islands",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Northern Mariana Islands",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Palau",
      "Pennsylvania",
      "Puerto Rico",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virgin Island",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ],
  }),
  mounted:async function(){
    const data = await LinkService.getSecciones();
    this.secciones= data;
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