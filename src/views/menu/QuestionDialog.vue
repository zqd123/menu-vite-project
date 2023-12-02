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
const props = defineProps<{
  questionStrList: QuestionStr[];
}>();
const answerValue = ref<number>(0);
const questionIndex = ref<number>(0);
const currentQuestion = ref<QuestionStr>();
const answerList = ref<AnswerItem[]>([])
watch(
  questionIndex,
  (v) => {
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
// const questionStr = computed(() => props.questionStrList[questionIndex.value].questionStr)
function selectHandle() {
  console.log(answerValue.value);
  const bool = answerValue.value === 1  
  const isAnswerTrue = bool === currentQuestion.value?.isTrue
  answerList.value.push({
    questionType: currentQuestion.value?.questionType,
    isAnswerTrue: isAnswerTrue,
    times: new Date().toLocaleString()
  })
  saveStore(answerList.value)
  questionIndex.value++;
  answerValue.value = 0;
}
function saveStore(question:AnswerItem[]){
  sessionStorage.setItem('question', JSON.stringify(question))
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
    /* padding: 0;
    margin: 0; */
  }
  .dialog-question .el-dialog__body {
    padding: 0 10px;
  }
</style>