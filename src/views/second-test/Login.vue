<script lang="ts" setup>
import { reactive, ref } from "vue";
import router from "../../router";
import type { FormInstance, FormRules } from "element-plus";
import { useExperimentStore } from "../../store/experiment";
import { useRoute } from "vue-router";
const route = useRoute();
const experimentStore = useExperimentStore();
const labelPosition = ref("right");
const ruleFormRef = ref<FormInstance>();
const formLabelAlign = reactive({
  studyName: "",
});
const rules = reactive<FormRules>({
  studyName: [{ required: true, message: "请输入姓名", trigger: "blur" }],
});
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      sessionStorage.setItem("userName", formLabelAlign.studyName);
      experimentStore.userInfo = formLabelAlign;
      router.push({ path: "/seconde/guidance", query: route.query });
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>
<template>
  <div>
    <el-card class="w-96 h-72 flex justify-center items-center" shadow="always">
      <el-icon color="#409EFC" :size="50" class="mb-8"><Apple /></el-icon>
      <el-form
        ref="ruleFormRef"
        :rules="rules"
        :label-position="labelPosition"
        :model="formLabelAlign"
      >
        <div class="text-red-500">请输入和实验一相同名字</div>
        <el-form-item label="姓名" prop="studyName">
          <el-input v-model="formLabelAlign.studyName" />
        </el-form-item>
        <el-button
          type="primary"
          size="default"
          @click="submitForm(ruleFormRef)"
          ><el-icon style="margin-right: 8px"><CaretRight /></el-icon>
          确认</el-button
        >
      </el-form>
    </el-card>
  </div>
</template>

<style scoped></style>
