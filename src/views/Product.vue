<template>
  <v-main>
    <v-container class="container">
      <v-row align="start" justify="center" class="bg-white">
        <v-col cols="8" lg="5">
          <v-sheet>
            <v-img :src="`/${product.img}`" max-height="300"></v-img>
          </v-sheet>
        </v-col>
        <v-col cols="8" lg="5">
          <v-sheet>
            <div class="sheet-header">
              <v-toolbar density="compact">
                <h4 class="ml-2">Product Title :</h4>
              </v-toolbar>
              <h2 class="mt-2 ml-2">
                {{ product.name }}
              </h2>
            </div>
            <div class="sheet-body ml-2">
              {{ product.description }}
              <v-toolbar density="compact" class="mt-4">
                <h3 class="my-2 ml-2">Ingridents :</h3>
              </v-toolbar>
              <v-chip
                v-for="item in product.ingredients"
                :key="item"
                class="my-2"
              >
                {{ item }}
              </v-chip>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useOrderStore } from "@/store/orders";

export default {
  setup() {
    const route = useRoute();
    const store = useOrderStore();

    const product = computed(() => {
      return store.categories.find((item) => item.name === route.params.id);
    });

    return {
      store,
      product,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
}
</style>
