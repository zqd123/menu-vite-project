<script setup lang="ts">
import { ref } from "vue";
import SelectImg from "./SelectImg.vue";
import { images, testImages } from "./allImage";
import StartAction from "./StartAction.vue";
import EndTest from "./endTest.vue";
import { useExperimentStore } from "../../store/experiment";
const experimentStore = useExperimentStore();
/**是否为预实验 */
const isTest = ref(true);
/**实验索引 */
const testIndex = ref(0);
/**正式实验提示页面 */
const showAction = ref(false);
/**结束页面 */
const showEnd = ref(false);
/**当前实验项目 */
const currentItem = ref(testImages[0]);
/**每项实验开始时间 */
const startTime = ref<Date>(new Date());
/**第一次选择用的时间 */
const firstClickTime = ref(0);
/**每项实验选错的数量 */
const errorSum = ref(0);
/**选中正确选项回调 */
const selectTrue = () => {
  //正式实验数据保存到store中
  if (isTest.value === false) {
    experimentStore.experimentData.push({
      selectFirstTime:
        errorSum.value === 0
          ? computeTimes(startTime.value)
          : firstClickTime.value,
      selectTrueTimes: computeTimes(startTime.value),
      errorSelectSum: errorSum.value,
    });
    console.table(experimentStore.experimentData);
  }
  if (isTest.value === true && testIndex.value === testImages.length - 1) {
    showAction.value = true;
    return;
  }
  if (isTest.value === false && testIndex.value === images.length - 1) {
    showEnd.value = true;
    return;
  }
  errorSum.value = 0;
  startTime.value = new Date();
  testIndex.value += 1;
  currentItem.value = isTest.value
    ? testImages[testIndex.value]
    : images[testIndex.value];
};
/**选择错误回调 */
const selectError = () => {
  errorSum.value++;
  if (errorSum.value === 1) {
    firstClickTime.value = computeTimes(startTime.value);
  }
  console.log(
    "🚀 ~ file: TestPage.vue:45 ~ selectError ~ errorSum.value:",
    errorSum.value
  );
};
/**正式实验开始 */
const startAction = () => {
  showAction.value = false;
  testIndex.value = 0;
  isTest.value = false;
  currentItem.value = images[testIndex.value];
  startTime.value = new Date();
  experimentStore.experimentData = []; //清空数据
};
/**计算时间差 */
const computeTimes = (startTime: Date) => {
  const nowTime = new Date();
  const count = nowTime.getTime() - startTime.getTime();
  const formateCount = Number((count / 1000).toFixed(2));
  return formateCount;
};
</script>
<template>
  <div>
    <div v-show="!showAction && !showEnd" class="text-left">
      <span v-if="isTest">实践</span>
      案例 {{ testIndex + 1 }}/{{ isTest ? testImages.length : images.length }}
    </div>
    <SelectImg
      v-show="!showAction && !showEnd"
      :test-item="currentItem"
      :test-index="testIndex"
      :is-test="isTest"
      @select-true="selectTrue"
      @select-error="selectError"
    ></SelectImg>
    <!-- 开始正式实验前页面 -->
    <StartAction v-if="showAction" @start-action="startAction"></StartAction>
    <!-- 实验结束页面 -->
    <EndTest v-if="showEnd"></EndTest>
  </div>
</template>
<style scoped></style>
