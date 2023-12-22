<template>
  <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.light.colors.primary }"
  >
    <SideBare />
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" sm="8">
            <!-- serach-field -->
            <SearchBox />
            <!-- categoryToolbar -->
            <CategorySlider :foods="foods" />
            <!-- popular dishes -->
            <PopularDishes :dishes="dishes" />
            <!-- order reports -->
            <OrderReports />
          </v-col>
          <v-col cols="12" sm="4">
            <DeliveryDetails />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import SideBare from "@/components/SideBar.vue";
const foods = [
  { image: "2.png" },
  { image: "3.png" },
  { image: "4.png" },
  { image: "5.png" },
  { image: "6.png" },
  { image: "7.png" },
  { image: "8.png" },
];
const dishes = [
  { image: "11.png", name: "Hamburger", money: "$10.00", star: "4.5" },
  { image: "22.png", name: "Pizza", money: "$25.00", star: "4.1" },
  { image: "33.png", name: "Sushi", money: "$15.00", star: "4.3" },
  { image: "44.png", name: "Gratin", money: "$23.00", star: "4.9" },
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
