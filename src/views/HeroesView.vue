<template>
    <div id="fondo">
      <v-container class="desenfocar">
        <h1 class="white--text mb-4" style="font-size: 40px">Héroes</h1>
        <v-row>
          <v-col>
            <v-icon class="mx-2" large color="grey">mdi-shield-half-full</v-icon>
            <v-icon class="mx-2" large color="grey">mdi-crosshairs-gps</v-icon>
            <v-icon class="mx-2" large color="grey">mdi-plus-thick</v-icon>
            <v-icon class="mx-2" large color="grey">mdi-sword</v-icon>
            <v-icon class="mx-2" large color="grey">mdi-arch</v-icon>
            <v-icon class="mx-2" large color="grey"> mdi-hand-right</v-icon>
          </v-col>
        </v-row>
  
        <v-container class="my-8">
          <v-row>
            <v-col>
              <v-simple-table dark>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-center">Héroe</th>
                      <th class="text-center">Detalles</th>
                    </tr>
                  </thead>
                  <tbody class="text-center">
                    <tr v-for="heroe in listaHeroes" :key="heroe.id">
  
                      <td>
                        <v-avatar class="mt-4" size="100">
                          <v-img :src="heroe.imagen"></v-img>
                        </v-avatar>
                        <v-list-item-content>
                          <v-list-item-title class="text-h6">
                            {{ heroe.nombre }}
                          </v-list-item-title>
                        </v-list-item-content>
                      </td>
  
                      <td>
                        <v-row justify="space-around">
                          <v-col cols="auto">
                            <v-dialog
                              transition="dialog-bottom-transition"
                              max-width="600"
                            >
                              <template v-slot:activator="{ on, attrs }">                             
                                <v-btn  color="indigo darken-3" v-bind="attrs" v-on="on"
                                  >Ver detalles</v-btn
                                >
                              </template>
                              <template v-slot:default="dialog">
                                <v-card>
                                  <v-toolbar color="indigo darken-4" dark
                                    >Para ver los detalles del héroe inicia
                                    sesión.</v-toolbar
                                  >
                                  <v-card-text>
                                    <div class="text-h2 pa-12">
                                      <login :heroe="heroe"></login>
                                    </div>
                                  </v-card-text>
                                  <v-card-actions class="justify-end">
                                    <v-btn text @click="dialog.value = false"
                                      >Cerrar</v-btn
                                    >
                                  </v-card-actions>
                                </v-card>
                              </template>
                            </v-dialog>
                          </v-col>
                        </v-row>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </div>
  </template>
  
  <script>
  import Login from "@/components/LoginHeroes.vue";
  import { mapState, mapActions } from "vuex";
  export default {
    data() {
      return {};
    },
    components: {
      Login,
    },
    computed: {
      ...mapState(["listaHeroes"]),
    },
    methods: {
      ...mapActions(["setHeroes"]),
    },
    created() {
      this.setHeroes();
    },
  };
  </script>
  
  <style scoped>
  #fondo {
    background-image: url("https://statics.viralizalo.com/virs/2016/01/VIR_97743_8304_cuanto_sabes_de_heroes_of_the_storm.jpg?cb=94236");
    background-size: cover;
    width: 100%;
    height: 100%;
    padding-top: 40px;
    position: relative;
  }
  
  #fondo:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(4px);
  }
  .desenfocar {
    position: relative;
  }
  </style>
  