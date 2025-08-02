export default [
  {
    path: "/login",
    name: "login",
    meta: { public: false },
    component: () => import("@/pages/login/Index.vue"),
  },
];