<script setup lang="ts">
import { useRoute } from "vue-router";
import router from "../../router";
const route = useRoute();

const nextStep = () => {
  router.push({ path: "/seconde/test2", query: route.query });
};
</script>
<template>
  <div>
    <el-card
      class="w-96 h-72 flex flex-col justify-between items-center mb-4"
      shadow="always"
    >
      <el-icon color="#409EFC" :size="20" class="m-10"><Opportunity /></el-icon>
      <div>
        假设您需要掌握Python编程技能，现在您可以在随后提供的课程集中选择一款课程进行学习。<br />
        请点击您认为性价比最高的课程，并回答问题。<br />
        请注意：课程集的选择有时间限制，如无法选出则视为放弃。
      </div>
    </el-card>
    <el-button type="primary" @click="nextStep">
      <el-icon><DArrowRight /></el-icon>
      Go
    </el-button>
  </div>
</template>
