<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-toolbar color="transparent" class="pr-1 mt-n2">
            <v-toolbar-title class="text-white">Order Reports</v-toolbar-title>

            <v-spacer></v-spacer>
            <span class="text-caption text-white">View all</span>
            <v-btn
              density="compact"
              icon="mdi mdi-chevron-right-box"
              color="grey"
            ></v-btn>
          </v-toolbar>
          <h6 class="text-white ml-4 mt-n4">
            <span class="text-red">Wow 100+ new </span> Order got this week
          </h6>
          <v-card class="rounded-xl ma-2 pa-1" color="#424343">
            <v-row>
              <v-col cols="12" sm="1"> </v-col>
              <v-col cols="12" sm="2" class="text-center"
                ><span class="text-caption">Customer</span></v-col
              >
              <v-col cols="12" sm="2" class="text-center"
                ><span class="text-caption">Order number</span></v-col
              >
              <v-col cols="12" sm="2" class="text-center"
                ><span class="text-caption">address</span></v-col
              >
              <v-col cols="12" sm="2" class="text-center"
                ><span class="text-caption">Amount</span></v-col
              >
              <v-col cols="12" sm="2" class="text-center"
                ><span class="text-caption">Status</span></v-col
              >
              <v-col cols="12" sm="1" class="text-center"></v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-row>
            <v-col v-for="order in userOrders" cols="12">
              <v-card color="white">
                <v-row align="center">
                  <v-col class="d-flex justify-center" sm="2">
                    <v-img
                      :src="order.picture"
                      min-width="100"
                      max-width="200"
                    />
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-card-title>{{ order.name }}</v-card-title>
                    <v-card-subtitle>{{ order.username }}</v-card-subtitle>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-row>
                      <v-col v-for="dish in order.dishes" cols="12" lg="6">
                        <v-list-item
                          :append-avatar="dish.image"
                          variant="tonal"
                          rounded
                        >
                          <div class="card-body">
                            <h4>
                              {{ dish.name }}
                            </h4>
                            <h4>
                              {{ dish.count }}
                            </h4>
                          </div>
                        </v-list-item>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>

                <v-divider />
                <div class="card-price">
                  <h3>Total Price :</h3>
                  <h3>${{ order.totalPrice }}</h3>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { useOrderStore } from "@/store/orders";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const store = useOrderStore();

    const { userOrders } = storeToRefs(store);
    console.log(userOrders.value);

    return {
      store,
      userOrders,
    };
  },
};
</script>

<style>
.card-order {
  margin: 20px;
}
</style>

<style>
.card-price {
  display: flex;
  justify-content: center;
  column-gap: 20px;
  background-color: rgb(176, 255, 176);
}

.card-body {
  display: flex;
  justify-content: space-between;
}
</style>
