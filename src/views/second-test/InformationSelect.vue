<script setup lang="ts">
import { computed, ref, unref } from "vue";
import { Image } from "../first-test/allImage";
import Question from "./Question.vue";
const emit = defineEmits(["checkClickHandle"]);
const props = withDefaults(
  defineProps<{
    testItem: Image;
    second: string;
  }>(),
  {
    second: "8",
  }
);
let interval = 0;
const countdown = ref(0);
const dialogVisible = ref(false);
/**做出选择用时 */
const secondCount = computed(() => Number(props.second) - countdown.value);
/**初始化倒计时 */
const initSecond = () => {
  countdown.value = Number(unref(props.second));
  interval = window.setInterval(() => {
    countdown.value--;
    if (countdown.value === 0) {
      clearInterval(interval);
      dialogVisible.value = true;
    }
  }, 1000);
};
initSecond();
/**vite处理静态资源（重要） */
const getAssetsFile = (url: string) => {
  return new URL(`../../assets/seconde-test/${url}`, import.meta.url).href;
};
const selectHandle = () => {
  clearInterval(interval);
  dialogVisible.value = true;
};
/**答题后确认 */
const ok = () => {
  dialogVisible.value = false;
  emit("checkClickHandle");
  // initSecond();
};
</script>
<template>
  <div class="relative">
    <!-- <div class="fixed top-0 left-0">
      <RouterLink
        to="/seconde/test2?customType=small&customIndex=3&customSecond=8"
        >small</RouterLink
      ><br />
      <RouterLink
        to="/seconde/test2?customType=medium&customIndex=3&customSecond=10"
        >medium</RouterLink
      ><br />
      <RouterLink
        to="/seconde/test2?customType=large&customIndex=3&customSecond=20"
        >large</RouterLink
      >
    </div> -->
    <div class="mb-4">
      <div>请点击您认为性价比最高的课程，并回答问题。</div>
    </div>
    <!-- <el-button class="absolute -top-10" type="primary" text size="large"
      ><span class="text-lg">{{ countdown }} s</span></el-button
    > -->
    <div class="flex flex-wrap justify-center gap-2">
      <div
        v-for="item in testItem.children"
        :key="item.url"
        class="w-60 h-60 bg-white flex justify-center items-center overflow-hidden"
        :class="item.selectedColor"
        @click="selectHandle"
      >
        <img
          class="w-auto h-auto max-h-full max-w-full"
          :src="getAssetsFile(item.url + '.jpg')"
        />
      </div>
    </div>

    <el-dialog
      v-model="dialogVisible"
      width="60%"
      :align-center="true"
      :show-close="false"
      :close-on-click-modal="false"
      :close-on-press-escape="true"
      destroy-on-close
    >
      <Question :second-count="secondCount" @ok="ok"></Question>
    </el-dialog>
  </div>
</template>
