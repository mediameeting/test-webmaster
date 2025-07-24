<template>
  <v-banner single-line color="yellow">
    <v-icon left>mdi-alert</v-icon>
    Message important à afficher dans la bannière

    <template v-slot:actions>
      <v-btn @click="launchAlert()"> CTA </v-btn>
    </template>
  </v-banner>
</template>

<script>
export default {
  name: "Banner",

  data: () => ({
    // You can add any data properties here if needed
  }),

  methods: {
    launchAlert() {
      alert("Bannière cliquée !");
    },
  },
};
</script>
