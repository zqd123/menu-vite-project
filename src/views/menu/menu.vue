<template>
  <div class="flex h-full w-full">
    <el-switch
    class="!absolute right-0 top-0"
    v-model="isHide"
    @change="refreshStatus"
    inline-prompt
    active-text="隐藏"
    inactive-text="展示"
  />
    <transition name="fade">
      <div v-show="isShowFirstMenu" class="bg-blue-950 flex flex-col gap-4 p-4 text-white">
        <div v-for="item in menu1" :key="item.id" @click="firstMenuClick">
          {{ item.name }}
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div v-show="isShowSecondMenu" class="bg-stone-300 flex flex-col gap-4 p-4 text-black">
        <div v-for="item in menu2" :key="item.id" @click="secondMenuClick" >
          {{ item.name }}
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div v-show="isShowThirdMenu" class="flex-1 bg-white flex flex-col gap-4 p-4 text-black">
        <div v-for="item in menu3" :key="item.id" class="flex items-center gap-4">
          <span>{{ item.name }}</span>
          <div class="flex gap-4">
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
import { ref } from "vue";
import { menu1, menu2, menu3, menuChild } from "./params";
const isHide = ref(true)// 展开下级菜单,隐藏上级菜单
const isShowFirstMenu = ref(true)
const isShowSecondMenu = ref(false)
const isShowThirdMenu = ref(false)

const initTime = new Date();// 初始时间

//一级菜单
const firstMenuClick = ()=>{
  console.log('一级菜单点击');
  if(isHide.value){
    isShowFirstMenu.value = false
  }
  isShowSecondMenu.value =true
  // isShowSecondMenu.value =!isShowSecondMenu.value
}

// 二级菜单
const secondMenuClick = ()=>{
  if(isHide.value){
    isShowFirstMenu.value = false
    isShowSecondMenu.value = false
  }
  isShowThirdMenu.value = true
}

//选中
const selectClick = ()=>{
  console.log('选中');
  const nowTime = new Date();
  const countTime = (nowTime.getTime() - initTime.getTime())/1000
  ElMessageBox.alert(`用时: ${countTime}秒`, '提示', {
    confirmButtonText: '确定',
    callback:()=>{
      refreshStatus()
    }
  })
  
}
//重置刷新
const refreshStatus = ()=>{
  isShowFirstMenu.value = true
  isShowSecondMenu.value =false
  isShowThirdMenu.value = false
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>