export default [
  {
    path: "/profile",
    name: "profile",
    meta: { public: false },
    component: () => import("@/pages/profile/Index.vue"),
  },
];