export function findOutlier(integers: number[]): number {
  
  // Return -1.1 if a floating-point number is in the array as this
  // function does not identify the parity of floating-point numbers.
  for (const n of integers) {
    if (n != Math.trunc(n)) {
      return -1.1;
    }
  }
  
  // Because there's only one outlier, we can take the first
  // 3 numbers from the array to determine whether the array
  // is mostly even or mostly odd by translating the parity of
  // the first 3 elements as a group into an integer.
  let parityCounter: number = 0;
  for (let i = 0; i < 3; i++) {
    parityCounter = (integers[i] % 2 == 0) ? ++parityCounter : --parityCounter;
  }
  
  // If the array is mostly even numbers, find the odd number and return it.
  if (parityCounter > 0) {
    for (const n of integers) {
      if (!(n % 2 == 0)) {
        return n;
      }
    }
  }
  
  // If the array is mostly odd numbers, find the even number and return it.
  for (const n of integers) {
    if (n % 2 == 0) {
      return n;
    }
  }
  
  // Return -1.2 if an empty array was used as the argument.
  return -1.2;
}
