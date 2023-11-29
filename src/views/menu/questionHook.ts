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
   * 随机获取当前菜单中某线4级名称
   */
  function getLevelNameObj({level1List,level2List,level3List}:{level1List:Menu[],level2List:Menu[],level3List:Menu[]}){
    const levelObj:Menu = getRandom(level1List)
     const level1Name = levelObj.menuName
     const level2ListByLevel1Obj = level2List.filter(item=>item.parentId===levelObj.menuId)
     const level2Obj:Menu =  getRandom(level2ListByLevel1Obj)
     const level2Name = level2Obj.menuName
     const level3ListByLevel2Obj = level3List.filter(item=>item.parentId===level2Obj.menuId)
     const level3Obj:Menu = getRandom(level3ListByLevel2Obj)
     const level3Name = level3Obj.menuName
     const level4Obj:Menu = getRandom(level3Obj.children??[])
     const level4Name = level4Obj.menuName
     console.log(level1Name,level2Name,level3Name,level4Name);
     
     return {level1Name,level2Name,level3Name,level4Name}
  }
  /**
   * 概率函数
   * @param num 百分比值
   * @returns 
   */
  function chanceBoolean(num:number=50) {
    return Math.random() < num / 100;
  }
  /**
   * 生成指定数量的数组
   * @param param0 
   */
  function arrayByNum({level1List,level2List,level3List,questionNumber}:{level1List:Menu[],level2List:Menu[],level3List:Menu[],questionNumber:number}){
    const arr = []
    for(let i=0;i<questionNumber;i++){
      arr.push(getLevelNameObj({level1List,level2List,level3List}))
    }
    return arr
  }
  
  /**
   * 生成问题
   */
  function createQuestionList({level1List,level2List,level3List,questionNumber=100,falsePercent=50}:{level1List:Menu[],level2List:Menu[],level3List:Menu[],questionNumber:number,falsePercent:number}) {
     const allList = arrayByNum({level1List,level2List,level3List,questionNumber})
    const falseNum = allList.length * falsePercent / 100
     console.log("🚀 ~ file: questionHook.ts:100 ~ createQuestionList ~ falseNum:", falseNum)
     const bool = chanceBoolean()
     return 
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
