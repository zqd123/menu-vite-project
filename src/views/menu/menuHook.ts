import { ElMessageBox } from "element-plus";
import { computed, ref } from "vue";
import { Menu, useProcessData } from "./useProcessDataHook";
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
  const menu2Arr = ref<Menu[]>([]);
  const menu3Arr = ref<Menu[]>([]);
  const menu3ChildArr = ref<Menu[]>([]);
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
   */
  async function initMenu(everyLevelNum=5) {
    allMenu.value = await mapData();

    menuLevel1List.value = createLevelDataList(everyLevelNum);
    menuLevel1.value = menuLevel1List.value;
    menuLevel2List.value = createLevelDataList(everyLevelNum,{parentList:menuLevel1List.value});
    console.log("🚀 ~ file: menuHook.ts:46 ~ initMenu ~ menuLevel2List.value:", menuLevel2List.value)
    const arr = createLevelDataList(everyLevelNum,{parentList:menuLevel2List.value});
    menuLevel3List.value= arr.map(item=>{
      item.children=getRandomData(allMenu.value, everyLevelNum)
      return item
    })
    console.log("🚀 ~ file: menuHook.ts:51 ~ initMenu ~ menuLevel3List.value:", menuLevel3List.value)
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
  const firstMenuClick = (m:Menu) => {
    console.log("一级菜单点击");
    if (isHide.value) {
      isShowFirstMenu.value = false;
    }
    isShowSecondMenu.value = true;
    isShowThirdMenu.value = false;
    menuLevel2.value = menuLevel2List.value.filter(item=>item.parentId===m.menuId)
  };
  
  // 二级菜单
  const secondMenuClick = (m:Menu) => {
    if (isHide.value) {
      isShowFirstMenu.value = false;
      isShowSecondMenu.value = false;
    }
    isShowThirdMenu.value = true;
    menuLevel3.value = menuLevel3List.value.filter(item=>item.parentId === m.menuId)
    console.log("🚀 ~ file: menuHook.ts:90 ~ secondMenuClick ~ menuLevel3.value:", menuLevel3.value)
  };

  //选中
  const selectClick = (m:Menu) => {
    console.log("选中:",m);
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
  return {
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
    refreshStatus,
    initMenu,
    menuLevel1,
    menuLevel2,
    menuLevel3,
  };
}
