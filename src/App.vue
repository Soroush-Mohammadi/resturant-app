<template>
  <router-view />
</template>

<script setup>
import { useAuthStore } from "./store/auth";
import { storeToRefs } from "pinia";
console.log("app");

const store = useAuthStore();
let { user } = storeToRefs(store);
const localUser = localStorage.getItem("user");

function setUser() {
  if (localUser) {
    user.value = JSON.parse(localUser);
  }
}

setUser();
</script>
