import { defineStore } from "pinia";
import { computed, ref } from "vue";
import axios from "axios";

export const useOrderStore = defineStore("orders", () => {
  const categories = ref([
    {
      name: "Gourmet-Delight-Burger",
      description: "Sink your teeth into the ultimate burger experience.",
      ingredients: [
        "Juicy Angus Beef Patty",
        "Artisanal Brioche Bun",
        "Creamy Truffle Aioli",
        "Crispy Bacon",
        "Melted Swiss Cheese",
      ],
      price: 12.99,
      img: "2.png",
    },
    {
      name: "Veggie-Delight-Wrap",
      description:
        "A delightful wrap filled with fresh vegetables and flavorful sauces.",
      ingredients: [
        "Grilled Portobello Mushroom",
        "Mixed Greens",
        "Roasted Bell Peppers",
        "Crispy Tofu",
        "Tangy Tahini Dressing",
      ],
      price: 9.99,
      img: "3.png",
    },
    {
      name: "Classic-Margherita-Pizza",
      description:
        "A timeless favorite with a thin crust, tangy tomato sauce, and fresh basil.",
      ingredients: [
        "Thin Pizza Crust",
        "Tomato Sauce",
        "Mozzarella Cheese",
        "Fresh Basil Leaves",
        "Olive Oil",
      ],
      price: 14.99,
      img: "4.png",
    },
    {
      name: "Spicy-Chicken-Tacos",
      description:
        "Tender chicken strips with a kick, served in warm tortillas and topped with zesty salsa.",
      ingredients: [
        "Grilled Chicken Strips",
        "Flour Tortillas",
        "Spicy Salsa",
        "Shredded Lettuce",
        "Fresh Cilantro",
      ],
      price: 11.99,
      img: "5.png",
    },
    {
      name: "Mediterranean-Salad",
      description:
        "A refreshing salad with vibrant Mediterranean flavors and a tangy dressing.",
      ingredients: [
        "Mixed Greens",
        "Cherry Tomatoes",
        "Cucumber",
        "Kalamata Olives",
        "Feta Cheese",
      ],
      price: 8.99,
      img: "6.png",
    },
    {
      name: "Teriyaki-Salmon-Bowl",
      description:
        "Grilled salmon glazed with teriyaki sauce served over a bed of steamed rice and stir-fried vegetables.",
      ingredients: [
        "Grilled Salmon",
        "Teriyaki Sauce",
        "Steamed Rice",
        "Stir-Fried Vegetables",
        "Sesame Seeds",
      ],
      price: 16.99,
      img: "7.png",
    },
    {
      name: "Chocolate-Lava-Cake",
      description:
        "A decadent chocolate cake with a gooey molten center, served with a scoop of vanilla ice cream.",
      ingredients: [
        "Chocolate Cake",
        "Dark Chocolate Filling",
        "Powdered Sugar",
        "Vanilla Ice Cream",
        "Fresh Berries",
      ],
      price: 7.99,
      img: "8.png",
    },
  ]);

  const dishes = ref([
    {
      image: "11.png",
      name: "Hamburger",
      money: 10,
      star: "4.5",
      count: 1,
      id: "srt",
      totalPrice: 10,
    },
    {
      image: "22.png",
      name: "Pizza",
      money: 25,
      star: "4.1",
      count: 1,
      id: "dst",
      totalPrice: 25,
    },
    {
      image: "33.png",
      name: "Sushi",
      money: 15,
      star: "4.3",
      count: 1,
      id: "trt",
      totalPrice: 15,
    },
    {
      image: "44.png",
      name: "Gratin",
      money: 23,
      star: "4.9",
      count: 1,
      id: "gtr",
      totalPrice: 23,
    },
  ]);

  const orders = ref([]);
  const userOrders = ref([]);

  const getOrders = computed(() => {
    return orders;
  });

  function addOrder(item) {
    item.count++;
    item.totalPrice = item.count * item.money;
  }

  function removeOrder(item) {
    const index = orders.value.findIndex((order) => order.name === item.name);
    if (item.count > 1) {
      item.count--;
    } else {
      orders.value.splice(index, 1);
    }

    item.totalPrice = item.count * item.money;
  }

  function $reset() {
    orders.value = [];
  }

  async function setUserOrder(total) {
    try {
      const random = Math.floor(Math.random() * 10) + 1;
      const random2 = Math.floor(Math.random() * 100) + 1;
      const [response1, response2] = await Promise.all([
        axios.get(`https://jsonplaceholder.typicode.com/users/${random}`),
        axios.get(
          `https://api.slingacademy.com/v1/sample-data/users/${random2}`
        ),
      ]);

      const userData = response1.data;
      const userPicture = response2.data.user.profile_picture;
      userOrders.value.push({
        ...userData,
        totalPrice: total,
        picture: userPicture,
        dishes: orders.value,
      });
      console.log(userOrders.value);
      orders.value = [];
    } catch (error) {
      console.log("error ", error);
    }
  }

  return {
    categories,
    orders,
    dishes,
    addOrder,
    removeOrder,
    setUserOrder,
    userOrders,
    getOrders,
    $reset,
  };
});
