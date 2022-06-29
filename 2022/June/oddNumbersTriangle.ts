// Function to get the sum of a specific row in a triangle of odd numbers.
export function rowSumOddNumbers(n: number): number {
  let sum: number = 0;
  let oddNumber: number = -1;
  
  // Loop through the rows up to the second to last one while
  // storing the current odd number's value.
  for (let i: number = 1; i < n; i++) {
    for (let x: number = 1; x <= i; x++) {
      oddNumber += 2;
    }
  }
  
  // Sum the numbers in the specified row.
  for (let i: number = 1; i <= n; i++) {
    oddNumber += 2;
    sum += oddNumber;
  }
  return sum;
}
