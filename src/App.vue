<script setup lang="ts">
import router from "./router";
import { useExperimentStore } from "./store/experiment";
const experimentStore = useExperimentStore();

/**阻止关闭刷新页面 */
// window.addEventListener("beforeunload", (e) => {
//   e.preventDefault();
//   e.returnValue = "";
// });
/**页面加载后,删除userName */
window.onunload = function () {
  sessionStorage.removeItem("userName");
};
</script>

<template>
  <div class="h-full flex justify-start">
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
