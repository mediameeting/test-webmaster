<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="6" class="ma-auto pa-10">
        <v-card class="pa-15" color="#f5f5f5">
          <div class="d-flex align-center">
            <p class="mb-0 mx-3">{{ currentTime }}''</p>
            <v-progress-linear color="#e84b23AA" :value="(currentTime / duration) * 100"></v-progress-linear>
            <p class="mb-0 mx-3">{{ duration }}''</p>
          </div>
          <v-card-actions class="d-flex justify-center">
            <v-btn icon @click="play()">
              <v-icon>mdi-play</v-icon>
            </v-btn>
            <v-btn icon @click="pause()">
              <v-icon>mdi-pause</v-icon>
            </v-btn>
            <v-btn icon @click="stop()">
              <v-icon>mdi-stop</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Player",

  data: () => ({
    duration: 60, // Duration in seconds
    currentTime: 0,
  }),

  methods: {
    play() {
      console.log("Play");
      if (this.currentTime < this.duration) {
        this.currentTime += 5; // Simulate playing by increasing time
      }
    },
    pause() {
      console.log("Player paused at", this.currentTime);
    },
    stop() {
      console.log("Player stopped");
      this.currentTime = 0; // Reset current time
    },
  },
};
</script>
