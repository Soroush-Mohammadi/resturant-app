<template>
  <v-row class="mt-n5">
    <v-col v-for="(order, index) in userOrders" :key="order.id">
      <router-link to="/orders">
        <v-chip
          class="d-flex align-center"
          style="color: white; background-color: transparent; cursor: pointer"
          :append-avatar="order.picture"
          :class="index === 0 ? 'mt-10' : ''"
          size="x-large"
        >
          <v-card-title>
            {{ order.name }}
          </v-card-title>
          <v-card-subtitle>
            {{ order.username }}
          </v-card-subtitle>
          <v-card-text>
            {{ order.address.street }}| {{ order.address.suite }}|{{
              order.address.city
            }}
          </v-card-text>
          <v-card-text> ${{ order.totalPrice }} </v-card-text>
        </v-chip>
      </router-link>
    </v-col>
  </v-row>
</template>

<script>
import { useOrderStore } from "@/store/orders";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const store = useOrderStore();
    const { userOrders } = storeToRefs(store);

    return {
      userOrders,
    };
  },
};
</script>
