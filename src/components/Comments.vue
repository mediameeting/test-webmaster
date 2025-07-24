<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="6" class="ma-auto pa-10">
        <v-card class="pa-15" color="#f5f5f5">
          <v-card v-for="comment in comments" :key="comment.text" class="mb-2">
            <v-card-text>{{ comment.text }}</v-card-text>
          </v-card>
          <v-card-actions class="d-flex align-center">
            <v-text-field
              v-model="userComment"
              class="align-center"
              outlined
              hide-details
              placeholder="laissez votre commentaire"
            ></v-text-field>
            <v-btn @click="addComment" icon color="#e84b23AA" class="ml-4">
                <v-icon large>mdi-send</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Comments",

  data: () => ({
    userComment: "",
    comments: [
      { text: "This is the first comment." },
      { text: "Here's another comment." },
      { text: "And yet another one!" },
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
