<template>
  <div
    class="flex h-full w-full"
    :class="isGlobalColumn ? 'flex-col' : 'flex-row'"
  >
    <div class="flex !absolute right-0 top-0 opacity-0">
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
        class="bg-gradient-to-b from-blue-900 to-blue-800 flex gap-4 p-4 text-white"
        :class="!isGlobalColumn ? 'flex-col' : 'flex-row justify-center'"
      >
        <div
          v-for="item in menu1"
          :key="item.id"
          @click="firstMenuClick"
          class="w-32 font-bold min-w-max border border-blue-400 rounded-sm py-1 px-2"
        >
          {{ item.name }}
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div
        v-show="isShowSecondMenu"
        class="bg-blue-300 flex gap-4 p-4 text-black"
        :class="!isGlobalColumn ? 'flex-col' : 'flex-row justify-center'"
      >
        <div
          v-for="item in menu2Arr"
          :key="item.id"
          @click="secondMenuClick"
          class="w-32 font-bold min-w-max border border-blue-400  rounded-sm py-1 px-2"
        >
          {{ item.name }}
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div
        v-show="isShowThirdMenu"
        class="flex-1 bg-gray-300 flex gap-4 p-4 text-black"
        :class="thirdCenter"
      >
        <div
          v-for="item in menu3Arr"
          :key="item.id"
          class="flex items-center gap-4"
          :class="!isThirdColumn ? 'flex-row' : 'flex-col'"
        >
          <span class="font-bold w-32 border border-blue-400 rounded-sm py-1 px-2">{{
            item.name
          }}</span>
          <div
            class="flex gap-4"
            :class="!isThirdColumn ? 'flex-row' : 'flex-col'"
          >
            <div
              v-for="item in menu3ChildArr"
              :key="item.id"
              @click="selectClick"
              class="w-32  min-w-max border border-blue-400 rounded-sm py-1 px-2"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script lang="ts" setup>
import { Menu, menu1, menu2, menu3, menuChild, randomMenu } from "./params";
import {useMenu} from './menuHook'
const {
    menu2Arr,
    menu3Arr,
    menu3ChildArr,
    isHide,
    isGlobalColumn,
    isThirdColumn,
    isShowFirstMenu,
    isShowSecondMenu,
    isShowThirdMenu,
    thirdCenter,
    firstMenuClick,
    secondMenuClick,
    selectClick,
    refreshStatus
} = useMenu()
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
