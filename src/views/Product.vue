<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-row align="center" justify="center">
              <v-col cols="6">
                <v-img :src="`/${product.img}`" max-height="300"></v-img>
              </v-col>
              <v-col cols="6">
                <v-card-item>
                  <v-card-title>
                    {{ product.name }}
                  </v-card-title>
                  <v-card-subtitle>
                    {{ product.description }}
                  </v-card-subtitle>
                </v-card-item>
                <v-card-text>
                  <v-toolbar density="compact" rounded>
                    <v-toolbar-title>
                      <h5>ingridents</h5>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-list class="d-flex">
                    <v-row>
                      <v-list-item
                        v-for="ing in product.ingredients"
                        :key="ing"
                      >
                        <v-col>
                          <v-chip>
                            {{ ing }}
                          </v-chip>
                        </v-col>
                      </v-list-item>
                    </v-row>
                  </v-list>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
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

<style></style>
