<template>
  <!-- <OperateBars
    v-model:isGlobalColumn="isGlobalColumn"
    v-model:isThirdColumn="isThirdColumn"
    v-model:isHide="isHide"
  ></OperateBars> -->
  <div
    class="flex h-full w-full"
    :class="isGlobalColumn ? 'flex-col' : 'flex-row'"
  >
    <transition name="fade">
      <div
        v-show="isShowFirstMenu"
        class="bg-[#324868] flex gap-1 text-white border-solid border-[#e4e4e4]"
        :class="!isGlobalColumn ? 'flex-col border-r' : 'flex-row justify-center border-b'"
      >
        <div
          v-for="item in menuLevel1"
          :key="item.menuId"
          @click="firstMenuClick(item)"
          class="w-32 font-bold min-w-max rounded-sm py-2 px-2"
        >
          {{ item.menuName }}
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div
        class="bg-[#e2e0df] flex gap-1 text-black border-solid border-[#e4e4e4]"
        :class="!isGlobalColumn ? 'flex-col border-r' : 'flex-row justify-center border-b'"
      >
        <div
          v-for="item in menuLevel2"
          :key="item.menuId"
          @click="secondMenuClick(item)"
          class="w-32 font-bold min-w-max rounded-sm py-2 px-2"
        >
          {{ item.menuName }}
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div
        v-show="isShowThirdMenu"
        class="flex-1 bg-[#ffffff] flex gap-1 text-black overflow-auto"
        :class="thirdCenter"
      >
        <div
          v-for="parent in menuLevel3"
          :key="parent.menuId"
          class="flex items-center gap-1 "
          :class="!isThirdColumn ? 'flex-row' : 'flex-col'"
        >
          <span class="font-bold w-32 rounded-sm py-2 px-2">{{
            parent.menuName
          }}</span>
          <div
            class="flex gap-1"
            :class="!isThirdColumn ? 'flex-row' : 'flex-col'"
          >
            <div
              v-for="child in parent.children"
              :key="child.menuId"
              @click="selectClick(child)"
              class="w-32 min-w-max rounded-sm py-2 px-2"
            >
              {{ child.menuName }}
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script lang="ts" setup>
import { RouteComponent, useRoute, useRouter } from "vue-router";
import { useMenu } from "./menuHook";
import OperateBars from "./OperateBars.vue";
import { onMounted, ref, unref } from "vue";
import {useQuestionHook} from './questionHook'
const route = useRoute()
const {
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
  refreshStatus,
  initMenu,
  menuLevel1,
  menuLevel2,
  menuLevel3,
  menuLevel1List,
  menuLevel2List,
  menuLevel3List,
} = useMenu();

const {createMenuTypeList,createQuestionList} = useQuestionHook()
const arr = createMenuTypeList()
console.log("🚀 ~ file: menu.vue:103 ~ arr:", arr)
async function initShowMenu({num=5}={}){
  await initMenu(num)
  createQuestionList({level1List:menuLevel1List.value,level2List:menuLevel2List.value,level3List:menuLevel3List.value})

}
initShowMenu({num:5})
// onMounted(() => {
//   const {num=5,hide='false',direction='row',thirdDirection='row',single="false"} = route.query
//   isGlobalColumn.value = direction === 'column'
//   isThirdColumn.value = thirdDirection === 'column'
//   isHide.value = hide === 'true'
//   const isSingle = single === 'true'
//   if (typeof num === 'string') {
//     initMenu(parseInt(num), true);
//   }else{
//     initMenu(5, true);
//   }
// });
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
