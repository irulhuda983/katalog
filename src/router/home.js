export default [
  {
    path: "/home",
    name: "home",
    meta: { public: false },
    component: () => import("@/pages/home/Index.vue"),
  },
];