<script setup lang="ts">
import { ref } from "vue";
import router from "../../router";

const stepNum = ref(0);
const nextStep = () => {
  if (stepNum.value >= 2) {
    // router.push({ path: "/welcome" });
    router.push({ path: "test1" });
  }
  stepNum.value++;
};
</script>
<template>
  <div>
    <el-card
      class="w-96 h-72 flex flex-col justify-between items-center mb-4"
      shadow="always"
    >
      <el-icon color="#409EFC" :size="20" class="m-10"><Opportunity /></el-icon>
      <div v-show="stepNum === 0">请点击开始匹配熟悉图形测试。</div>
      <div v-show="stepNum === 1">
        欢迎来到匹配熟悉图形测试! <br />
        请点击右方六个图片集中与左边图片一致的选项。<br />
        前 2 组为熟悉性实验.
      </div>
      <div v-show="stepNum === 2">点击进入预实验.</div>
    </el-card>
    <el-button type="primary" @click="nextStep">
      <el-icon><DArrowRight /></el-icon>
      Go
    </el-button>
  </div>
</template>
<style scoped></style>
