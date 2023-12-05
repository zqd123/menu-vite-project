<template>
  <!-- 返回登录页 -->
  <div class="absolute left-0 bottom-0">
    <el-icon color="#FFF" @click="goLogin">
      <House />
    </el-icon>
  </div>
  <div
    class="flex h-full w-full"
    :class="isGlobalColumn ? 'flex-col' : 'flex-row'"
    v-if="isShowQuestionDialog"
  >
    <el-icon
      v-show="isHide"
      color="#FFF"
      class="no-inherit"
      @click="isShowFirstMenu = !isShowFirstMenu"
    >
      <Operation />
    </el-icon>
    <!-- 一级菜单 -->
    <transition name="fade">
      <div
        v-show="isShowFirstMenu"
        class="bg-[#324868] flex gap-1 text-white border-solid border-[#e4e4e4]"
        :class="
          !isGlobalColumn
            ? 'flex-col border-r'
            : 'flex-row justify-center border-b'
        "
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
    <!-- 二级菜单 -->
    <transition name="fade">
      <div
        v-show="isShowSecondMenu"
        class="bg-[#e2e0df] flex gap-1 text-black border-solid border-[#e4e4e4]"
        :class="
          !isGlobalColumn
            ? 'flex-col border-r'
            : 'flex-row justify-center border-b'
        "
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
    <!-- 三四级菜单 -->
    <transition name="fade">
      <div
        v-show="isShowThirdMenu && currentType === 'type2'"
        class="flex-1 bg-[#ffffff] flex gap-1 text-black overflow-auto"
        :class="thirdCenter"
      >
        <div
          v-for="parent in menuLevel3"
          :key="parent.menuId"
          class="flex items-center gap-1"
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
  <!-- 问题弹窗 -->
  <QuestionDialog
    v-if="isShowQuestionDialog"
    :currentMenuTypeObj="currentMenuTypeObj"
    :currentGlobDirection="currentGlobDirection"
    :isHide="isHide"
    :currentType="currentType"
    :questionStrList="questionStrList"
    @refreshMenu="refreshMenu"
    @menuInitStatus="menuInitStatus"
  ></QuestionDialog>
</template>
Í
<script lang="ts" setup>
import { RouteComponent, useRoute, useRouter } from "vue-router";
import { useMenu } from "./menuHook";
import OperateBars from "./OperateBars.vue";
import { onMounted, ref, unref, watch } from "vue";
import { vh, MenuType, QuestionType, useQuestionHook } from "./questionHook";
import QuestionDialog from "./QuestionDialog.vue";
import ExportDialog from "./ExportDialog.vue";
const router = useRouter();
const route = useRoute();
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
  goLogin,
} = useMenu();

const { createMenuTypeList, createQuestionList, questionStrList } =
  useQuestionHook();
//问题弹窗
const isShowQuestionDialog = ref(false);
//数据导出弹窗
const isShowExportDialog = ref(false);
// 12种菜单数据
let menuTypeList: MenuType[] = createMenuTypeList("column");
console.log("🚀十二种随机菜单:", menuTypeList);
let menuTypeIndex: number = 9;
async function initShowMenu({
  num = 5,
  questionType = "type1",
  questionNumber = 1,
}: {
  num: number;
  questionType?: QuestionType;
  questionNumber?: number;
}) {
  menuInitStatus();
  await initMenu(num);
  console.log("菜单初始化成功");

  createQuestionList({
    level1List: menuLevel1List.value,
    level2List: menuLevel2List.value,
    level3List: menuLevel3List.value,
    questionType,
    questionNumber,
  });
  isShowQuestionDialog.value = true;
}
const questionType: QuestionType[] = ["type1", "type2"];
/**当前问题类型 */
let currentType: QuestionType = "type1";
/**当前菜单类型 */
let currentMenuTypeObj: MenuType = menuTypeList[menuTypeIndex];
/**当前全局方向 */
let currentGlobDirection: vh = "column";
// 生成12种菜单
function menuTypeInit(globDirection: vh = "column",currentType: QuestionType = "type1") {
  menuTypeList = createMenuTypeList(globDirection,currentType);
}
function typeInit(
  type: QuestionType = "type1",
  direction: vh = "row",
  repeat: number = 4
) {
  currentType = type;
  currentGlobDirection = direction;
  menuTypeIndex = 0;
  menuTypeInit(currentGlobDirection,currentType);
  currentMenuTypeObj = menuTypeList[menuTypeIndex];
  refreshMenu();
}
/**
 *
 * @description 更新
 * @param params 路由参数
 */
function updateRouteParams({
  globDirection,
  type,
}: {
  globDirection?: vh;
  type?: QuestionType;
}) {
  router.push({
    name: "menu-test",
    params: {
      globDirection: globDirection ?? route.params.globDirection,
      type: type ?? route.params.type,
    },
  });
}
/**监听路径参数变化 */
watch(
  [() => route.params.globDirection, () => route.params.type],
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
    const { globDirection, type } = route.params;
    typeInit(type as QuestionType, globDirection as vh);
  },
  { immediate: true }
);

function refreshMenu() {
  if (menuTypeIndex === menuTypeList.length - 1) {
    if (currentType === "type1") {
      updateRouteParams({ type: "type2" });
      return;
    }
    if (currentGlobDirection === "column" && currentType === "type2") {
      overTest();
      return;
    } else {
      updateRouteParams({ globDirection: "column", type: "type1" });
      return;
    }
  }
  isShowQuestionDialog.value = false;
  currentMenuTypeObj = menuTypeList[menuTypeIndex];
  const { num, isFirstShow, globDirection, thirdDirection, id } =
    menuTypeList[menuTypeIndex];
  isGlobalColumn.value = globDirection === "column";
  isHide.value = isFirstShow;
  isThirdColumn.value = thirdDirection === "column";
  console.log("🚀 ~ file: menu.vue:144 ~ refreshMenu ~ num:", num);
  initShowMenu({ num,questionType:currentType, questionNumber: currentType === "type1" ? 3 : 3 });
  console.log(
    "🚀 ~ file: menu.vue:147 ~ refreshMenu ~ menuTypeIndex:",
    menuTypeIndex
  );
  menuTypeIndex++;
}
/**实验结束 */
function overTest() {
  console.log("实验结束");
  router.push({
    path: "/menu/export",
  });

  // isShowQuestionDialog.value = false;
  // isShowExportDialog.value = true;
}
/**
 * 重置菜单状态
 */
function menuInitStatus(){
  isShowFirstMenu.value = true;
  isShowSecondMenu.value = false;
  isShowThirdMenu.value = false;
}
//初始化
// refreshMenu()
// typeInit();
// onMounted(() => {
//   const {num=5,hide='false',direction='row',thirdDirection='row',single="false"} = route.query
//   isGlobalColumn.value = direction === 'column'
//   isThirdColumn.value = thirdDirection === 'column'
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
