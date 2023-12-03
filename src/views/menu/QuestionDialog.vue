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
    <div v-show="!isAnswerQuestionType3">
      <span v-html="showQuestionStr(currentQuestion?.questionStr)"></span>
      <div class="flex justify-center p-2">
        <el-radio-group v-model="answerValue">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="2">否</el-radio>
        </el-radio-group>
        <el-button
          :disabled="!answerValue"
          type="primary"
          class="ml-auto"
          @click="selectHandle"
        >
          确认
        </el-button>
      </div>
    </div>
    <div v-show="isAnswerQuestionType3">
      <span>{{ questionType3 }}</span>
      <div class="flex justify-center gap-10 p-2 ">
        <el-slider v-model="menuNum" />
        <span>{{ menuNum }}</span>
        <el-button
          :disabled="!menuNum"
          type="primary"
          class="ml-auto"
          @click="sliderHandle"
        >
          确认
        </el-button>
      </div>
    </div>
  </el-dialog>
</template>
<script lang="ts" setup>
import { computed, nextTick, onMounted, ref, watch } from "vue";
import { AnswerItem,MenuType,QuestionStr, QuestionType, vh } from "./questionHook";
const emit = defineEmits(["refreshMenu"]);
const props = defineProps<{
  /**当前菜单类型 */
  currentMenuTypeObj:MenuType;
  /**全局方向 */
  currentGlobDirection: vh;
  /** 问题类型*/
  currentType: QuestionType;
  /**问题列表 */
  questionStrList: QuestionStr[];
}>();
const questionType3 =
  "凭直觉快速判断该单页面显示中多少个英文单词（请移动滑块至估计值）";
const menuNum = ref(0);
const isAnswerQuestionType3 = ref(false);
const answerValue = ref<number>(0);
const questionIndex = ref<number>(0);
const currentQuestion = ref<QuestionStr>();
const answerList = ref<AnswerItem[]>([]);
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
function showQuestionStr(str: string | undefined) {
  if (str) {
    const mapStr = str.replace(/[A-Za-z]/g, (match) => {
      return `<span class="font-bold">${match}</span>`;
    });
    return mapStr;
  }
  return "";
}
/**
 * 选择答案
 */
function selectHandle() {
  endTime.value = Date.now();
  const times = (endTime.value - startTime.value) / 1000;
  const fixedTimes = times.toFixed(2);
  const bool = answerValue.value === 1;
  const isAnswerTrue = bool === currentQuestion.value?.isTrue;
  const answerItem = {
    currentMenuTypeObj: props.currentMenuTypeObj,
    questionType: currentQuestion.value?.questionType,
    isAnswerTrue: isAnswerTrue,
    times: fixedTimes,
  };
  answerList.value.push(answerItem);
  saveStore(answerItem);
  if (questionIndex.value === props.questionStrList.length - 1) {
    if (props.currentType === "type2" && !isAnswerQuestionType3.value) {
      isAnswerQuestionType3.value = true;
      startTime.value = Date.now();
      return;
    }
    emit("refreshMenu");
  } else {
    questionIndex.value++;
    answerValue.value = 0;
  }
}
/**问题三,菜单数量 */
function sliderHandle() {
  endTime.value = Date.now();
  const times = (endTime.value - startTime.value) / 1000;
  const fixedTimes = times.toFixed(2);
  const answerType3Obj: AnswerItem = {
    currentMenuTypeObj: props.currentMenuTypeObj,
    questionType: "type3",
    guessNum: menuNum.value,
    times: fixedTimes,
  };
  saveStore(answerType3Obj);
  emit("refreshMenu");
}
/**
 * 保存到storage中
 * @param answer 答案
 */
function saveStore(answer: AnswerItem) {
  //获取sessionStorage中已保存的数据
  const answerStr = sessionStorage.getItem("answer");
  if (answerStr) {
    const answerList = JSON.parse(answerStr);
    answerList.push(answer);
    sessionStorage.setItem("answer", JSON.stringify(answerList));
  } else {
    sessionStorage.setItem("answer", JSON.stringify([answer]));
  }
}
nextTick(() => {
  // 把弹窗父亲的父亲 dom 元素添加 pointer-events: none; 防止穿透
  const elDialog = document.getElementById("modelDialogRef");
  // @ts-ignore
  elDialog?.parentNode?.parentNode?.setAttribute(
    "style",
    "pointer-events: none;"
  );
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
