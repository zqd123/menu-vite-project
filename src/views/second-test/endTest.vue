<script setup lang="ts">
import { Refresh } from "@element-plus/icons-vue";
import {
  useExperimentStore,
  Radios,
  CheckQuestion,
} from "../../store/experiment";
import axios from "axios";
import { ElMessageBox } from "element-plus";
import router from "../../router";
import { useRoute } from "vue-router";
import { ref } from "vue";
const route = useRoute();
const experimentStore = useExperimentStore();
// sessionStorage.removeItem("userName");
const saveLoading = ref(false);

const tableData = ref<CheckQuestion[]>([]);
const radioObj = experimentStore.radiosData;
tableData.value.push({
  name: radioObj.name,
  question1: [
    radioObj.radio1_1,
    radioObj.radio1_2,
    radioObj.radio1_3,
    radioObj.radio1_4,
    radioObj.radio1_5,
    radioObj.radio1_6,
    radioObj.radio1_7,
  ].join(","),
  question2: [
    radioObj.radio2_1,
    radioObj.radio2_2,
    radioObj.radio2_3,
    radioObj.radio2_4,
    radioObj.radio2_5,
  ].join(","),
  secondCount: radioObj.secondCount,
});
console.log(tableData.value);
/**保存上传数据 */
const saveTableData = () => {
  const obj = tableData.value[0];
  // axios.post("http://127.0.0.1:5173/api/add_user", {
  //   ...obj,
  // });
  saveLoading.value = true;
  axios
    .post("https://zhangqd.mynatapp.cc/add_user", {
      ...obj,
    })
    .then((res) => {
      saveLoading.value = false;
      ElMessageBox.alert(res.data.data.message ?? "保存成功", "提示", {
        confirmButtonText: "确定",
        callback: () => {
          experimentStore.checkQuestion = [];
          router.push({ path: "/seconde/test2", query: route.query });
        },
      });
    })
    .catch((e) => {
      ElMessageBox.alert("保存失败", "提示", {
        confirmButtonText: "确定",
      });
    });
};
</script>
<template>
  <div class="flex flex-col justify-center items-center">
    <div>感谢您的合作!</div>
    <div>
      <div class="flex justify-between pb-2">
        <div class="flex items-center gap-2">
          <!-- <span>姓名：{{ experimentStore.userInfo.studyName }}</span> -->
        </div>
        <el-button
          type="success"
          :loading="saveLoading"
          @click.once="saveTableData"
        >
          <span class="pl-1">保存数据</span>
        </el-button>
      </div>
      <el-table
        :data="tableData"
        max-height="60vh"
        style="width: 60vw"
        :border="true"
        center
      >
        <el-table-column type="index" label="序号" width="100">
        </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="question1" label="第一个问题"> </el-table-column>
        <el-table-column prop="question2" label="第二个问题"> </el-table-column>
        <el-table-column prop="secondCount" label="用时（s）">
        </el-table-column>
      </el-table>
    </div>

    <!-- <div class="fixed right-2 bottom-2" @click="$router.go(0)">
      <el-button type="primary" :icon="Refresh" size="small"
        >重新开始</el-button
      >
    </div> -->
  </div>
</template>
