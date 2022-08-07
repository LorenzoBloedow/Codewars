export function pyramid(n: number) {
  const pyramidArray = [];
  for (let i = 1; i <= n; i++) {
    
    const subarray = [];
    for (let a = 1; a <= i; a++) {
      subarray.push(1);
    }
    
    pyramidArray.push(subarray);
  }
  
  return pyramidArray;
}
