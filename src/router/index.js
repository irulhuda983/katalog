import { createRouter, createWebHistory } from "vue-router";
import authRouter from "./auth";
import homeRouter from "./home";
import productRouter from "./product";
import historyRouter from "./history";
import profileRouter from "./profile";

const routes = [
  ...authRouter,
  {
    path: "/",
    name: "main",
    redirect: "/home",
    meta: { public: false },
    component: () => import("@/components/layouts/Main.vue"),
    children: [
      ...homeRouter,
      ...productRouter,
      ...historyRouter,
      ...profileRouter
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;