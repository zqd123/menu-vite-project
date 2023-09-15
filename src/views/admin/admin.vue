<script setup lang="ts">
import axios from "axios";
import { ElMessage, ElMessageBox } from "element-plus";
import { ref } from "vue";
import { CheckQuestion, useExperimentStore } from "../../store/experiment";
const experimentStore = useExperimentStore();
const tableData = ref();
const loading = ref(false);
const getTableData = () => {
  loading.value = true;
  axios
    .get("https://zhangqd.mynatapp.cc/get_user")
    .then((res) => {
      loading.value = false;
      console.log("value", res.data);
      tableData.value = res.data.data;
      ElMessage.success("获取数据成功");
    })
    .catch((e) => {
      ElMessage.error("获取数据失败，请重试！");
    });
};
getTableData();
/**导出表格 */
const exportTable = () => {
  console.log("导出数据");
  download(
    "id,姓名,问题,项1,项2,项3,项4,项5,项6,项7,问题,项1,项2,项3,项4,项5,用时（s）\n",
    tableData.value
  );
};
/**下载方法 */
const download = (str: string, data: CheckQuestion[]) => {
  // 增加\t为了不让表格显示科学计数法或者其他格式
  for (let i = 0; i < data.length; i++) {
    for (const key in data[i]) {
      if (key === "question1") {
        str += "问题一" + "\t,";
        str += data[i].question1
          .split(",")
          .reduce((total, item) => (total += item + "\t,"), "");
      } else if (key === "question2") {
        str += "问题二" + "\t,";
        str += data[i].question2
          .split(",")
          .reduce((total, item) => (total += item + "\t,"), "");
      } else {
        str += `${data[i][key as keyof CheckQuestion] + "\t"},`;
      }
    }
    str += "\n";
  }
  // encodeURIComponent解决中文乱码
  const uri = "data:text/csv;charset=utf-8,\ufeff" + encodeURIComponent(str);
  // 通过创建a标签实现
  const link = document.createElement("a");
  link.href = uri;
  // 对下载的文件命名
  link.download = experimentStore.userInfo.studyName ?? "export" + ".csv";
  link.click();
};
</script>
<template>
  <div v-loading="loading">
    <div class="m-2 flex justify-between">
      <el-button type="success" @click="getTableData">
        <el-icon><Check /></el-icon>
        <span class="pl-1">获取数据</span>
      </el-button>
      <el-button type="primary" @click="exportTable">
        <el-icon><Download /></el-icon>
        <span class="pl-1">导出数据</span>
      </el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :border="true"
      max-height="80vh"
    >
      <!-- <el-table-column type="index" label="序号" width="80" /> -->
      <el-table-column prop="id" label="id" />
      <el-table-column prop="name" label="姓名" width="150" />
      <el-table-column prop="question1" label="问题一" width="150" />
      <el-table-column prop="question2" label="问题二" width="150" />
      <el-table-column prop="secondCount" label="用时(s)" width="150" />
    </el-table>
  </div>
</template>
