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
            id: index + index2 + index3,
            num: item2,
            thirdDirection: item,
            globDirection: globDirection,
            isFirstShow: item3,
          });
        });
      });
    });
    return arr;
  }
  /**
   * 生成问题
   */
  function createQuestionList() {}
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
    generateFirstTypeList,
  };
}
