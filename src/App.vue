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
  <div>
    <!-- <div
      class="fixed left-2 top-2"
      title="首页"
      @click="router.push({ path: '/login' })"
    >
      <el-icon color="#409EFC"> <HomeFilled /> </el-icon>实验一
    </div> -->
    <!-- <div class="fixed left-2 top-2">
      <RouterLink to="/first">实验一</RouterLink>

      <RouterLink
        to="/seconde/test2?customType=small&customIndex=1&customSecond=10"
        >实验二small</RouterLink
      >
    </div> -->
    <!-- <div class="fixed right-2 bottom-2" @click="showHistory">
      <el-icon color="#409EFC">
        <Clock />
      </el-icon>
    </div> -->
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
