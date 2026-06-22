import { createRouter, createWebHashHistory } from "vue-router";

const routers = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/Chat",
    name: "Chat",
    component: () => import("../views/Chat.vue"),
  },
    {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile.vue"),
  },
];
// 创建路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes: routers,
});
// 导出路由对象
export default router;
