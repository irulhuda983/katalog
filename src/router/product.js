export default [
  {
    path: "/product",
    name: "product",
    meta: { public: false },
    component: () => import("@/pages/product/Index.vue"),
  },
  {
    path: "/product/:id/detail",
    name: "detailProduct",
    meta: { public: false },
    component: () => import("@/pages/detail-product/Index.vue"),
  },
];