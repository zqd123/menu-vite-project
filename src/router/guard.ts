import router from "./index";
import NProgress from "../utils/progress";

/**前置守卫 */
router.beforeEach((to, from) => {
  // console.log({ to, from });
  NProgress.start();
  return true
  // if (
  //   to.path.includes("/seconde") &&
  //   to.path !== "/seconde/login" &&
  //   !sessionStorage.getItem("userName")
  // ) {
  //   return { path: "/seconde/login", query: to.query };
  // } else if (
  //   to.path.includes("/first") &&
  //   to.path !== "/first/login" &&
  //   !sessionStorage.getItem("userName")
  // ) {
  //   return { path: "/first/login", query: to.query };
  // } else {
  //   return true;
  // }
});
/**后置守卫 */
router.afterEach((to, from) => {
  NProgress.done();
  // console.log({ to, from });
});
