<template>
  <div class="flex h-full w-full" :class="isGlobalColumn?'flex-col':'flex-row'">
    <div class="flex !absolute right-0 top-0">
      <el-switch
        v-model="isHide"
        @change="refreshStatus"
        inline-prompt
        active-text="隐藏"
        inactive-text="展示"
      />
      <el-switch
        v-model="isThirdColumn"
        inline-prompt
        active-text="三级横向"
        inactive-text="三级竖向"
      />
      <el-switch
        v-model="isGlobalColumn"
        inline-prompt
        active-text="横向"
        inactive-text="竖向"
      />
    </div>
    <transition name="fade">
      <div
        v-show="isShowFirstMenu"
        class="bg-blue-950 flex  gap-4 p-4 text-white"
        :class="!isGlobalColumn ? 'flex-col' : 'flex-row justify-center'"
      >
        <div
          v-for="item in menu1"
          :key="item.id"
          @click="firstMenuClick"
          class="font-bold"
        >
          {{ item.name }}
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div
        v-show="isShowSecondMenu"
        class="bg-stone-300 flex gap-4 p-4 text-black"
        :class="!isGlobalColumn ? 'flex-col' : 'flex-row justify-center'"
      >
        <div
          v-for="item in menu2"
          :key="item.id"
          @click="secondMenuClick"
          class="font-bold"
        >
          {{ item.name }}
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div
        v-show="isShowThirdMenu"
        class="flex-1 bg-white flex  gap-4 p-4 text-black"
        :class="thirdCenter"
      >
        <div
          v-for="item in menu3"
          :key="item.id"
          class="flex items-center gap-4 "
          :class="!isThirdColumn ? 'flex-row' : 'flex-col'"
        >
          <span class="font-bold">{{ item.name }}</span>
          <div class="flex gap-4" :class="!isThirdColumn ? 'flex-row' : 'flex-col'">
            <div v-for="item in menuChild" :key="item.id" @click="selectClick">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script lang="ts" setup>
import { ElMessageBox } from "element-plus";
import { computed, ref } from "vue";
import { menu1, menu2, menu3, menuChild } from "./params";
const isHide = ref(false); // 展开下级菜单,隐藏上级菜单
const isGlobalColumn = ref(false);// 菜单全局方向
const isThirdColumn = ref(false); // 三级菜单方向
const isShowFirstMenu = ref(true);
const isShowSecondMenu = ref(false);
const isShowThirdMenu = ref(false);
const thirdCenter = computed(()=>{
  if (isThirdColumn.value) {
    return 'flex-row ' + `${isGlobalColumn.value ? 'justify-center':'justify-start'}`
  } else {
    return 'flex-col '+ `${isGlobalColumn.value ? 'items-center':'items-start'}`
    
  } 
})

const initTime = new Date(); // 初始时间

//一级菜单
const firstMenuClick = () => {
  console.log("一级菜单点击");
  if (isHide.value) {
    isShowFirstMenu.value = false;
  }
  isShowSecondMenu.value = true;
  // isShowSecondMenu.value =!isShowSecondMenu.value
};

// 二级菜单
const secondMenuClick = () => {
  if (isHide.value) {
    isShowFirstMenu.value = false;
    isShowSecondMenu.value = false;
  }
  isShowThirdMenu.value = true;
};

//选中
const selectClick = () => {
  console.log("选中");
  const nowTime = new Date();
  const countTime = (nowTime.getTime() - initTime.getTime()) / 1000;
  ElMessageBox.alert(`用时: ${countTime}秒`, "提示", {
    confirmButtonText: "确定",
    callback: () => {
      refreshStatus();
    },
  });
};
//重置刷新
const refreshStatus = () => {
  isShowFirstMenu.value = true;
  isShowSecondMenu.value = false;
  isShowThirdMenu.value = false;
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
