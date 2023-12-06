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
    <div class="flex flex-col justify-center">
      <el-button type="primary" @click="exportExcel"> 导出数据 </el-button>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="index" label="序号" width="60" />
        <el-table-column prop="questionType" label="任务" width="180" />
        <el-table-column prop="type" label="题目类型" width="280" />
        <el-table-column prop="answerValue" label="回答正确" width="180" />
        <el-table-column prop="guessNum" label="估计菜单数量" />
        <el-table-column prop="time" label="用时(s)" />
      </el-table>
    </div>
  </el-dialog>
</template>
<script lang="ts" setup>
import { computed, nextTick, onMounted, ref, watch } from "vue";
import { AnswerItem, QuestionStr, QuestionType } from "./questionHook";
import { useMenu } from "./menuHook";
const { goLogin } = useMenu();
interface TableObj {
  index?: number;
  questionType:string,
  type: string;
  answerValue: boolean | string;
  guessNum: number | string;
  time: string;
}
onMounted(()=>{
  const answerDataStr = sessionStorage.getItem("answer")!;
  const answerData = JSON.parse(answerDataStr) as AnswerItem[];
  tableData.value = mappingAnswerData(answerData);
})
const tableData = ref<TableObj[]>([]);
function exportExcel() {
  const answerDataStr = sessionStorage.getItem("answer")!;
  const answerData = JSON.parse(answerDataStr) as AnswerItem[];
  console.log(
    "🚀 ~ file: ExportDialog.vue:35 ~ exportExcel ~ answerData:",
    answerData
  );
  tableData.value = mappingAnswerData(answerData);
  console.log(
    "🚀 ~ file: ExportDialog.vue:39 ~ exportExcel ~ mapData:",
    tableData.value
  );

  const excelHeader = `序号,任务,题目类型,回答正确,估计菜单数量,用时(s)\n`
  download(excelHeader,tableData.value)
}

/**下载方法 */
const download = (str: string, data: TableObj[]) => {
  // 增加\t为了不让表格显示科学计数法或者其他格式
  for (let i = 0; i < data.length; i++) {
    for (const key in data[i]) {
        str += `${data[i][key as keyof TableObj] + "\t"},`;
    }
    str += "\n";
  }
  // encodeURIComponent解决中文乱码
  const uri = "data:text/csv;charset=utf-8,\ufeff" + encodeURIComponent(str);
  // 通过创建a标签实现
  const link = document.createElement("a");
  link.href = uri;
  // 对下载的文件命名
  link.download = sessionStorage.userName ?? "export" + ".csv";
  link.click();
};

/**
 * 映射菜单数据
 * @param answerData 原始数据
 */
function mappingAnswerData(answerData: AnswerItem[]) {
  const answerDataMap = answerData.map((item, index) => {
    const { globDirection, isFirstShow, thirdDirection, num } =
      item.currentMenuTypeObj;
    const answerItem: TableObj = {
      index:index + 1,
      questionType:item.questionType === 'type1' ? '任务1': item.questionType === 'type2' ? '任务2':'任务3', 
      type: `${globDirection === 'row' ? '横向':'纵向'}-${isFirstShow ? '1级隐藏':'1级展示'}-${thirdDirection === 'row' ? '3级横向':'3级纵向'}-菜单数${num}`,
      answerValue: item.isAnswerTrue === true ? '正确':item.isAnswerTrue === false ? '错误':'',
      guessNum: item.guessNum ?? '',
      time: item.times ?? "",
    };
    return answerItem;
  });
  return answerDataMap;
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
