import { ElMessageBox } from "element-plus";
import { computed, ref } from "vue";
import { Menu, menu1, menu2, menu3, menuChild, randomMenu } from "./params";
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
  const firstMenuClick = () => {
    console.log("一级菜单点击");
    if (isHide.value) {
      isShowFirstMenu.value = false;
    }
    isShowSecondMenu.value = true;
    menu2Arr.value = randomMenu(2);

    // isShowSecondMenu.value =!isShowSecondMenu.value
  };

  // 二级菜单
  const secondMenuClick = () => {
    if (isHide.value) {
      isShowFirstMenu.value = false;
      isShowSecondMenu.value = false;
    }
    isShowThirdMenu.value = true;
    menu3Arr.value = randomMenu(3);
    menu3ChildArr.value = randomMenu(4);
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
  };
}
