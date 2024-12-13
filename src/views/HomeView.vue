<template>
  <div id="fondo">
    <v-container class="relativo" style="margin-left:30%; margin-right:10%">
      <v-row>
        <v-col cols="12" lg="12" xl="12" md="12" sm="6" xs="6">
          <h1 class="text-h4 font-weight-black mb-4">
            Desafía las expectativas de los MOBA
          </h1>
          <h3 class="font-weight-medium">
            Épicos héroes y acción sin cesar en múltiples campos de batalla
          </h3>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-btn large color="orange darken-3" dark to="/heroes" class="mt-6">Ver héroes</v-btn>
      </div>
    </v-container>

    <v-alert  border="left" color=" opacity purple darken-1 py-8 mt-16" dark>
      ¡Te damos la bienvenida al Nexo! ¡En este reino entre reinos, todo es
      posible! Elige entre decenas de héroes legendarios de todo el panteón de
      Blizzard, personaliza sus talentos y habilidades en medio del combate y
      lucha en una infinidad de campos de batalla que redefinen el género. ¡Esto
      no es un MOBA promedio, esto es Heroes of the Storm!
    </v-alert>
   
  </div>
</template>

<script>
export default {
  name: "Home",
 

  components: {
    // HelloWorld,
  },
};
</script>
<style scoped>
#fondo {
  background-image: url("https://img.redbull.com/images/w_1800/q_auto,f_auto/redbullcom/2014/03/21/1331640880872_2/heroes-of-the-storm");
  background-size: cover;
  width: 100%;
  height: 100%;
  padding-top: 40px;

}
.opacity{
 opacity: 0.7;
}
#fondo:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
.relativo {
  position: relative;
  border: 2px solid #ccc;
  padding: 1em;
  margin: 4em 0 4em 4em;
  width: 650px;
  color: white;
}
</style>
