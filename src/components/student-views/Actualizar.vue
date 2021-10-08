<template>
  <div class="content-principal">
    <v-container>
      <v-row justify="center">
        <h2>Bienvenido a MatriFast</h2>
      </v-row>
      <v-row justify="center">
        <v-col cols="4">
          <v-select
            :items="states"
            class="input-login"
            menu-props="auto"
            hide-details
            label="Sección y curso:"
            single-line
          ></v-select>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="4">
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
      <v-row justify="center">
        <v-col>
          <v-btn
            to="/student"
            class="button-register"
            color="#2BA600"
            elevation="5"
            rounded
            large
            >Actualizar solicitud</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Actualizar",

  components: {},
  data: () => ({
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