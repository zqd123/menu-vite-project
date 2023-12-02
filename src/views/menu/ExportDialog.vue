<template>
  <el-dialog
    model-value
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :show-close="false"
    fullscreen
  >
      <el-button type="primary" class="ml-auto" @click="exportExcel"> 导出数据 </el-button>
  </el-dialog>
</template>
<script lang="ts" setup>
import { computed, nextTick, onMounted, ref, watch } from "vue";
import { QuestionStr,QuestionType } from "./questionHook";
interface AnswerItem {
  questionType?:QuestionType,
  isAnswerTrue?:boolean,
  times?:string,
}
const answerValue = ref<number>(0);
const questionIndex = ref<number>(0);
const currentQuestion = ref<QuestionStr>();
const answerList = ref<AnswerItem[]>([])
const startTime = ref<number>(0);
const endTime = ref<number>(0);
function exportExcel(){
  const answerData = sessionStorage.getItem('question')
  console.log("🚀 ~ file: ExportDialog.vue:35 ~ exportExcel ~ answerData:", answerData)
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