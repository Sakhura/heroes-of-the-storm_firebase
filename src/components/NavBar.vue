<template>
    <div>
      <v-app-bar color="blue darken-4" dark>
        <v-container>
          <v-row justify-md="center">
  
            <v-btn v-if="!currentUser" text to="/"><v-icon class="">mdi-home</v-icon>Home</v-btn>  
            <v-btn v-if="currentUser" text @click.prevent="logout">
              <v-icon class="mr-1" >mdi-logout</v-icon>Salir
            </v-btn>
          </v-row>
        </v-container>
      </v-app-bar>
    </div>
  </template>
  <script>
  import firebase from 'firebase'
  import { mapActions, mapState } from 'vuex'
  export default {
    data() {
      return {};
    },
    methods: {
      ...mapActions(['setUser']),
      
      logout() {
        firebase.auth().signOut().then(() => {
          this.$router.push('/')
          this.setUser(undefined)
        })
      }
    },
     computed: {
    ...mapState(['currentUser'])
    }
  };
  </script>