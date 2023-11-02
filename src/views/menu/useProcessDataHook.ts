
import axios from "axios";
import { ref } from "vue";
import stringData from './stringData.txt'
 export interface Menu {
  menuId: string;
  menuName: string;
  parentId?: string;
  children?: Menu[];
}
/**
 * 用于处理数据
 */
export function useProcessData() {
  /**全部菜单数据 */
  const allMenu = ref<Menu[]>([]);
  /**取值后,剩余菜单数据 */
  const remainMenu = ref<Menu[]>([]);
  /**
   * 读取菜单字符串文件
   * @returns {array} 菜单字符串数组
   */
  async function readFile():Promise<string[]> {
    const {data} = await axios.get(stringData)
    // const data = stringData
    const strArr = data.split(/\n/).filter((item:string):boolean => item.trim() !== '');
    return strArr;
  }
  /**
   * 映射菜单数据
   * @returns {array} 映射之后的数据
   */
  async function mapData():Promise<Menu[]> {
    const arr:string[] = await readFile();
    return arr.map((item:string, index:number):Menu => ({
      menuName: item,
      menuId: item + (index + 1),
    }));
  }
  /**
   * 随机获取数组中的几个数据
   * @param {array} arr 数组
   * @param {number} num 获取数量
   */
  function getRandomData(arr:Menu[], num:number = 5, { onlySingle }:{onlySingle?:boolean}={}) {
    arr = JSON.parse(JSON.stringify(arr));
    const result:Menu[] = [];
    while (num > 0) {
      if (arr.length <= 0) {
        throw new Error("菜单剩余不足,取不到了");
      }
      // console.count("🚀");
      const index = Math.floor(Math.random() * arr.length);
      //判断result中是否已存在
      if (!result.find((item) => item.menuId === arr[index].menuId)) {
        result.push(arr[index]);
        arr = arr.filter((o) => o.menuId !== arr[index].menuId);
        num--;
      } else {
        num++;
      }
    }
    onlySingle && changeRemainMenu(arr, result);
    return result;
  }
  /**
   * 去除第一个数组中包含第二个数组的数据
   * @param {array} arr1 第一个对象数组
   * @param {array} arr2 第二个对象数组
   * @return {array} 剩余元素新数组
   */
  function getRemainArr(arr1:Menu[], arr2:Menu[]) {
    return arr1.reduce((acc, cur) => {
      if (!arr2.find((item) => item.menuId === cur.menuId)) {
        acc.push(cur);
      }
      return acc;
    }, <Menu[]>[]);
  }
  /**
   * 更新剩余可选菜单数据
   * @param {*} remainArr 剩余菜单数组
   * @param {*} randomArr 随机选择的菜单数组
   */
  function changeRemainMenu(remainArr:Menu[], randomArr:Menu[]): void{
    remainMenu.value = getRemainArr(remainArr, randomArr);
  }
  const menuTree = ref<Menu[]>([]);
  /**
   * 初始化菜单数据
   *
   */
  function initMenu(num:number) {
    const menuLevel1 = getRandomData(allMenu.value, num);
    console.log(
      "🚀 ~ file: useProcessDataHook.js:83 ~ initMenu ~ menuLevel1:",
      menuLevel1
    );
    menuTree.value = createMenuTree(menuLevel1, num);
  }
  /**
   * 生成树结构
   */
  function createMenuTree(arr:Menu[], num:number):Menu[] {
    arr.map((item) => {
      item.children = getRandomData(allMenu.value, num).map((child) => {
        child.parentId = item.menuId;
        return child;
      });
      item.children.map((item:Menu) => {
        item.children = getRandomData(allMenu.value, num).map((child) => {
          child.parentId = item.menuId;
          return child;
        });
      });
      return item;
    });
    return arr;
  }
  /**
   * 生成每级菜单数据
   * @param {array} 父级数组
   * @return {array} 当前层级数组
   */
  function createLevelDataList(num:number,{parentList,onlySingle}:{parentList?:Menu[],onlySingle?:boolean}={}){
    if (!parentList) {
      return getRandomData(remainMenu.value,num,{onlySingle})
    }
    return parentList.reduce(
      (acc, item) => {
        const _currentArr = getRandomData(remainMenu.value, num,{onlySingle}).map((child) => {
          child.parentId = item.menuId;
          return child;
        });
        return acc.concat(_currentArr);
      }
    , <Menu[]>[]);
  }
  return {
    allMenu,
    remainMenu,
    mapData,
    getRandomData,
    changeRemainMenu,
    menuTree,
    initMenu,
    createLevelDataList
  };
}
// const {
//   allMenu,
//   remainMenu,
//   mapData,
//   getRandomData,
//   changeRemainMenu,
//   menuTree,
//   initMenu,
//   createLevelDataList
// } = useProcessData();
// allMenu.value = await mapData();
// console.log("🚀 ~ file: fileRead.js:64 ~ allMenu.value:", allMenu.value);

// const randomMenu1 = getRandomData(allMenu.value, 5, { changeRemainMenu });
// console.log("🚀 ", randomMenu1);
// const randomMenu2 = getRandomData(remainMenu.value, 5);
// console.log("🚀 ", randomMenu2);
// const randomMenu3 = getRandomData(remainMenu.value, 5);
// console.log("🚀 ", randomMenu3);

// const menuLevel1 = getRandomData(allMenu.value, 2);
// console.log("🚀 ~ file: useProcessDataHook.js:157 ~ menuLevel1:", menuLevel1)
// const menuLevel2 = createLevelDataList(menuLevel1,2);
// console.log("🚀 ~ file: useProcessDataHook.js:160 ~ menuLevel2:", menuLevel2)
// const menuLevel3 = createLevelDataList(menuLevel2,2);
// console.log("🚀 ~ file: useProcessDataHook.js:163 ~ menuLevel3:", menuLevel3)
