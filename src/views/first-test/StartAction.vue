<script setup lang="ts">
// const emit = defineEmits(["start-action"]);
// document.addEventListener("keyup", (e: KeyboardEvent) => {
//   console.log(
//     "🚀 ~ file: StartAction.vue:8 ~ document.addEventListener ~ e:",
//     e
//   );
//   if (e.key === "q") {
//     emit("start-action");
//   }
// });
</script>
<template>
  <div>
    <el-card
      class="w-96 h-72 flex flex-col justify-center items-center mb-4"
      shadow="always"
    >
      恭喜! 您已完成预实验。<br />
      现在您将看到20组熟悉的图形。<br />
      按下方按钮开始正式实验。<br />
    </el-card>
    <el-button type="primary" @click="$emit('start-action')">
      <el-icon><DArrowRight /></el-icon>
      Go
    </el-button>
  </div>
</template>
