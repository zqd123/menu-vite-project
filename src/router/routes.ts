import type { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "first",
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/admin/admin.vue"),
  },
  {
    path: "/first",
    name: "home",
    redirect: "/first/menu",
    children: [
      {
        path: "login",
        name: "firstLogin",
        component: () => import("../views/first-test/Login.vue"),
      },
      {
        path: "menu",
        name: "menu",
        component: () => import("../views/menu/menu.vue"),
      },
      
    ],
  },
  {
    path: "/seconde",
    name: "seconde",
    redirect: "/seconde/login",
    children: [
      {
        path: "login",
        name: "secondeLogin",
        component: () => import("../views/second-test/Login.vue"),
        props: true,
      },
      {
        path: "guidance",
        name: "secondeGuidance",
        component: () => import("../views/second-test/Guidance.vue"),
      },
      {
        path: "test2",
        name: "test2",
        component: () => import("../views/second-test/index.vue"),
        props: (route) => ({ query: route.query }),
      },
      {
        path: "over",
        name: "over",
        component: () => import("../views/second-test/OverPage.vue"),
        props: true,
      },
      {
        path: "endTest",
        name: "endTest",
        component: () => import("../views/second-test/endTest.vue"),
        props: true,
      },
    ],
  },
];

export default routes;
