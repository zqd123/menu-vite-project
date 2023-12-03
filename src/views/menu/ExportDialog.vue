<template>
  <!-- 返回登录页 -->
  <div class="absolute left-0 bottom-0 z-[3000]">
    <el-icon color="#79bbff" @click="goLogin">
      <House />
    </el-icon>
  </div>
  <el-dialog
  model-value
  :close-on-click-modal="false"
  :close-on-press-escape="false"
  :show-close="false"
  fullscreen
  >
    <div class="flex justify-center">
      <el-button type="primary" @click="exportExcel"> 导出数据 </el-button>
    </div>
  </el-dialog>
</template>
<script lang="ts" setup>
import { computed, nextTick, onMounted, ref, watch } from "vue";
import { QuestionStr, QuestionType } from "./questionHook";
import { useMenu } from "./menuHook";
interface AnswerItem {
  questionType?: QuestionType;
  isAnswerTrue?: boolean;
  times?: string;
}
const { goLogin } = useMenu();
const answerValue = ref<number>(0);
const questionIndex = ref<number>(0);
const currentQuestion = ref<QuestionStr>();
const answerList = ref<AnswerItem[]>([]);
const startTime = ref<number>(0);
const endTime = ref<number>(0);
function exportExcel() {
  const answerData = sessionStorage.getItem("answer");
  console.log(
    "🚀 ~ file: ExportDialog.vue:35 ~ exportExcel ~ answerData:",
    answerData
  );
}
</script>
<style>
.dialog-question {
  pointer-events: auto;
  border: 1px solid #c7bfbf;
  border-radius: 10px;
}
.dialog-question .el-dialog__body {
  padding: 0 10px;
}
</style>
