export default [
  {
    path: "/",
    redirect: "/Index",
  },
  {
    path: "/Index",
    name: "欢迎",
    icon: "smile",
    component: "./Index",
  },
  {
    path: "/Shopping",
    name: "商品列表",
    icon: "table",
    component: "./Shopping/index",
  },
];
