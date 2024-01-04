<template>
  <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.light.colors.primary }"
  >
    <SideBar />
    <v-app-bar color="black" class="app-bar">
      <div>
        <v-btn icon>
          <v-icon> mdi-account </v-icon>
        </v-btn>
        <span>{{ user.email }}</span>
      </div>
    </v-app-bar>
    <router-view />
  </v-app>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import { useAuthStore } from "@/store/auth";
import { computed } from "vue";

export default {
  setup() {
    const store = useAuthStore();
    const user = computed(() => {
      return store.user;
    });

    return {
      user,
    };
  },

  components: {
    SideBar,
  },
};
</script>

<style></style>
