<template>
  <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.light.colors.primary }"
  >
    <SideBar />
    <router-view />
  </v-app>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
export default {
  components: {
    SideBar,
  },
};
</script>
