// Composables
import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/store/auth";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/DefaultView.vue"),
    children: [
      {
        path: "",
        name: "dashboard",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Dashboard.vue"),
      },
      {
        path: "products/:id",
        name: "Products",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Product.vue"),
      },
      {
        path: "orders",
        name: "orders",
        component: () => import("@/views/Orders.vue"),
      },
      {
        path: "restaurants",
        name: "restaurants",
        component: () => import("@/views/Resturant.vue"),
      },
      {
        path: "finance",
        name: "finance",
        component: () => import("@/views/Finance.vue"),
      },
      {
        path: "logout",
        name: "logout",
        component: () => import("@/views/Logout.vue"),
      },
      {
        path: "login",
        name: "login",
        component: () => import("@/views/Login.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

router.beforeEach(async (to, from) => {
  const store = await useAuthStore();
  if (!store.isAuthenticated && to.name !== "login") {
    return {
      name: "login",
      query: { redirect: to.fullPath },
    };
  }
});
