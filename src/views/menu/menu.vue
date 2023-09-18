<template>
  <div class="flex h-full w-full">
    <div v-show="isShowFirstMenu" class="bg-blue-950 flex flex-col gap-4 p-4 text-white">
      <div v-for="item in menu1" :key="item.id" @click="firstMenuClick">
        {{ item.name }}
      </div>
    </div>
    
    <div v-show="isShowSecondMenu" class="bg-stone-300 flex flex-col gap-4 p-4 text-black">
      <div v-for="item in menu2" :key="item.id" @click="secondMenuClick" >
        {{ item.name }}
      </div>
    </div>
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
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { menu1, menu2, menu3, menuChild } from "./params";
const isHide = ref(false)// 展开下级菜单,隐藏上级菜单
const isShowFirstMenu = ref(true)
const isShowSecondMenu = ref(false)
const isShowThirdMenu = ref(false)
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
  
}
</script>
