<template>
  <v-row>
    <v-col>
      <v-toolbar color="transparent" class="pr-1 mt-n2">
        <v-toolbar-title class="text-white">Popular Dishes</v-toolbar-title>

        <v-spacer></v-spacer>
        <span class="text-caption text-white">View More</span>
        <v-btn
          density="compact"
          icon="mdi mdi-chevron-right-box"
          color="grey"
        ></v-btn>
      </v-toolbar>
      <h6 class="text-white ml-4 mt-n4">
        <span class="text-red">20+ new </span> dishes added this week
      </h6>
    </v-col>
  </v-row>
  <v-row>
    <v-col v-for="(dishe, i) in dishes" :key="i" xs="3" md="3">
      <v-card
        color="transparent"
        @click="addOrder(dishe)"
        class="card"
        max-width="280"
      >
        <div>
          <v-img height="70" :src="dishe.image" class="imag"></v-img>
          <v-card class="mt-n10" width="160" color="#303030">
            <v-card-item class="text-center">
              <v-card-title class="mt-10">{{ dishe.name }}</v-card-title>

              <v-card-subtitle>
                <span class="me-1">Starting From</span>
              </v-card-subtitle>
              <v-card-title>{{ dishe.money }}$</v-card-title>
            </v-card-item>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-icon
                  color="yellow"
                  icon="mdi mdi-star"
                  size="small"
                ></v-icon>
                <div class="text-grey ms-4">
                  <h6>{{ dishe.star }}</h6>
                </div>
                <v-spacer></v-spacer>
                <div class="text-grey ms-4">
                  1360
                  <h5>Total Sale</h5>
                </div>
              </v-row>
            </v-card-text>
          </v-card>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { useOrderStore } from "@/store/orders";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const store = useOrderStore();

    const { dishes } = store;
    const { orders } = storeToRefs(store);

    function addOrder(dish) {
      const plate = orders.value.find((item) => item === dish);
      if (!plate) {
        orders.value.push(dish);
      } else {
        plate.count++;
        plate.totalPrice = plate.count * plate.money;
      }
    }

    return {
      addOrder,
      dishes,
      orders,
    };
  },
};
</script>

<style scoped>
.imag {
  z-index: 9999 !important;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
