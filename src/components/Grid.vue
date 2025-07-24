<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="6" class="ma-auto pa-10">
        <v-card class="pa-15" color="#f5f5f5">
          <v-row>
            <v-col v-for="block in blocks" :key="block.text" :cols="block.size">
              <v-card class="pa-5 card" :color="block.color">
                <v-card-text class="card-text text-center">{{ block.text }}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Grid",

  data: () => ({
    userComment: "",
    blocks: [
      { color: "blue lighten-3", text: "Block 1", size: 4 },
      { color: "green lighten-3", text: "Block 2", size: 4 },
      { color: "red lighten-3", text: "Block 3", size: 4 },
      { color: "purple lighten-3", text: "Block 4", size: 12 },
      { color: "orange lighten-3", text: "Block 5", size: 6 },
      { color: "cyan lighten-3", text: "Block 6", size: 6 },
    ],
    // You can add any data properties here if needed
  }),

  methods: {
    addComment() {
      if (this.userComment.trim()) {
        this.comments.push({ text: this.userComment });
        this.userComment = "";
      }
    },
  },
};
</script>

<style scoped>
.card {
  height: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-text {
  color: white !important;
}
</style>
