<template>
    <div id="fondo">
      <v-container>
        <strong><h1 class="mt-4">Bienvenido</h1></strong>
        <strong>
          <h2 class="mt-4 text-center">
            Aqui puedes ver el detalle del héroe
          </h2></strong
        >
      </v-container>
      <v-container>
        <v-card max-width="400" class="mx-auto">
          <v-img :src="heroe.imagen" height="300px" dark>
            <v-row class="fill-height">
              <v-card-title class="white--text pl-12 pt-12">
                <div class="text-h4 pl-12 pt-12 text-center">
                  {{ heroe.nombre }}
                </div>
              </v-card-title>
            </v-row>
          </v-img>
  
          <v-list two-line>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo"> mdi-sword-cross </v-icon>
              </v-list-item-icon>
  
              <v-list-item-content>
                <v-list-item-title> {{ heroe.ataque }} </v-list-item-title>
                <v-list-item-subtitle>Ataque</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
  
            <v-divider inset></v-divider>
  
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo"> mdi-decagram </v-icon>
              </v-list-item-icon>
  
              <v-list-item-content>
                <v-list-item-title> {{ heroe.titulo }} </v-list-item-title>
                <v-list-item-subtitle>Título</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>
  
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo"> mdi-tools </v-icon>
              </v-list-item-icon>
  
              <v-list-item-content>
                <v-list-item-title> {{ heroe.funcion }} </v-list-item-title>
                <v-list-item-subtitle>Función</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-container>
    </div>
  </template>
  
  <script>
  import { mapState, mapGetters } from "vuex";
  export default {
    computed: {
      ...mapState(["currentUser"]),
      ...mapGetters(["getHeroeByName" ]),
      heroe() {
       return this.getHeroeByName(this.$route.params.nombre)
        
      }
    },
  
  };
  </script>
  
  <style scoped>
  #fondo {
    background-image: url("https://www.xtrafondos.com/wallpapers/estrellas-en-el-universo-morado-4465.jpg");
    background-size: cover;
    width: 100%;
    height: 100%;
    padding-top: 40px;
  }
  h1 {
    color: white;
  }
  h2 {
    font-size: 25px;
    color: #ffcc33;
  }
  </style>