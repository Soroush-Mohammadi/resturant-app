<template>
  <v-row>
    <v-col>
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
    </v-col>
  </v-row>
  <!-- CategorySlider -->
  <v-row>
    <v-col v-for="(food, i) in categories" :key="i">
      <v-avatar color="#605850" size="70" @click="getToProductPage(food)">
        <v-img :src="food.img" height="50"></v-img>
      </v-avatar>
    </v-col>
  </v-row>
</template>

<script setup>
import { useOrderStore } from "../store/orders";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const store = useOrderStore();
const router = useRouter();

const { categories } = storeToRefs(store);

function getToProductPage(product) {
  router.push(`/products/${product.name}`);
}
</script>
