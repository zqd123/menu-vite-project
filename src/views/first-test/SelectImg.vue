<script setup lang="ts">
import { ref, withDefaults, defineProps, defineEmits, watch } from "vue";
import { Image } from "./allImage";
const emit = defineEmits(["select-true", "select-error"]);
const showError = ref(false);
const showTrue = ref(false);
const props = withDefaults(
  defineProps<{
    testItem: Image;
  }>(),
  {}
);
const testItem = ref(JSON.parse(JSON.stringify(props.testItem)) as Image);
watch(
  () => props.testItem,
  (newValue) => {
    if (!newValue) return;
    testItem.value = JSON.parse(JSON.stringify(newValue));
  }
);
const selectHandle = (image: Image) => {
  if (image.isTrue) {
    showTrue.value = true;
    image.selectedColor = "border-black";
    setTimeout(() => {
      emit("select-true");
    }, 300);
    setTimeout(() => {
      showTrue.value = false;
    }, 200);
  } else {
    showError.value = true;
    image.selectedColor = "border-red-600";
    emit("select-error");
    setTimeout(() => {
      showError.value = false;
    }, 200);
  }
  // console.log("🚀 ~ file: SelectImg.vue:44 ~ selectHandle ~ image:", image);
};
/**vite处理静态资源（重要） */
const getAssetsFile = (url: string) => {
  return new URL(`../../assets/first-test/${url}`, import.meta.url).href;
};
</script>
<template>
  <div>
    <div class="relative flex gap-8 items-center">
      <div class="absolute left-2 top-2">
        <span v-show="showTrue" class="p-2 rounded bg-black text-white"
          >正确</span
        >
        <span v-show="showError" class="p-2 rounded bg-red-600 text-white"
          >错误</span
        >
      </div>
      <div
        class="w-40 h-36 p-2 bg-white flex justify-center items-center border-4 rounded-xl overflow-hidden border-black"
      >
        <img :src="getAssetsFile(testItem.url + '.png')" />
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div
          v-for="item in testItem.children"
          :key="item.url"
          class="w-40 h-36 p-2 bg-white flex justify-center items-center border-4 rounded-xl overflow-hidden"
          :class="item.selectedColor"
          @click="selectHandle(item)"
        >
          <img :src="getAssetsFile(item.url + '.png')" />
        </div>
      </div>
    </div>
  </div>

  <!-- 恭喜! 现在您将看到20组熟悉的图形。 按Q键开始MFFT游戏。 -->
</template>
<style scoped>
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
