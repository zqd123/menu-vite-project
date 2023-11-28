import {Menu} from './useProcessDataHook'
type vh = "column" | "row";
interface TypeRandom {
  id?: number;
  num: number;
  thirdDirection: vh;
  globDirection: vh;
  isFirstShow: boolean;
}
export function useQuestionHook() {
  const gTypes: vh[] = ["column", "row"];
  const nums = [5, 7, 9];
  const sTypes: vh[] = ["column", "row"];
  const isB = [false, true];

  /**
   * 生成12种菜单
   * @param globDirection 全局方向
   * @returns
   */
  function createMenuTypeList(globDirection: vh = "column") {
    const arr: TypeRandom[] = [];
    gTypes.forEach((item, index) => {
      nums.forEach((item2, index2) => {
        isB.forEach((item3, index3) => {
          arr.push({
            num: item2,
            thirdDirection: item,
            globDirection: globDirection,
            isFirstShow: item3,
          });
        });
      });
    });
    arr.forEach((item, index) => {
      item.id = index+1;  
    });
    return arr;
  }
  interface Question{
    id:number;
    question:{
      level1Name:string;
      level2Name:string;
      level3Name:string;
      level4Name:string;
      menuItemNum:number
    };
    isAnswer:boolean;
  }
  /**
   * 给定一个数组,随机返回数组中的任一元素
   */
  function getRandom(arr: any[]) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  /**
   * 生成问题
   */
  function createQuestionList({level1List,level2List,level3List}:{level1List:Menu[],level2List:Menu[],level3List:Menu[]}) {
     const levelObj:Menu = getRandom(level1List)
     const level1Name = levelObj.menuName
     const level2Obj:Menu = level2List.find(item=>item.parentId===levelObj.menuId) ??
       level2List[0]
     const level2Name = level2Obj.menuName
     const level3Obj:Menu = level3List.find(item=>item.parentId===level2Obj.menuId) ??
       level3List[0]
     const level3Name = level3Obj.menuName
     const level4Name = level3Obj.children && level3Obj.children[0].menuName
    console.log(level1Name,level2Name,level3Name,level4Name);
    
    return  `该页面中节点A与节点B是否属于父子关系（第一层级和第二层级） 是/否`
  }
  function arrayRepeat(arr: TypeRandom[], num: number) {
    let newArr: TypeRandom[] = [];
    for (let i = 0; i < num; i++) {
      newArr = newArr.concat(arr);
    }
    return newArr;
  }

  function generateFirstTypeList() {
    const arr: TypeRandom[] = [];
    nums.forEach((item, index) => {
      for (let index = 0; index < 2; index++) {
        const obj: TypeRandom = {
          num: item,
          thirdDirection: sTypes[index],
          globDirection: gTypes[index],
          isFirstShow: isB[index],
        };
        arr.push(obj);
      }
    });
    return arr;
  }
  return {
    createMenuTypeList,
    createQuestionList,
    generateFirstTypeList,
  };
}
