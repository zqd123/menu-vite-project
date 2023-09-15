// const baseUrl = "src/assets/first-test/";
const baseUrl = "";
const preTrueIndex = [4, 5];
/*eslint-disabled*/
const actionTrueIndex = [
  /** 4, 5, 3, 2, 3,
   *  5, 3, 1, 1, 6,
   *  5, 6, 2, 4, 6,
   *  2, 5, 1, 1, 6,
   */
  4, 5, 3, 2, 3, 5, 3, 1, 1, 6, 5, 6, 2, 4, 6, 2, 5, 1, 1, 6,
  // 4, 5, 3, 2,
];
export interface Image {
  url: string;
  isPerfTest?: boolean;
  selectedColor?: string;
  isTrue?: boolean;
  children?: Image[];
}

const createImage = ({ preStr = "" } = {}) => {
  const checkTrueArr = preStr === "" ? actionTrueIndex : preTrueIndex;
  const testArr: Image[] = [];
  for (let i = 1; i <= checkTrueArr.length; i++) {
    const testObj: Image = {
      url: `${baseUrl}${preStr}${i}.0`,
    };
    const arr: Image[] = [];
    for (let index = 1; index <= 6; index++) {
      const obj: Image = {
        url: `${baseUrl}${preStr}${i}.${index}`,
        isTrue: index === checkTrueArr[i - 1],
      };
      arr.push(obj);
    }
    testObj.children = arr;
    testArr.push(testObj);
  }
  console.log("🚀 ~ file: allImage.ts:25 ~ createImage ~ testArr:", testArr);
  return testArr;
};

export const testImages: Image[] = createImage({ preStr: "t" });
export const images: Image[] = createImage();
