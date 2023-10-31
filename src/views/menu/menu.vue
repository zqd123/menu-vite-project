<template>
  <OperateBars
    v-model:isGlobalColumn="isGlobalColumn"
    v-model:isThirdColumn="isThirdColumn"
    v-model:isHide="isHide"
  ></OperateBars>
  <div
    class="flex h-full w-full"
    :class="isGlobalColumn ? 'flex-col' : 'flex-row'"
  >
    <transition name="fade">
      <div
        v-show="isShowFirstMenu"
        class="bg-[#324868] flex gap-4 p-4 text-white"
        :class="!isGlobalColumn ? 'flex-col' : 'flex-row justify-center'"
      >
        <div
          v-for="item in menuLevel1"
          :key="item.menuId"
          @click="firstMenuClick(item)"
          class="w-32 font-bold min-w-max rounded-sm py-1 px-2"
        >
          {{ item.menuName }}
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div
        v-show="isShowSecondMenu"
        class="bg-[#e2e0df] flex gap-4 p-4 text-black"
        :class="!isGlobalColumn ? 'flex-col' : 'flex-row justify-center'"
      >
        <div
          v-for="item in menuLevel2"
          :key="item.menuId"
          @click="secondMenuClick(item)"
          class="w-32 font-bold min-w-max rounded-sm py-1 px-2"
        >
          {{ item.menuName }}
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div
        v-show="isShowThirdMenu"
        class="flex-1 bg-[#ffffff] flex gap-4 p-4 text-black"
        :class="thirdCenter"
      >
        <div
          v-for="parent in menuLevel3"
          :key="parent.menuId"
          class="flex items-center gap-4"
          :class="!isThirdColumn ? 'flex-row' : 'flex-col'"
        >
          <span class="font-bold w-32 rounded-sm py-1 px-2">{{
            parent.menuName
          }}</span>
          <div
            class="flex gap-4"
            :class="!isThirdColumn ? 'flex-row' : 'flex-col'"
          >
            <div
              v-for="child in parent.children"
              :key="child.menuId"
              @click="selectClick(child)"
              class="w-32 min-w-max rounded-sm py-1 px-2"
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
import { useMenu } from "./menuHook";
import OperateBars from "./OperateBars.vue";
import { onMounted, ref, unref } from "vue";
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
} = useMenu();

onMounted(() => {
  initMenu(5, true);
});
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
