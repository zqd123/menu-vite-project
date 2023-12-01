<template>
    <el-dialog model-value :modal="false" title="问题" width="80%" draggable top="80vh">
    <span>{{ questionStr }}</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="selectHandle">Cancel</el-button>
        <el-button type="primary" @click="selectHandle">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import {QuestionStr} from './questionHook'
const props = defineProps<{
    questionStrList: QuestionStr[]
}>()
const questionStr = props.questionStrList[0].questionStr
function selectHandle(v:number){
    console.log(v);
    
}
</script>
