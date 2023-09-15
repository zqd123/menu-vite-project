<script setup lang="ts">
import { reactive, ref } from "vue";
import SelectImg from "./InformationSelect.vue";
import {
  smallInformationImages,
  mediumInformationImages,
  largeInformationImages,
} from "../second-test/allImage";
import { SECONDETYPE } from "./commonEnum";
import router from "../../router";
import { useRoute } from "vue-router";
const route = useRoute();
const customQuery = reactive({
  type: (route.query.customType as string) ?? "small",
  index: route.query.customIndex ?? "3",
  second: (route.query.customSecond as string) ?? "8",
});

console.log(
  "🚀 ~ file: index.vue:11 ~ customQuery ~ customQuery:",
  customQuery
);
// const experimentStore = useExperimentStore();
/**实验索引 */
const testIndex = ref(Number(customQuery.index) - 3);
if (testIndex.value < 0) {
  testIndex.value = 0;
}
/**当前实验项目 */
const currentItem = ref();
currentItem.value =
  customQuery.type === SECONDETYPE.small
    ? smallInformationImages[testIndex.value]
    : customQuery.type === SECONDETYPE.medium
    ? mediumInformationImages[testIndex.value]
    : largeInformationImages[testIndex.value];
/**选中正确选项回调 */
const checkClickHandle = () => {
  router.push({ path: "/seconde/over", query: route.query });
};
</script>
<template>
  <div>
    <SelectImg
      :test-item="currentItem"
      :test-index="testIndex"
      :second="customQuery.second"
      @checkClickHandle="checkClickHandle"
    ></SelectImg>
  </div>
</template>
<style scoped></style>
