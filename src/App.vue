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
  sessionStorage.removeItem("answer");
};
</script>

<template>
  <div class="h-full w-full flex justify-start">
    <RouterView></RouterView>
  </div>
</template>

