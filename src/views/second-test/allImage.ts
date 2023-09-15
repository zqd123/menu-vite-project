export interface Image {
  url: string;
  isPerfTest?: boolean;
  selectedColor?: string;
  isTrue?: boolean;
  children?: Image[];
}

const createImage = ({ type = "small", sum = 4 } = {}) => {
  const testArr: Image[] = [];
  for (let i = 1; i <= 3; i++) {
    const testObj: Image = {
      url: `${type}${i}`,
    };
    const arr: Image[] = [];
    for (let index = 1; index <= sum; index++) {
      const obj: Image = {
        url: `${type}${i}_${index}`,
      };
      arr.push(obj);
    }
    testObj.children = arr;
    testArr.push(testObj);
  }
  console.log("🚀 ~ file: allImage.ts:25 ~ createImage ~ testArr:", testArr);
  return testArr;
};

export const smallInformationImages: Image[] = createImage({ type: "small" });
export const mediumInformationImages: Image[] = createImage({
  type: "medium",
  sum: 8,
});
export const largeInformationImages: Image[] = createImage({
  type: "large",
  sum: 16,
});
