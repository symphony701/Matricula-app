<template>
  <div class="main-container">
    <v-container>
      <v-row>
        <v-col> <h2>Registro como administrador</h2> </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Código de administrador"
            
            hide-details="auto"
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            label="Nombres"
            
            hide-details="auto"
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            label="Apellidos"
            
            hide-details="auto"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="DNI"
            
            hide-details="auto"
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            label="Contraseña"
            
            hide-details="auto"
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            label="Repita su contraseña"
            
            hide-details="auto"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Correo Académico"
            
            hide-details="auto"
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            label="Celular"
            
            hide-details="auto"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row justify="center">
        
        <v-btn to="/" class="button-register"  color="#2BA600" elevation="5" rounded x-large
            >Registrarse</v-btn
          ></v-row>
    </v-container>
  </div>
</template>

<script>
 

  export default {
    name: 'RegisterAdmin',

    components: {
      
    },
  }
</script>

<style>
.v-label{
    color:black !important;
}
h2{
  text-align: center;
  font-size:2.7em;
}
.button-register{
  margin-top: 20px;
}
</style>