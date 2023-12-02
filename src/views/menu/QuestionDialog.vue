<template>
  <el-dialog
    model-value
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :show-close="false"
    :modal="false"
    append-to-body
    width="50%"
    draggable
    top="85vh"
    id="modelDialogRef"
   class="dialog-question"
  >
    <span v-html="showQuestionStr(currentQuestion?.questionStr)"></span>
    <div class="flex justify-center p-2">
      <el-radio-group v-model="answerValue">
        <el-radio :label="1">是</el-radio>
        <el-radio :label="2">否</el-radio>
      </el-radio-group>
      <el-button :disabled="!answerValue" type="primary" class="ml-auto" @click="selectHandle"> 确认 </el-button>
    </div>
  </el-dialog>
</template>
<script lang="ts" setup>
import { computed, nextTick, onMounted, ref, watch } from "vue";
import { QuestionStr,QuestionType } from "./questionHook";
const emit = defineEmits(['refreshMenu']);
const props = defineProps<{
  questionStrList: QuestionStr[];
}>();
const answerValue = ref<number>(0);
const questionIndex = ref<number>(0);
const currentQuestion = ref<QuestionStr>();
const answerList = ref<AnswerItem[]>([])
const startTime = ref<number>(0);
const endTime = ref<number>(0);
watch(
  questionIndex,
  (v) => {
    startTime.value = Date.now();
    return (currentQuestion.value = props.questionStrList[v]);
  },
  { immediate: true }
);
function showQuestionStr(str: string|undefined){
  if (str) {
    const mapStr = str.replace(/[A-Za-z]/g, (match) => {
      return `<span class="font-bold">${match}</span>`;
    });
    return mapStr;
  }
  return ''
}
interface AnswerItem {
  questionType?:QuestionType,
  isAnswerTrue?:boolean,
  times?:string,
}
/**
 * 选择答案
 */
function selectHandle() {
  endTime.value = Date.now();
  const times = (endTime.value - startTime.value)/1000
  const fixedTimes = times.toFixed(2);
  const bool = answerValue.value === 1  
  const isAnswerTrue = bool === currentQuestion.value?.isTrue
  const answerItem = {
    questionType: currentQuestion.value?.questionType,
    isAnswerTrue: isAnswerTrue,
    times: fixedTimes
  }
  answerList.value.push(answerItem)
  saveStore(answerList.value)
  if (questionIndex.value === props.questionStrList.length - 1) {
    emit('refreshMenu')
  }else{
    questionIndex.value++;
    answerValue.value = 0;
  }
}
/**
 * 保存到storage中
 * @param answer 答案 
 */
function saveStore(answer:AnswerItem[]){
  //获取sessionStorage中已保存的数据
  const answerStr = sessionStorage.getItem('answer')
  if (answerStr) {
    const answerList = JSON.parse(answerStr)
    answerList.push(...answer)
    sessionStorage.setItem('answer', JSON.stringify(answerList))
  }else{
    sessionStorage.setItem('answer', JSON.stringify(answer))
  }
}
nextTick(() => {
   // 把弹窗父亲的父亲 dom 元素添加 pointer-events: none; 防止穿透
   const elDialog = document.getElementById('modelDialogRef');
   // @ts-ignore
   elDialog?.parentNode?.parentNode?.setAttribute('style', 'pointer-events: none;');
 });
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