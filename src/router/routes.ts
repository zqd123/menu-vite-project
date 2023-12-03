import type { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/menu",
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/admin/admin.vue"),
  },
  {
    path: "/menu",
    name: "menu",
    redirect: "/menu/login",
    children: [
      {
        path: "login",
        name: "menuLogin",
        component: () => import("../views/menu/Login.vue"),
      },
      {
        path: "menu-test/:globDirection/:type",
        name: "menu-test",
        component: () => import("../views/menu/menu.vue")
      },
      {
        path:"export",
        name:"export",
        component:()=>import("../views/menu/ExportDialog.vue")
      }
    ],
  },
  {
    path: "/first",
    name: "first",
    redirect: "/first/login",
    children: [
      {
        path: "login",
        name: "firstLogin",
        component: () => import("../views/first-test/Login.vue"),
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
