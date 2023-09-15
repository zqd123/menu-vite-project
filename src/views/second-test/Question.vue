<script setup lang="ts">
import axios from "axios";
import { ElMessage, ElMessageBox, FormInstance, FormRules } from "element-plus";
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";
import router from "../../router";
import { CheckQuestion, useExperimentStore } from "../../store/experiment";
const emit = defineEmits(["ok"]);
const route = useRoute();
const props = defineProps<{
  secondCount: number;
}>();
const experimentStore = useExperimentStore();
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  radio1_1: undefined,
  radio1_2: undefined,
  radio1_3: undefined,
  radio1_4: undefined,
  radio1_5: undefined,
  radio1_6: undefined,
  radio1_7: undefined,
  radio2_1: undefined,
  radio2_2: undefined,
  radio2_3: undefined,
  radio2_4: undefined,
  radio2_5: undefined,
});
const rules = reactive<FormRules>({
  radio1_1: [{ required: true, message: "请选择", trigger: "change" }],
  radio1_2: [{ required: true, message: "请选择", trigger: "change" }],
  radio1_3: [{ required: true, message: "请选择", trigger: "change" }],
  radio1_4: [{ required: true, message: "请选择", trigger: "change" }],
  radio1_5: [{ required: true, message: "请选择", trigger: "change" }],
  radio1_6: [{ required: true, message: "请选择", trigger: "change" }],
  radio1_7: [{ required: true, message: "请选择", trigger: "change" }],
  radio2_1: [{ required: true, message: "请选择", trigger: "change" }],
  radio2_2: [{ required: true, message: "请选择", trigger: "change" }],
  radio2_3: [{ required: true, message: "请选择", trigger: "change" }],
  radio2_4: [{ required: true, message: "请选择", trigger: "change" }],
  radio2_5: [{ required: true, message: "请选择", trigger: "change" }],
});
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      for (const [key, value] of Object.entries(ruleForm)) {
        if (!value) {
          ElMessage.error("请为每一项做出选择！");
          return;
        }
      }
      experimentStore.radiosData = {
        name: sessionStorage.getItem("userName") ?? "",
        radio1_1: ruleForm.radio1_1,
        radio1_2: ruleForm.radio1_2,
        radio1_3: ruleForm.radio1_3,
        radio1_4: ruleForm.radio1_4,
        radio1_5: ruleForm.radio1_5,
        radio1_6: ruleForm.radio1_6,
        radio1_7: ruleForm.radio1_7,
        radio2_1: ruleForm.radio2_1,
        radio2_2: ruleForm.radio2_2,
        radio2_3: ruleForm.radio2_3,
        radio2_4: ruleForm.radio2_4,
        radio2_5: ruleForm.radio2_5,
        secondCount: props.secondCount,
      };
      saveTableData();
    } else {
      console.log("error submit!", fields);
    }
  });
};
// sessionStorage.removeItem("userName");
const saveLoading = ref(false);
const tableData = ref<CheckQuestion[]>([]);
console.log(tableData.value);
/**保存上传数据 */
const saveTableData = () => {
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
  const obj = tableData.value[0];
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
          emit("ok");
        },
      });
    })
    .catch((e) => {
      saveLoading.value = false;
      ElMessageBox.alert("保存失败", "提示", {
        confirmButtonText: "确定",
      });
    });
};
</script>
<template>
  <div class="flex flex-col justify-start items-start">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      status-icon
      label-position="right"
    >
      <div class="flex justify-start font-bold">
        问题一：感知选择过载7分量表 最轻负荷1分—最重负荷7分
      </div>
      <el-form-item label="1.“有太多不同的选择需要考虑”" prop="radio1_1">
        <el-rate
          v-model="ruleForm.radio1_1"
          :max="7"
          show-text
          :texts="['1分', '2分', '3分', '4分', '5分', '6分', '7分']"
        />
      </el-form-item>
      <el-form-item label="2.“这个决定需要大量的思考”" prop="radio1_2">
        <el-rate
          v-model="ruleForm.radio1_2"
          :max="7"
          show-text
          :texts="['1分', '2分', '3分', '4分', '5分', '6分', '7分']"
        />
      </el-form-item>
      <el-form-item label="3.“这是一个艰难的决定”" prop="radio1_3">
        <el-rate
          v-model="ruleForm.radio1_3"
          :max="7"
          show-text
          :texts="['1分', '2分', '3分', '4分', '5分', '6分', '7分']"
        />
      </el-form-item>
      <el-form-item label="4.“我发现这个决定太难了”" prop="radio1_4">
        <el-rate
          v-model="ruleForm.radio1_4"
          :max="7"
          show-text
          :texts="['1分', '2分', '3分', '4分', '5分', '6分', '7分']"
        />
      </el-form-item>
      <el-form-item label="5.“我很难理解所有可用的信息”" prop="radio1_5">
        <el-rate
          v-model="ruleForm.radio1_5"
          :max="7"
          show-text
          :texts="['1分', '2分', '3分', '4分', '5分', '6分', '7分']"
        />
      </el-form-item>
      <el-form-item label="6.“任务很有压力”" prop="radio1_6">
        <el-rate
          v-model="ruleForm.radio1_6"
          :max="7"
          show-text
          :texts="['1分', '2分', '3分', '4分', '5分', '6分', '7分']"
        />
      </el-form-item>
      <el-form-item
        label="7.“做出决定让我松了一口气”"
        prop="radio1_7"
        show-text
        :texts="['1分', '2分', '3分', '4分', '5分', '6分', '7分']"
      >
        <el-rate
          v-model="ruleForm.radio1_7"
          :max="7"
          show-text
          :texts="['1分', '2分', '3分', '4分', '5分', '6分', '7分']"
        />
      </el-form-item>

      <div class="flex justify-start font-bold">
        问题二：决策信心7分量表 最无信心1分—最有信心7分
      </div>
      <el-form-item
        label="1.“我100%相信我的选择在客观上比课程网站上的其他选择好”"
        prop="radio2_1"
      >
        <el-rate
          v-model="ruleForm.radio2_1"
          :max="7"
          show-text
          :texts="['1分', '2分', '3分', '4分', '5分', '6分', '7分']"
          clearable
        />
      </el-form-item>
      <el-form-item
        label="2.“我不确定我的选择是否客观上比其他选择好”"
        prop="radio2_2"
      >
        <el-rate
          v-model="ruleForm.radio2_2"
          :max="7"
          show-text
          :texts="['1分', '2分', '3分', '4分', '5分', '6分', '7分']"
        />
      </el-form-item>
      <el-form-item
        label="3.“我确信我的选择是我能做出的最好的选择”"
        prop="radio2_3"
      >
        <el-rate
          v-model="ruleForm.radio2_3"
          :max="7"
          show-text
          :texts="['1分', '2分', '3分', '4分', '5分', '6分', '7分']"
        />
      </el-form-item>
      <el-form-item
        label="4.“不管我个人对我的选择有什么个人感受，很明显我的选择在客观上优于网站上的其他课程选择”"
        prop="radio2_4"
      >
        <el-rate
          v-model="ruleForm.radio2_4"
          :max="7"
          show-text
          :texts="['1分', '2分', '3分', '4分', '5分', '6分', '7分']"
        />
      </el-form-item>
      <el-form-item
        label="5.“即使我的朋友可能不同意，我的选择也是最好的选择”"
        prop="radio2_5"
      >
        <el-rate
          v-model="ruleForm.radio2_5"
          :max="7"
          show-text
          :texts="['1分', '2分', '3分', '4分', '5分', '6分', '7分']"
        />
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          :loading="saveLoading"
          @click="submitForm(ruleFormRef)"
        >
          保 存
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style scoped></style>
