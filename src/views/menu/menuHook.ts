import { ElMessageBox } from "element-plus";
import { computed, ref } from "vue";
import { Menu, useProcessData } from "./useProcessDataHook";
import NProgress from "../../utils/progress";
import { useQuestionHook } from "./questionHook";
import { useRouter } from "vue-router";
const {
  allMenu,
  remainMenu,
  mapData,
  getRandomData,
  changeRemainMenu,
  menuTree,
  initMenu,
  createLevelDataList,
} = useProcessData();
export function useMenu() {
  const router = useRouter();
  const isHide = ref(false); // 展开下级菜单,隐藏上级菜单
  const isGlobalColumn = ref(false); // 菜单全局方向
  const isThirdColumn = ref(false); // 三级菜单方向
  const isShowFirstMenu = ref(true);
  const isShowSecondMenu = ref(false);
  const isShowThirdMenu = ref(false);

  const menuLevel1List = ref<Menu[]>([]);
  const menuLevel2List = ref<Menu[]>([]);
  const menuLevel3List = ref<Menu[]>([]);

  /**第一级菜单 */
  const menuLevel1 = ref<Menu[]>([]);
  /**第二级菜单 */
  const menuLevel2 = ref<Menu[]>([]);
  /**第三级菜单 */
  const menuLevel3 = ref<Menu[]>([]);

  /**
   * 初始化菜单
   * @param {5|9|13} everyLevelNum 菜单数量
   * @param {boolean}onlySingle 是否不重复
   */
  async function initMenu(everyLevelNum = 5, onlySingle = false) {
    NProgress.start();

    allMenu.value = await mapData();
    remainMenu.value = allMenu.value; // 剩余可选菜单数据,默认是全部数据

    menuLevel1List.value = createLevelDataList(everyLevelNum);
    console.log(
      "🚀 ~ file: menuHook.ts:47 ~ initMenu ~ menuLevel1List.value:",
      menuLevel1List.value
    );
    menuLevel1.value = menuLevel1List.value;
    menuLevel2List.value = createLevelDataList(everyLevelNum, {
      parentList: menuLevel1List.value,
      onlySingle,
    });
    console.log(
      "🚀 ~ file: menuHook.ts:46 ~ initMenu ~ menuLevel2List.value:",
      menuLevel2List.value
    );
    const arr = createLevelDataList(everyLevelNum, {
      parentList: menuLevel2List.value,
      onlySingle,
    });
    menuLevel3List.value = arr.map((item) => {
      item.children = getRandomData(remainMenu.value, everyLevelNum);
      return item;
    });
    NProgress.done();
    console.log(
      "🚀 ~ file: menuHook.ts:51 ~ initMenu ~ menuLevel3List.value:",
      menuLevel3List.value
    );
  }
  const thirdCenter = computed(() => {
    if (isThirdColumn.value) {
      return (
        "flex-row " +
        `${isGlobalColumn.value ? "justify-center " : "justify-start"}`
      );
    } else {
      return (
        "flex-col " +
        `${isGlobalColumn.value ? "items-center  pl-36" : "items-start"}`
      );
    }
  });

  const initTime = new Date(); // 初始时间

  //一级菜单
  const firstMenuClick = (m: Menu) => {
    console.log("一级菜单点击");
    if (isHide.value) {
      isShowFirstMenu.value = false;
    }
    isShowSecondMenu.value = true;
    isShowThirdMenu.value = false;
    menuLevel2.value = menuLevel2List.value.filter(
      (item) => item.parentId === m.menuId
    );
  };

  // 二级菜单
  const secondMenuClick = (m: Menu) => {
    if (isHide.value) {
      isShowFirstMenu.value = false;
      // isShowSecondMenu.value = false;
    }
    isShowThirdMenu.value = true;
    menuLevel3.value = menuLevel3List.value.filter(
      (item) => item.parentId === m.menuId
    );
    console.log(
      "🚀 ~ file: menuHook.ts:90 ~ secondMenuClick ~ menuLevel3.value:",
      menuLevel3.value
    );
  };

  //选中
  const selectClick = (m: Menu) => {
    console.log("选中:", m);
    // const nowTime = new Date();
    // const countTime = (nowTime.getTime() - initTime.getTime()) / 1000;
    // ElMessageBox.alert(`用时: ${countTime}秒`, "提示", {
    //   confirmButtonText: "确定",
    //   callback: () => {
    //     refreshStatus();
    //   },
    // });
  };
  //重置刷新
  const refreshStatus = () => {
    isShowFirstMenu.value = true;
    isShowSecondMenu.value = false;
    isShowThirdMenu.value = false;
  };
  /**回到登录页 */
  function goLogin() {
    router.push("/menu/login");
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("answer");
  }
  return {
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
  };
}
