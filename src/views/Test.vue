<template>
  <ul>
    <li v-for="order in orders">
      {{ order.name }}
    </li>
  </ul>
</template>

<script setup>
import { useOrderStore } from "../store/orders";
import { storeToRefs } from "pinia";

const store = useOrderStore();

const { orders } = storeToRefs(store);
</script>
