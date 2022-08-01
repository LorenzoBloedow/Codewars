export const findOdd = (xs: number[]): number | undefined => {
  
  const uniqueNumbersArray: number[] = [];
  for (const e of xs) {
    if (uniqueNumbersArray.indexOf(e) === -1) {
      uniqueNumbersArray.push(e);
    }
  }
  
  for (const e of uniqueNumbersArray) {
    let appearsCount = 0;
    for (const e2 of xs) {
      if (e === e2) {
        appearsCount++;
      }
    }
    if ((appearsCount / 2) !== (Math.trunc(appearsCount / 2))) {
      return e;
    }
  }
};

// 1. make an array of every single unique number in the original array.

// 2. get how many times every single number in the array appears in the original array.

// 2. divide that number by 2 and check if the result is a floating-point number, if so, return the number it was testing against.
