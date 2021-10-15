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
            v-model="CAdmin"
            hide-details="auto"
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            label="Nombres"
            v-model="Nombre"
            hide-details="auto"
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            label="Apellidos"
            v-model="Apellido"
            hide-details="auto"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="DNI"
            v-model="DNI"
            hide-details="auto"
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            label="Contraseña"
            v-model="Contrasenia"
            hide-details="auto"
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            label="Repita su contraseña"
            v-model="RepeatContrasenia"
            hide-details="auto"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Correo Académico"
            v-model="Correo"
            hide-details="auto"
          ></v-text-field
        ></v-col>
        <v-col>
          <v-text-field
            label="Celular"
            v-model="Celular"
            hide-details="auto"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row justify="center">
        
        <v-btn  class="button-register"  color="#2BA600" elevation="5" rounded x-large @click="addAdmin()"
            >Registrarse</v-btn
          ></v-row>
    </v-container>
  </div>
</template>

<script>
 import LinkService from './../services/principalService'

  export default {
    name: 'RegisterAdmin',

    components: {
      
    },
    data: () => ({
    CAdmin:'',
    DNI:null,
    Correo:'',
    Nombre:'',
    Apellido:'',
    Contrasenia:'',
    Celular:null,
    RepeatContrasenia:''
  }),
  methods:{
    addAdmin: async function(){
      console.log(this.CAdmin,this.DNI,this.Correo,this.Nombre,this.Apellido,this.Contrasenia,this.Celular,this.RepeatContrasenia)
      await LinkService.addAdmin(this.CAdmin, parseInt(this.DNI), this.Nombre, this.Apellido, this.Contrasenia, this.Correo, parseInt(this.Celular));
      await this.$router.push('/')
    }
  }
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