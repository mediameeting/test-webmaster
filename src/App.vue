<template>
  <v-app>
    <v-app-bar app color="#FF7452" dark>
      <h1>Mediameeting</h1>
      <v-spacer></v-spacer>
      <h3>Test technique Webmaster</h3>
    </v-app-bar>

    <v-main>
      <!-- <Banner /> -->
      <v-container class="mt-15 pt-15 text-center">
        <p class="font-italic font-weight-light">
          À faire sur cette page, directement ici ou grâce à des composants.
        </p>
        <h1>Exercice 2 :</h1>
        <p>Conception et intégration</p>
        <h1>Exercice 3 :</h1>
        <p>Intégration</p>
      </v-container>
      <!-- <Player /> -->
      <!-- <Comments /> -->
      <!-- <Grid /> -->
    </v-main>

    <v-footer color="#FF7452">
      <v-row justify="center" no-gutters>
        <v-col class="py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Mediameeting</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
// import Banner from "./components/Banner.vue";
// import Player from "./components/Player.vue";
// import Comments from "./components/Comments.vue";
// import Grid from "./components/Grid.vue";

export default {
  name: "App",

  components: {
    // Banner,
    // Player,
    // Comments,
    // Grid,
  },

  data: () => ({
    // You can add any data properties here if needed
  }),
};
</script>

<style>
.container {
  max-width: 100%;
}
</style>
