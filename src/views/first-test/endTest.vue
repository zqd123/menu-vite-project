<script setup lang="ts">
import { Download, Refresh } from "@element-plus/icons-vue";
import { Experiment, useExperimentStore } from "../../store/experiment";

const experimentStore = useExperimentStore();
sessionStorage.removeItem("userName");
experimentStore.userInfo.experimentData = experimentStore.experimentData;
experimentStore.saveStoreLocal();
/**导出表格 */
const exportTable = () => {
  console.log("导出数据");
  download(
    "首次点击用时,选择正确用时,错误次数\n",
    experimentStore.experimentData
  );
};
/**下载方法 */
const download = (str: string, data: Experiment[]) => {
  // 增加\t为了不让表格显示科学计数法或者其他格式
  for (let i = 0; i < data.length; i++) {
    for (const key in data[i]) {
      str += `${data[i][key as keyof Experiment] + "\t"},`;
    }
    str += "\n";
  }
  // encodeURIComponent解决中文乱码
  const uri = "data:text/csv;charset=utf-8,\ufeff" + encodeURIComponent(str);
  // 通过创建a标签实现
  const link = document.createElement("a");
  link.href = uri;
  // 对下载的文件命名
  link.download =
    experimentStore.userInfo.studyName +
    experimentStore.userInfo.studyCode +
    ".csv";
  link.click();
};
</script>
<template>
  <div class="flex flex-col justify-center items-center">
    <div>恭喜! 你已经完成了匹配任务</div>
    <div>
      <div class="flex justify-between pb-2">
        <div class="flex items-center gap-2">
          <!-- <span>学号：{{ experimentStore.userInfo.studyCode }}</span> -->
          <span>姓名：{{ experimentStore.userInfo.studyName }}</span>
        </div>
        <el-button type="primary" @click="exportTable">
          <el-icon><Download /></el-icon>
          <span class="pl-1">导出数据</span>
        </el-button>
      </div>
      <el-table
        :data="experimentStore.experimentData"
        max-height="60vh"
        style="width: 60vw"
        :border="true"
        center
      >
        <el-table-column type="index" label="序号" width="100">
        </el-table-column>
        <el-table-column prop="selectFirstTime" label="首次点击用时(秒)">
        </el-table-column>
        <el-table-column prop="selectTrueTimes" label="选择正确用时(秒)">
        </el-table-column>
        <el-table-column prop="errorSelectSum" label="错误次数">
        </el-table-column>
      </el-table>
    </div>

    <div class="fixed right-2 bottom-2" @click="$router.go(0)">
      <el-button type="primary" :icon="Refresh" size="small"
        >重新开始</el-button
      >
    </div>
  </div>
</template>
