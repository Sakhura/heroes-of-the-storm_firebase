<template>
    <div>
      <v-card width="400px" class="mx-auto mt-5">
        <v-card-title primary-title>
          <h1 class="mx-auto">Login</h1>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="email"
              name="email"
              label="email"
              prepend-icon="mdi-account-circle"
            ></v-text-field>
            <v-text-field
              v-model="password"
              @click:append="showPassword = !showPassword"
              :type="showPassword ? 'text' : 'password'"
              label="password"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            >
            </v-text-field>
          </v-form>
        </v-card-text>
  
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click.prevent="login" color="deep-purple lighten-2">Login</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </template>
  
  <script>
  import firebase from "firebase";
  import { mapActions } from "vuex";
  
  export default {
    data() {
      return {
        showPassword: false,
        email: "",
        password: "",
      };
     
    },
     props:["heroe"],
  
    methods:{
        ...mapActions(['setUser']),
        
        login(){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).
        then(() => {
          this.setUser({email: this.email})
          this.$router.push(`/detalle/${this.heroe.nombre}`)
        }).catch(() => {
          alert('Usuario erroneo')
        } )
      }
  
    }
  };
  </script>
  
  <style>
  </style>