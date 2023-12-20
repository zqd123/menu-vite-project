<script lang="ts" setup>
import { reactive, ref } from "vue";
import router from "../../router";
import type { FormInstance, FormRules } from "element-plus";
import { useExperimentStore } from "../../store/experiment";
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
      router.push({
        name: "menu-test",
        params: { globDirection: "row", type: "type1" },
      });
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>
<template>
  <div class="w-full flex justify-center items-center">
    <el-card
      class="w-96 h-72 flex justify-center items-center"
      body-class="flex"
      shadow="always"
      body-style="display: flex; flex-direction:column; justify-content: center; align-items: center"
    >
      <el-icon color="#409EFC" :size="50" class="mb-8"><Opportunity /></el-icon>
      <el-form
        @submit.native.enter="submitForm(ruleFormRef)"
        ref="ruleFormRef"
        :rules="rules"
        :label-position="labelPosition"
        :model="formLabelAlign"
        @submit.prevent
        class="flex flex-col justify-center items-center"
      >
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
        本实验为导航搜索任务，请根据随后出现的页面中的问题，在导航栏中进行单词的关联关系搜索，并回答问题。
      </el-form>
    </el-card>
  </div>
</template>

<style scoped></style>
