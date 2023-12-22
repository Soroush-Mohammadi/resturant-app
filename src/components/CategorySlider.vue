<template>
  <v-toolbar color="transparent" class="pr-1 mt-n7">
    <v-toolbar-title class="text-white">Categories</v-toolbar-title>

    <v-spacer></v-spacer>
    <span class="text-caption text-white">View all</span>
    <v-btn
      density="compact"
      icon="mdi mdi-chevron-right-box"
      color="grey"
    ></v-btn>
  </v-toolbar>
  <h6 class="text-white ml-4 mt-n4">
    <span class="text-red">10+ new </span> Categories added this week
  </h6>
  <!-- CategorySlider -->
  <div class="d-flex justify-space-evenly mt-4" color="transparent">
    <v-avatar color="#605850" size="70" v-for="(food, i) in foods" :key="i">
      <v-img :src="food.image" height="50"></v-img>
    </v-avatar>
  </div>
</template>

<script>
export default {
  props: ["foods"],
};
</script>
