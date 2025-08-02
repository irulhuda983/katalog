export default [
  {
    path: "/history",
    name: "history",
    meta: { public: false },
    component: () => import("@/pages/history/Index.vue"),
  },
];