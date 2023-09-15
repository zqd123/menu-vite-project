<script setup lang="ts">
import { FormInstance, FormRules } from "element-plus";
import { reactive, ref } from "vue";
import { useExperimentStore } from "../../store/experiment";
const emit = defineEmits(["ok"]);
const props = defineProps(["secondCount"]);
const experimentStore = useExperimentStore();
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  radio1: undefined,
  radio2: undefined,
});
const rules = reactive<FormRules>({
  radio1: [{ required: true, message: "请选择", trigger: "change" }],
  radio2: [{ required: true, message: "请选择", trigger: "change" }],
});
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      experimentStore.checkQuestion.push({
        name: sessionStorage.getItem("userName") ?? "",
        question1: ruleForm.radio1 ?? 0,
        question2: ruleForm.radio2 ?? 0,
        secondCount: props.secondCount,
      });
      emit("ok");
    } else {
      console.log("error submit!", fields);
    }
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
      label-position="top"
    >
      <el-form-item label="问题一: 感知选择过载" prop="radio1">
        <el-radio-group
          v-model="ruleForm.radio1"
          class="flex flex-col !items-start"
        >
          <el-radio :label="1" size="large"
            >1.“有太多不同的选择需要考虑”</el-radio
          >
          <el-radio :label="2" size="large"
            >2.“这个决定需要大量的思考”</el-radio
          >
          <el-radio :label="3" size="large">3.“这是一个艰难的决定”</el-radio>
          <el-radio :label="4" size="large"
            >4.“我发现这个决定让人不知所措”</el-radio
          >
          <el-radio :label="5" size="large"
            >5.“我很难理解所有可用的信息”</el-radio
          >
          <el-radio :label="6" size="large">6.“任务很有压力”</el-radio>
          <el-radio :label="7" size="large"
            >7.“做出决定让我松了一口气”</el-radio
          >
        </el-radio-group>
      </el-form-item>
      <el-form-item label="问题二: 决策信心" prop="radio2">
        <el-radio-group
          v-model="ruleForm.radio2"
          class="flex flex-col !items-start"
        >
          <el-radio :label="1" size="large"
            >1.“我 100%相信我的选择在客观上比课程网站上的其他选择好”</el-radio
          >
          <el-radio :label="2" size="large"
            >2.“我不确定我的选择是否客观上比其他选择好”</el-radio
          >
          <el-radio :label="3" size="large"
            >3.“我确信我的选择是我能做出的最好的选择”</el-radio
          >
          <el-radio :label="4" size="large"
            >4.“不管我对我的选择有什么个人感受，很明显我的选择在客观上优于网站上的其他课程选择”</el-radio
          >
          <el-radio :label="5" size="large"
            >5.“即使我的朋友可能不同意，我的选择也是最好的选择”</el-radio
          >
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          确 定
        </el-button>
      </el-form-item>
    </el-form>
    <!-- <div>
      <div class="flex justify-start">问题一:感知选择过载</div>
      <el-radio-group
        v-model="radio1"
        class="flex flex-col !items-start"
        @change="radioChange"
      >
        <el-radio :label="1" size="large"
          >1.“有太多不同的选择需要考虑”</el-radio
        >
        <el-radio :label="2" size="large">2.“这个决定需要大量的思考”</el-radio>
        <el-radio :label="3" size="large">3.“这是一个艰难的决定”</el-radio>
        <el-radio :label="4" size="large"
          >4.“我发现这个决定让人不知所措”</el-radio
        >
        <el-radio :label="5" size="large"
          >5.“我很难理解所有可用的信息”</el-radio
        >
        <el-radio :label="6" size="large">6.“任务很有压力”</el-radio>
        <el-radio :label="7" size="large">7.“做出决定让我松了一口气”</el-radio>
      </el-radio-group>
    </div>

    <div>
      <div class="flex justify-start">问题二:决策信心</div>
      <el-radio-group
        v-model="radio2"
        class="flex flex-col !items-start"
        @change="radioChange"
      >
        <el-radio :label="1" size="large"
          >1.“我 100%相信我的选择在客观上比课程网站上的其他选择好”</el-radio
        >
        <el-radio :label="2" size="large"
          >2.“我不确定我的选择是否客观上比其他选择好”</el-radio
        >
        <el-radio :label="3" size="large"
          >3.“我确信我的选择是我能做出的最好的选择”</el-radio
        >
        <el-radio :label="4" size="large"
          >4.“不管我对我的选择有什么个人感受，很明显我的选择在客观上优于网站上的其他课程选择”</el-radio
        >
        <el-radio :label="5" size="large"
          >5.“即使我的朋友可能不同意，我的选择也是最好的选择”</el-radio
        >
      </el-radio-group>
    </div> -->
  </div>
</template>
<style scoped></style>
