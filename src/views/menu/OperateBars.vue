<template>
    <div class="flex !absolute right-0 top-0">
      <el-switch
        v-model="isHide"
        @change="refreshStatus"
        inline-prompt
        active-text="隐藏"
        inactive-text="展示"
      />
      <el-switch
        v-model="_isThirdColumn"
        @change="changeThirdColumn"
        inline-prompt
        active-text="三级横向"
        inactive-text="三级竖向"
      />
      <el-switch
        v-model="_isGlobalColumn"
        @change="changeColumn"
        inline-prompt
        active-text="横向"
        inactive-text="竖向"
      />
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const emit = defineEmits(["update:isGlobalColumn","update:isThirdColumn"]);
const props = defineProps({
  isGlobalColumn:{
    type:Boolean,
    default:false
  },
  isThirdColumn:{
    type:Boolean,
    default:false
  }
})
 const isHide = ref(false); // 展开下级菜单,隐藏上级菜单
  const _isGlobalColumn = ref(props.isGlobalColumn); // 菜单全局方向
  const _isThirdColumn = ref(false); // 三级菜单方向
  const isShowFirstMenu = ref(true);
  const isShowSecondMenu = ref(false);
  const isShowThirdMenu = ref(false);

  function changeColumn() {
    emit('update:isGlobalColumn', _isGlobalColumn.value)
  }
  function changeThirdColumn() {
    emit('update:isThirdColumn', _isThirdColumn.value)
  }
  //重置刷新
  const refreshStatus = () => {
    isShowFirstMenu.value = true;
    isShowSecondMenu.value = false;
    isShowThirdMenu.value = false;
  };
</script>
