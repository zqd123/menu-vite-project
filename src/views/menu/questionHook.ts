import { Menu } from "./useProcessDataHook";
type vh = "column" | "row";
interface TypeRandom {
  id?: number;
  num: number;
  thirdDirection: vh;
  globDirection: vh;
  isFirstShow: boolean;
}
type QuestionType = "type1" | "type2" | "type3";
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
      item.id = index + 1;
    });
    return arr;
  }
  interface LevelNameObject {
    level1Name: string;
    level2Name: string;
    level3Name: string;
    level4Name: string;
    menuItemNum?: number;
  }
  type nameKey = keyof LevelNameObject;

  interface Question {
    id?: number;
    question: LevelNameObject;
    isTrue: boolean;
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
  function getLevelNameObj({
    level1List,
    level2List,
    level3List,
  }: {
    level1List: Menu[];
    level2List: Menu[];
    level3List: Menu[];
  }): LevelNameObject {
    const levelObj: Menu = getRandom(level1List);
    const level1Name = levelObj.menuName;
    const level2ListByLevel1Obj = level2List.filter(
      (item) => item.parentId === levelObj.menuId
    );
    const level2Obj: Menu = getRandom(level2ListByLevel1Obj);
    const level2Name = level2Obj.menuName;
    const level3ListByLevel2Obj = level3List.filter(
      (item) => item.parentId === level2Obj.menuId
    );
    const level3Obj: Menu = getRandom(level3ListByLevel2Obj);
    const level3Name = level3Obj.menuName;
    const level4Obj: Menu = getRandom(level3Obj.children!);
    const level4Name = level4Obj.menuName;
    console.log(level1Name, level2Name, level3Name, level4Name);

    return { level1Name, level2Name, level3Name, level4Name };
  }
  /**
   * 概率函数
   * @param num 百分比值
   * @returns
   */
  function chanceBoolean(num: number = 50) {
    return Math.random() < num / 100;
  }
  /**
   * 生成指定数量的数组
   * @param param0
   */
  function arrayByNum({
    level1List,
    level2List,
    level3List,
    questionNumber,
  }: {
    level1List: Menu[];
    level2List: Menu[];
    level3List: Menu[];
    questionNumber: number;
  }) {
    const arr = [];
    for (let i = 0; i < questionNumber; i++) {
      arr.push(getLevelNameObj({ level1List, level2List, level3List }));
    }
    return arr;
  }
  /**
   * 获取数组中不等于trueName的任意值
   * @param levelList 
   * @param trueName 
   */
  function randomMenuByLevelList(levelList: Menu[],trueName:string) {
    const randomIndex = Math.floor(Math.random() * levelList.length);
    const randomMenu = levelList[randomIndex];
    if (randomMenu.menuName !== trueName) {
      return randomMenu.menuName;
    } else {
      return randomMenuByLevelList(levelList,trueName);
    }
  }
  /**
   * 指定概率错误问题
   */
  function createQuestion(
    allList: LevelNameObject[],
    falseNum: number,
    level1List: Menu[],
    level2List: Menu[],
    level3List: Menu[],
    questionType: QuestionType
  ) {
    const keyArr: nameKey[] = [
      "level1Name",
      "level2Name",
      "level3Name",
      "level4Name",
    ];
    const questionList:Question[] = allList.map(item=>({question:item,isTrue:true}));
    // const questionList:Question[] = [];

    const randomIndexList: number[] = [];
    while (randomIndexList.length < falseNum) {
      const randomIndex = Math.floor(Math.random() * allList.length);
      if (!randomIndexList.includes(randomIndex)) {
        randomIndexList.push(randomIndex);
      }
    }
    questionList.forEach(item=>{
      randomIndexList.forEach(index=>{
        const randomKey = keyArr[Math.floor(Math.random() * keyArr.length)];
        if (randomKey === "level1Name") {
          questionList[index].question.level1Name =  randomMenuByLevelList(level1List, item.question.level1Name)
        }else if (randomKey === "level2Name") {
          questionList[index].question.level2Name =  randomMenuByLevelList(level2List, item.question.level2Name)
        }else if (randomKey === 'level3Name') {
          questionList[index].question.level3Name =  randomMenuByLevelList(level3List, item.question.level3Name)
        }else if (randomKey === 'level4Name') {
          const otherList = level3List.filter(l3=>l3.menuName!==item.question.level3Name);
          const random = Math.floor(Math.random() * otherList.length);
          questionList[index].question.level4Name =  randomMenuByLevelList(otherList[random].children!, item.question.level4Name)
        }
        questionList[index].isTrue = false;
      })
    })
    return questionList;
  }
  /**
   * 生成问题
   */
  function createQuestionList({
    level1List,
    level2List,
    level3List,
    questionNumber = 20,
    questionType = "type1",
    falsePercent = 50,
  }: {
    level1List: Menu[];
    level2List: Menu[];
    level3List: Menu[];
    questionNumber: number;
    questionType: QuestionType;
    falsePercent: number;
  }) {
    const allList = arrayByNum({
      level1List,
      level2List,
      level3List,
      questionNumber,
    });
    const falseNum = (allList.length * falsePercent) / 100;
    console.log("🚀 ~ file: questionHook.ts:206 ~ useQuestionHook ~ falseNum:", falseNum)
    const res = createQuestion(allList,falseNum,level1List,level2List,level3List,questionType)
    console.log("🚀 ~ file: questionHook.ts:207 ~ useQuestionHook ~ res:", res)
    const bool = chanceBoolean();
    return;
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
