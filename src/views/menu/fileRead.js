import * as fs from "fs/promises";
import path from "path";
import { ref } from "vue";
/**
 * 用于处理数据
 */
function useProcessData() {
  /**全部菜单数据 */
  const allMenu = ref([]);
  /**取值后,剩余菜单数据 */
  const remainMenu = ref([]);
  async function readFile() {
    const filePath = path.resolve() + "/src/views/menu/stringData.txt";
    const str = await fs.readFile(filePath, "utf8");
    const strArr = str.split(/\n/);
    return strArr;
  }
  async function mapData() {
    const arr = await readFile();
    return arr.map((item) => ({ menuName: item, menuId: item }));
  }
  /**
   * 随机获取数组中的几个数据
   * @param {array} arr 数组
   * @param {number} num 获取数量
   */
  function getRandomData(arr, num = 5, { changeRemainMenu }) {
    const result = [];
    while (num > 0) {
      if (arr.length <= 0) {
        throw new Error("菜单剩余不足,取不到了");
      }
      console.count("🚀");
      const index = Math.floor(Math.random() * arr.length);
      //判断result中是否已存在
      if (!result.find((item) => item.menuId === arr[index].menuId)) {
        result.push(arr[index]);
        arr = arr.filter((o) => o.menuId !== arr[index].menuId);

        num--;
      } else {
        num++;
      }
      // result.find((item) => item.menuId === arr[index].menuId) ? num++ : result.push(arr[index]);
      // num--
    }
    changeRemainMenu && changeRemainMenu(arr, result);
    return result;
  }
  /**
   * 去除第一个数组中包含第二个数组的数据
   * @param {array} arr1 第一个对象数组
   * @param {array} arr2 第二个对象数组
   * @return {array} 剩余元素新数组
   */
  function getRemainArr(arr1, arr2) {
    return arr1.reduce((acc, cur) => {
      if (!arr2.find((item) => item.menuId === cur.menuId)) {
        acc.push(cur);
      }
      return acc;
    }, []);
  }
  /**
   * 更新剩余菜单数据
   * @param {*} remainArr 剩余菜单数组
   * @param {*} randomArr 随机选择的菜单数组
   */
  function changeRemainMenu(remainArr, randomArr) {
    remainMenu.value = getRemainArr(remainArr, randomArr);
  }
  return {
    allMenu,
    remainMenu,
    mapData,
    getRandomData,
    changeRemainMenu,
  };
}
const { allMenu, remainMenu, mapData, getRandomData, changeRemainMenu } =
  useProcessData();
allMenu.value = await mapData();
console.log("🚀 ~ file: fileRead.js:64 ~ allMenu.value:", allMenu.value);

const randomMenu = getRandomData(allMenu.value, 5, { changeRemainMenu });
console.log("🚀 ~ file: fileRead.js:41 ~ randomMenu:", randomMenu);
console.log("🚀 ~ file: fileRead.js:60 ~ remainMenu:", remainMenu.value);
getRandomData(remainMenu.value, 2, { changeRemainMenu });
console.log("🚀 ~ file: fileRead.js:60 ~ remainMenu:", remainMenu.value);
getRandomData(remainMenu.value, 3, { changeRemainMenu });
console.log("🚀 ~ file: fileRead.js:60 ~ remainMenu:", remainMenu.value);
