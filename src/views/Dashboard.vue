<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <!-- serach-field -->
          <SearchBox />
          <!-- categoryToolbar -->
          <CategorySlider />
          <!-- popular dishes -->
          <PopularDishes />
          <!-- order reports -->
          <OrderReports />
        </v-col>
        <v-col cols="12" md="4">
          <DeliveryDetails />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import SideBar from "@/components/SideBar.vue";
const foods = [
  { image: "2.png" },
  { image: "3.png" },
  { image: "4.png" },
  { image: "5.png" },
  { image: "6.png" },
  { image: "7.png" },
  { image: "8.png" },
];
</script>
<script>
import CategorySlider from "@/components/CategorySlider.vue";
import PopularDishes from "@/components/PopularDishes.vue";
import SearchBox from "@/components/SearchBox.vue";
import OrderReports from "@/components/OrderReports.vue";
import DeliveryDetails from "@/components/DeliveryDetails.vue";

export default {
  data: () => ({}),

  components: {
    CategorySlider,
    PopularDishes,
    SearchBox,
    OrderReports,
    DeliveryDetails,
  },
};
</script>
<style scoped>
.mRight {
  margin-right: 100px;
}
</style>
